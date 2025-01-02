import React from 'react'
import Image from 'next/image'
import { IoIosHeartEmpty } from "react-icons/io";
import { RiDeleteBinLine } from "react-icons/ri";
import Link from 'next/link';

const page = () => {
  return (
    <div>
      
    <div className="min-h-screen bg-white flex flex-col p-4">
      
       
      
      <main className="max-w-4xl mx-auto flex">
        <div>
          <div className="flex justify-between items-center border-b pb-4 mb-4  bg-gray-100 p-6 ">
            <p>Free Delivery</p>
            <p>Applies to orders of ₹ 14 000.00 or more. <u className='text-black'>   View details </u></p>
</div>
            <div>
            <h1 className="text-2xl font-medium">Bag</h1>
          </div>
          <div className="space-y-4">
            {/* Item 1 */}
            <div className="flex items-center space-x-4 gap-4 p-6">
              <Image src="/Frame (26).png" alt="Nike Dri-FIT ADV TechKnit Ultra" width={150} height={150} className=" object-cover rounded-lg" />
              <div className="flex-1">
                <h2 className=" font-semibold">Nike Dri-FIT ADV TechKnit Ultra</h2>
              
                <p className="text-gray-500">Men's Short-Sleeve Running Top</p>
                <p className="text-gray-500">Ashen Slate/Cobalt Bliss</p>
        
                <div className="flex items-center space-x-2 mt-2">
                  <span className="text-gray-500">Size: L</span>
                  <span className="text-gray-500">Quantity: 1</span>
                 
                </div>
                
                <div className='flex mt-4 space-x-4 '><IoIosHeartEmpty />
                <RiDeleteBinLine /></div>

              </div>
              <div className="text-right">
                <p className="text-lg"> MRP: ₹ 3 895.00</p>
              </div>
            </div>
            {/* Item 2 */}
            <div className="flex items-center space-x-4 gap-6 p-6 border-t border-b">
              <Image src="/Image (10).png" alt="Nike Air Max 97 SE" width={150} height={150} className=" object-cover rounded-lg" />
              <div className="flex-1">
                <h2 className=" font-semibold">Nike Air Max 97 SE</h2>
                <p className="text-gray-500">Men's Shoes</p>
                <p className="text-gray-500">Flat Pewter/Light Bone/Black/White</p>
                <div className="flex items-center space-x-2 mt-2">
                  <span className="text-gray-500">Size: 8</span>
                  <span className="text-gray-500">Quantity: 1</span>
                </div>
                <div className='flex mt-4 space-x-4'><IoIosHeartEmpty /> <RiDeleteBinLine />
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg "> MRP: ₹ 16 995.00</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 mt-6 space-x-8">
          <h2 className="text-2xl font-medium mb-4 ml-8">Summary</h2>
          <div className="space-y-4 ">
            <div className="flex justify-between ">
              <span className="text-gray-500">Subtotal</span>
              <span className="text-lg">₹ 20 890.00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Estimated Delivery & Handling</span>
              <span className="text-lg">Free</span>
            </div>
            <div className="flex justify-between border-t border-b  pt-4 mt-4">
              <span className="text-lg ">Total</span>
              <span className="text-lg ">₹ 20 890.00</span>
            </div>
          </div>
       <Link href="/Checkout">  <button className="w-full bg-black text-white py-3 mt-6 rounded-3xl">Member Checkout</button></Link>
        </div>
      </main>
    </div>
  
    </div>
  );
}

export default page
