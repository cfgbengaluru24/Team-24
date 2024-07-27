"use client";  

import { useState } from 'react';
import products from '../../public/products.json';

export default function Home() {
  const [productList] = useState(products);
  return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {productList.map((product) => (
          <div key={product.id} className="border rounded-lg overflow-hidden shadow-lg bg-white">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-brown-800">{product.name}</h2>
              <p className="text-gray-600">Price: ${product.price}</p>
              <p className="text-gray-600">Vendor: {product.vendor}</p>
            </div>
          </div>
        ))}
      </div>
  );
}
