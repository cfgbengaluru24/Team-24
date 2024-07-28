from fastapi import FastAPI, File, UploadFile
from fastapi.responses import JSONResponse
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image
import numpy as np
from fastapi.middleware.cors import CORSMiddleware
import io
import os

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Add your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Load your trained model
model = load_model('flower_species_model.h5')

def preprocess_image(img_file):
    img = image.load_img(img_file, target_size=(64, 64))
    img_array = image.img_to_array(img)
    img_array = np.expand_dims(img_array, axis=0)
    img_array /= 255.0
    return img_array

@app.post("/predict")
async def predict(files: list[UploadFile] = File(...)):
    if not files:
        return JSONResponse(content={"error": "No files uploaded"}, status_code=400)

    predictions = []
    for file in files:
        contents = await file.read()
        img = io.BytesIO(contents)
        preprocessed_img = preprocess_image(img)
        prediction = model.predict(preprocessed_img)
        predictions.append(prediction[0][0])
        print("File uploaded")

    threshold = 0.5
    predicted_classes = [1 if p > threshold else 0 for p in predictions]
    percentage_class_1 = (predicted_classes.count(1) / len(predicted_classes)) * 100

    # return {"percentage_class_1": round(percentage_class_1, 2)}
    return {"message": "Files uploaded", "percentage": round(percentage_class_1, 2)}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)