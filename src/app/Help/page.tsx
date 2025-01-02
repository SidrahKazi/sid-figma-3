import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <Head>
        <title>Nike Payment Options</title>
      </Head>


      <div className="bg-white p-8 max-w-6xl w-full flex flex-col lg:flex-row">
        <div className="lg:w-2/3 lg:pr-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">GET HELP</h1>
          <form className="max-w-md mx-auto">   
   
    <div className="relative">
                <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="What can we help you with?" required />
 <label form="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
<div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>

          </div>
</form>

          <h2 className=" text-3xl text-black font-bold mb-4 mt-6">WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?</h2>
          <p className="text-black mb-2 mt-6">
            We want to make buying your favorite Nike shoes and gear online fast and easy, and we accept the following payment options:
          </p>
          <ul className=" list-inside text-black mb-6 ">
            <li className='mb-2'>Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro</li>
            <li className='mb-2'>If you enter your PAN information at checkout, you’ll be able to pay for your order with PayTM or a local credit or debit card.</li>
            <li>Apple Pay</li>
          </ul>
          <p className="text-black mb-4">
            <u className=' font-semibold'>Nike Members </u>can store multiple debit or credit cards in their profile for faster checkout. If you’re not already a Member, <a href="#" className=" underline">join us</a> today.
          </p>
          <div className="flex justify-start mb-6">
          <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">JOIN US</button>
          <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">SHOP NIKE</button>

           
          </div>
          <div>
            <h1 className=' text-black text-2xl font-semibold mb-4 mt-4'>FAQs</h1>
            <div className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-black">Does my card need international purchases enabled?</dt>
              <dd className="mt-1 text-sm text-black sm:mt-0 sm:col-span-2">
                Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout if international purchases need to be enabled.
                <p className="mt-2 text-sm  text-black">Please note, some banks may charge a <a href="#" className="font-semibold underline">small transaction fee</a> for international orders.</p>
              </dd>
            </div>
            <div className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 ">
              <dt className="text-sm font-medium text-black">Can I pay for my order with multiple methods?</dt>
              <dd className="mt-1 text-sm text-black sm:mt-0 sm:col-span-2">No, payment for Nike orders can’t be split between multiple payment methods.</dd>
            </div>
            <div className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-black">What payment method is accepted for SNKRS orders?</dt>
              <dd className="mt-1 text-sm text-black sm:mt-0 sm:col-span-2">You can use any accepted credit card to pay for your SNKRS order.</dd>
            </div>
            <div className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-black">Why don’t I see Apple Pay as an option?</dt>
              <dd className="mt-1 text-sm text-black sm:mt-0 sm:col-span-2">To see Apple Pay as an option in the Nike App or on Nike.com, you'll need to use a compatible Apple device running the latest OS, be signed in to your iCloud account and have a supported card in your Wallet. Additionally, you'll need to use Safari to use Apple Pay on Nike.com.</dd>
            </div>

            <div className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-black">Was this answer helpful?</dt>
            </div>

            <div className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <h1 className='font-semibold text-gray-400'>
                RELATED
              </h1>
            </div>


            <div className='flex'>
            <img src="thumbsup.png" width={30} alt="Image 1" />
            <img src="thumbsdown.png" width={30} alt="Image 1" />
            </div>
           <div>
            <h1 className=' text-gray-600  font-semibold mb-4 mt-4'>
           <u> WHAT ARE NIKE'S DELIVERY OPTIONS? </u> </h1>

           <h1 className=' text-gray-600 font-semibold mb-4 mt-4'>
           <u> HOW DO I GET FREE DELIVERY ON NIKE ORDERS?</u> </h1>
</div>


          </div>
        </div>
        <div className="lg:w-1/3 lg:mt-0 border-l-2 justify-items-center flex flex-col mb-4 gap-8 ml-52 space-x-32">
          <h2 className="text-3xl font-semibold text-black mb-4 mt-36 ml-20 ">CONTACT US</h2>
          <div className="mb-4">
          <img className="" src="phone.png" width={70} height={70} alt="Image 1" />

            <p className="text-black font-semibold">
              000 800 919 0566</p>
<p>Products & Orders: 24 hours a day,<br/>
              7 days a week<br />
              Company Info & Enquiries: 07:30 - <br/> 16:30, Monday - Friday
            </p>
          </div>
          <div className="mb-4">
          <img src="msg.png" width={60} alt="Image 1" />

            <p className="text-black font-semibold">24 hours a day,</p>
            <p className="text-black"> 7 days a week</p>

          </div>
          <div className="mb-4">
          <img src="email.png" width={60} alt="Image 1" />

            <p className="text-black font-semibold">We'll reply within</p>
            <p className="text-black"> five business days</p>

          </div>
          <div>
          <img src="locator.png" width={60} alt="Image 1" />

            <h3 className="text-sm font-semibold text-black">STORE LOCATOR</h3>
            <p className="text-black">Find Nike retail stores near you</p>
          </div>
        </div>
      </div>
    </div>
  );
}

