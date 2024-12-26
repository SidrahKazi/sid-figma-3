import React from 'react'
 

export default function Home() {
  return (
    <div className=" flex items-center justify-center">
      

      <main className="bg-white p-8 max-w-md w-full mt-0">
        <h1 className="text-lg  mb-4">How would you like to get your order?</h1>
        <p className="text-gray-700 mb-4 text-sm">
          Customs regulation for India requires a copy of the recipient's KYC. The address on the KYC needs to match the shipping address. Our courier will contact you via SMS/email to obtain a copy of your KYC. The KYC will be stored securely and used solely for the purpose of clearing customs (including sharing it with customs officials) for all orders and returns. If your KYC does not match your shipping address, please click the link for more information. <a href="#" className="text-black underline">Learn More</a>
        </p>
        <button type="button" className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Deliver it</button>



       


        <form className="max-w-sm mx-auto">
  <div className="mb-5">
    <label form= "name"className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter your name and address:</label>
    <input type="name" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-black text-xs  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="First Name" required />
  </div>
  <div className="mb-5">
   
    <input type="name" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-black text-xs  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Last Name" required />
  </div>
  <div className="mb-5">
    
    <input type="address" id="address" className="shadow-sm bg-gray-50 border border-gray-300 text-black text-xs  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"placeholder="Address Line 1" required />
    <label form="address" className="block mb-2 text-xs text-gray-400 dark:text-white">We do not ship to P.O. boxes</label>
  </div>
  <div className="mb-5">
   
    <input type="address" id="address" className="shadow-sm bg-gray-50 border border-gray-300 text-black text-xs  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Address Line 2" required />
  </div>
  <div className="mb-5">
   
    <input type="address" id="address" className="shadow-sm bg-gray-50 border border-gray-300 text-black text-xs  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Address Line 3" required />
  </div>

  <div className="mb-5 flex space-x-4">
   
   <input type="postal code" id="postal code" className="shadow-sm bg-gray-50 border border-gray-300 text-black text-xs  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Postal Code" required />
   
   <input type="locality" id="locality" className="shadow-sm bg-gray-50 border border-gray-300 text-black text-xs  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Locality" required />
 </div>

 <div className="max-w-sm mx-auto flex space-x-4">
 <label form="countries" className="block mb-2 text-sm font-medium text-gray-400 dark:text-white"></label>
  <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
<option>State/Territory</option>
<option>Goa</option>
    <option>Sindh</option>
    <option>Northern Mariana Islands</option>
    <option> Navassa Island</option>
    <option>Gilgit-Baltistan</option>
  </select>

 <label form="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
  <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
<option>India</option>
<option>Pakistan</option>
    <option>United States</option>
    <option>Canada</option>
    <option>France</option>
    <option>Germany</option>
  </select>

 
</div>
 
  <div className="flex items-start mb-5">
    <div className="flex items-center h-5">
      <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
    </div>
    <label form="terms" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Save this address to my profile</label>
</div>
    <div className="flex items-start mb-5">
    <div className="flex items-center h-5">
      <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
    </div>
    <label form="terms" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Make this my preferred address</label>

    
  </div>
  <button type="submit" className="text-black bg-gray-400  focus:ring-4 focus:outline-none focus:ring-gray-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-400">Continue</button>
</form>



 </main>
    </div>
  );
}

    
