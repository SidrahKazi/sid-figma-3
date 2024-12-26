import React from 'react'
import Image from 'next/image';
import { Sidebar, SidebarContent } from "@/components/ui/sidebar"


      const products = [
        {
          name: 'Nike Air Force 1',
          price: '$110',
          image: '/images/nike-air-force-1.jpg',
        },
        {
          name: 'Nike Air Max 90',
          price: '$120',
          image: '/images/nike-air-max-90.jpg',
        },
        {
          name: 'Nike React Infinity Run',
          price: '$160',
          image: '/images/nike-react-infinity-run.jpg',
        },
        // Add more products here
      ];
export default function(){
      return (
        <div className="min-h-screen bg-gray-100 flex flex-col lg:flex-row p-4">
          
            <title>Nike Products</title>
            <meta name="description" content="Nike products page" />
            <link rel="icon" href="/favicon.ico" />
          
          <aside className="w-full lg:w-1/4 p-4 bg-white rounded-lg shadow-lg mb-4 lg:mb-0 lg:mr-4">
         
            <h2 className="text-xl font-bold mb-4">Filters</h2>
            <div className="mb-4">
              <h3 className="font-semibold">Gender</h3>
              <ul>
                <li className="hover:underline cursor-pointer">Men</li>
                <li className="hover:underline cursor-pointer">Women</li>
              </ul>
            </div>
            <div className="mb-4">
              <h3 className="font-semibold">Size</h3>
              <ul>
                <li className="hover:underline cursor-pointer">7</li>
                <li className="hover:underline cursor-pointer">8</li>
                <li className="hover:underline cursor-pointer">9</li>
                <li className="hover:underline cursor-pointer">10</li>
              </ul>
            </div>
            <div className="mb-4">
              <h3 className="font-semibold">Color</h3>
              <ul>
                <li className="hover:underline cursor-pointer">Black</li>
                <li className="hover:underline cursor-pointer">White</li>
                <li className="hover:underline cursor-pointer">Red</li>
                <li className="hover:underline cursor-pointer">Blue</li>
              </ul>
            </div>
            <div className="mb-4">
              <h3 className="font-semibold">Price</h3>
              <ul>
                <li className="hover:underline cursor-pointer">Under $50</li>
                <li className="hover:underline cursor-pointer">$50 - $100</li>
                <li className="hover:underline cursor-pointer">$100 - $150</li>
                <li className="hover:underline cursor-pointer">Over $150</li>
              </ul>
            </div>
          </aside>
          <main className="flex-grow p-4 bg-white rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold mb-8">New Arrivals</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="rounded-md"
                  />
                  <h2 className="text-lg font-semibold mt-4">{product.name}</h2>
                  <p className="text-gray-700">{product.price}</p>
                </div>
              ))}
            </div>
          </main>
        </div>
      );
    
}


    
