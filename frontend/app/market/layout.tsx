// components/market-layout.tsx
// import { ReactNode } from 'react';

// interface LayoutProps {
//   children: ReactNode;
// }

// export default function Layout({ children }: LayoutProps) {
//   return (
//     <div className="min-h-screen bg-brown-100">
//       <header className="bg-green-700 text-white shadow">
//         <div className="container mx-auto p-4">
//           <h1 className="text-2xl font-bold">The Shola Market Place</h1>
//         </div>
//       </header>
//       <main className="container mx-auto p-4">{children}</main>
//     </div>
//   );
// }

import { ReactNode } from 'react';

interface CartItem {
  id: string;
  name: string;
  price: number;
  vendor: string;
  image: string;
}

interface LayoutProps {
  children: ReactNode;
  cart: CartItem[];
}

export default function Layout({ children, cart }: LayoutProps) {
  const totalItems = cart?.length || 0;

  return (
    <div className="min-h-screen bg-brown-100">
      <header className="bg-green-700 text-white shadow">
        <div className="container mx-auto p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">The Shola Market Place</h1>
          <div className="flex items-center">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/001/504/962/small/shopping-cart-icon-free-vector.jpg" // Add your cart icon image to the public folder
              alt="Cart"
              className="w-6 h-6"
            />
            <span className="ml-2 text-xl">{totalItems}</span>
          </div>
        </div>
      </header>
      <main className="container mx-auto p-4">{children}</main>
    </div>
  );
}
