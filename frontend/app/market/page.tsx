// "use client";  

// import { useState } from 'react';
// import { marketData } from '@/lib/market';

// export default function Home() {
//   const [productList] = useState(marketData);
//   return (
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
//         {productList.map((product) => (
//           <div key={product.Representative} className="border rounded-lg overflow-hidden shadow-lg bg-white">
//             <img src={product.image} alt={product.Sells} className="w-full h-48 object-cover" />
//             <div className="p-4">
//               <h2 className="text-xl font-semibold text-brown-800">{product.Sells}</h2>
//               <p className="text-gray-600">Price: INR {product.price}</p>
//               <p className="text-gray-600">Vendor: {product.vendor}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//   );
// }


"use client";  

import { useState } from 'react';
import { marketData } from '@/lib/market';
import Layout from '../market/layout';

interface Product {
  Representative: string;
  Sells: string;
  price: number;
  vendor: string;
  image: string;
}

interface CartItem {
  id: string;
  name: string;
  price: number;
  vendor: string;
  image: string;
}

export default function Home() {
  const [productList] = useState<Product[]>(marketData);
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  return (
    // <Layout cart={cart}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {productList.map((product) => (
          <div key={product.Representative} className="border rounded-lg overflow-hidden shadow-lg bg-white">
            <img src={product.image} alt={product.Sells} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-brown-800">{product.Sells}</h2>
              <p className="text-gray-600">Price: INR {product.price}</p>
              <p className="text-gray-600">Seller: {product.vendor}</p>
              <button
                className="mt-2 bg-green-500 text-white py-1 px-2 rounded"
                onClick={() => addToCart({
                  id: product.Representative,
                  name: product.Sells,
                  price: product.price,
                  vendor: product.vendor,
                  image: product.image
                })}
              >
                + Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    // </Layout>
  );
}

