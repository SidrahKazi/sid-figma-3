import React from 'react'
import Image from 'next/image';
import { CiShoppingCart } from "react-icons/ci";



const page = () => {
  return (
    
    
        <div className="min-h-screen bg-white flex items-center justify-center p-4">
          
            <title>Nike Air Force 1 PLT.AF.ORM</title>
          
          <div className="bg-white p-8  max-w-4xl w-full flex flex-col md:flex-row items-center md:items-start gap-10">
            <div className="flex justify-center w-full md:w-1/2">
              <Image
                src="/shoe.png" 
                alt="Nike Air Force 1 PLT.AF.ORM"
                width={500}
                height={500}
                className="object-contain rounded-lg"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Nike Air Force 1 PLT.AF.ORM</h1>
              <p className="text-gray-600 mb-4">
                The Nike Air Force 1 PLT.AF.ORM puts a fresh spin on the b-ball original with a lifted midsole and new details.
                The leather upper breaks in easily and feels soft, while the new design lines create a sleek look. The sculpted
                midsole and outsole feature a slightly exaggerated stance, giving you a bold look with every step.
              </p>
              <p className="text-2xl font-semibold text-gray-700 mb-4">₹ 8 695.00</p>
              <button type="button" className="text-white flex gap-2 bg-gray-800 hover:bg-gray-900 
              focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 
               dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"><CiShoppingCart />  
  Add To Cart
</button>

            </div>
          </div>
        </div>
      );
    }
    
     
       


    

export default page
