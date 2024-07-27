from flask import Flask, request, render_template
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image
import numpy as np
import os

app = Flask(__name__)
model = load_model('flower_species_model.h5')  # Load your trained model

def preprocess_image(img_path):
    img = image.load_img(img_path, target_size=(64, 64))  # Resize image to the input size expected by the model
    img_array = image.img_to_array(img)  # Convert image to array
    img_array = np.expand_dims(img_array, axis=0)  # Expand dimensions to match the model's input shape
    img_array /= 255.0  # Normalize pixel values to be between 0 and 1
    return img_array

@app.route('/')
def home():
    return render_template('index.html', result=None)

@app.route('/predict', methods=['POST'])
def predict():
    if 'files' not in request.files:
        return render_template('index.html', result='No file part')
    files = request.files.getlist('files')
    if not files:
        return render_template('index.html', result='No selected files')
    
    predictions = []
    for file in files:
        if file and file.filename != '':
            filepath = os.path.join('uploads', file.filename)
            file.save(filepath)
            preprocessed_img = preprocess_image(filepath)
            prediction = model.predict(preprocessed_img)
            predictions.append(prediction[0][0])
    
    # Calculate the percentage of images predicted as class 1
    threshold = 0.5
    predicted_classes = [1 if p > threshold else 0 for p in predictions]
    percentage_class_1 = (predicted_classes.count(1) / len(predicted_classes)) * 100
    
    return render_template('index.html', result=round(percentage_class_1,2))

if __name__ == '__main__':
    if not os.path.exists('uploads'):
        os.makedirs('uploads')
    app.run(debug=True)
