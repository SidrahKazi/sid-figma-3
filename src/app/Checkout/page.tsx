import Image from "next/image";

export default function Checkout() {
  return (
    <div>
      <div className="flex justify-end items-center mr-6 gap-7">
        <p>000 800 100 9538</p>
        <Image
        src="/Frame (29).png"
        alt="Message"
        width={20}
        height={20}
        />
        <Image
        src="/box.png"
        alt="Box"
        width={20}
        height={20}
        />
      </div>
      <div className="flex lg:flex-row flex-col items-start mt-10 gap-10 mx-auto bg-white p-6">
      
      <div className="mx-auto max-w-md mt-10">
        <h2 className="text-lg font-semibold mb-4">
          How would you like to get your order?
        </h2>
        <p className="text-sm text-gray-600 mb-6">
          Customs regulation for India require a copy of the recipient's KYC.
          The address on the KYC needs to match the shipping address. Our
          courier will contact you via SMS/email to obtain a copy of your KYC.
          The KYC will be stored securely and used solely for the purpose of
          clearing customs (including sharing it with customs officials) for all
          orders and returns. If your KYC does not match your shipping address,
          please click the link for more information.{" "}
          <a href="#" className="text-blue-600 font-medium hover:underline">
            Learn More
          </a>
        </p>

        <button className="flex items-center text-start gap-6 border border-black py-2 px-4 rounded-md ">
          <Image src="/deliver(l).png" alt="Deliver" width={24} height={24} />
          Deliver It
        </button>

        <div className="min-h-screen flex items-center justify-center">
          <div className="w-full max-w-md p-6"> 
            <h1 className="text-xl font-semibold text-gray-800 mb-4">
              Enter your name and address:
            </h1>
            <form className="space-y-4">
              {/* First Name */}
              <div>
                
                <input
                  type="text"
                  id="firstName"
                  className="mt-1 block w-full  text-black px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black text-sm"
                  placeholder="First Name"
                  defaultValue="First Name"
                />
              </div>

              {/* Last Name */}
              <div>
               
                <input
                  type="text"
                  id="lastName"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black text-sm"
                  placeholder="Last Name"
                  defaultValue="Last Name"
                />
              </div>

              {/* Address Line 1 */}
              <div>
              
                <input
                  type="text"
                  id="addressLine1"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black text-sm"
                  placeholder="Address Line 1"
                  defaultValue="Address Line 1"
                />
                <p className="text-xs text-gray-500 mt-1">
                  We do not ship to P.O. boxes
                </p>
              </div>

              {/* Address Line 2 */}
              <div>
                  
                
                <input
                  type="text"
                  id="addressLine2"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black text-sm"
                  placeholder="Address Line 2"
                  defaultValue="Address Line 2"
                />
              </div>

              {/* Address Line 3 */}
              <div>
            
                <input
                  type="text"
                  id="addressLine3"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black text-sm"
                  placeholder="Address Line 3"
                  defaultValue="Address Line 3"
                />
              </div>

              {/* Postal Code & Locality */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  
                  <input
                    type="text"
                    id="postalCode"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black text-sm"
                    placeholder="Postal Code"
                    defaultValue="Postal Code"
                  />
                </div>
                <div>
                 
                  <input
                    type="text"
                    id="locality"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black text-sm"
                    placeholder="Locality"
                    defaultValue="Locality"
                  />
                </div>
              </div>

              {/* State/Territory & Country */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                 
        
                   
                  <select
                    id="state"
                    className="mt-1 block w-full px-3 py-2 border text-gray-400 border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black text-sm"
                  >
                    <option value="">State/Territory</option>
                    <option value="Texas">Texas</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="KPK">KPK</option>
                    
                    
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium text-gray-700"
                  >
                    
                  </label>
                  <input
                    type="text"
                    id="country"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black text-sm"
                    placeholder="India"
                    defaultValue="India"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="min-h-screen flex items-center justify-center">
          <div className="w-full max-w-lg p-6">
            {/* Save Address Section */}
            <div className="space-y-4 mb-6">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="saveAddress"
                  className="h-4 w-4 border-gray-300 rounded text-black focus:ring-black"
                />
                <label
                  htmlFor="saveAddress"
                  className="ml-2 text-sm text-gray-700"
                >
                  Save this address to my profile
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="preferredAddress"
                  className="h-4 w-4 border-gray-300 rounded text-black focus:ring-black"
                />
                <label
                  htmlFor="preferredAddress"
                  className="ml-2 text-sm text-gray-700"
                >
                  Make this my preferred address
                </label>
              </div>
            </div>

            {/* Contact Information Section */}
            <div className="space-y-6 mb-6">
              <h2 className="text-lg font-semibold text-gray-800">
                What's your contact information?
              </h2>
              {/* Email */}
              <div>
              
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black text-sm"
                  placeholder="Email"
                  defaultValue="Email"
                />
                <p className="text-xs text-gray-500 mt-1">
                  A confirmation email will be sent after checkout.
                </p>
              </div>

              {/* Phone Number */}
              <div>
                
                
                
                <input
                  type="tel"
                  id="phoneNumber"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black text-sm"
                  placeholder="Phone Number"
                  defaultValue="Phone Number"
                />
                <p className="text-xs text-gray-500 mt-1">
                  A carrier might contact you to confirm delivery.
                </p>
              </div>
            </div>

            {/* PAN Section */}
            <div className="space-y-6">
              <h2 className="text-lg font-semibold text-gray-800">
                What's your PAN?
              </h2>
              {/* PAN Input */}
              <div>
                
                <input
                  type="text"
                  id="pan"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black text-sm"
                  placeholder="PAN"
                  defaultValue="PAN"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Enter your PAN to enable payment with UPI, Net Banking, or
                  local card methods.
                </p>
              </div>
              {/* Save PAN */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="savePan"
                  className="h-4 w-4 border-gray-300 rounded text-black focus:ring-black"
                />
                <label htmlFor="savePan" className="ml-2 text-xs text-gray-500">
                  Save PAN details to Nike Profile
                </label>
              </div>
            </div>

            {/* Consent Section */}
            <div className="mt-6">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="consent"
                  className="h-4 w-4 border-gray-300 rounded text-black focus:ring-black"
                />
                <label htmlFor="consent" className="ml-2 text-xs text-gray-500">
                  I have read and consent to eShopWorld processing my
                  information in accordance with the{" "}
                  <a
                    href="#"
                    className="text-gray-500 underline hover:text-blue-700"
                  >
                    Privacy Statement
                  </a>{" "}
                  and{" "}
                  <a
                    href="#"
                    className="text-gray-500 underline hover:text-blue-700"
                  >
                    Cookie Policy
                  </a>
                  . eShopWorld is a trusted Nike partner.
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="w-full max-w-md p-4">
            {/* Continue Button */}
            <div className="flex justify-center mb-6">
              <button className="w-full bg-gray-100 text-gray-400 py-3 rounded-full text-sm font-medium shadow-sm">
                Continue
              </button>
            </div>

            {/* Steps */}
            <div className="space-y-4">
              {/* Delivery */}
              <div className="text-sm font-medium text-black border-b border-gray-200 py-2">
                Delivery
              </div>

              {/* Shipping */}
              <div className="text-sm font-medium text-gray-400 border-b border-gray-200 py-2">
                Shipping
              </div>

              {/* Billing */}
              <div className="text-sm font-medium text-gray-400 border-b border-gray-200 py-2">
                Billing
              </div>

              {/* Payment */}
              <div className="text-sm font-medium text-gray-400 border-b border-gray-200 py-2">
                Payment
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center mx-auto">
        <div className="w-full max-w-md p-6">
          <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

          {/* Subtotal Section */}
          <div className="flex justify-between items-center mb-2">
            <p className="text-gray-600">Subtotal</p>
            <p className="font-medium">₹ 20 890.00</p>
          </div>

          {/* Shipping Section */}
          <div className="flex justify-between items-center mb-2">
            <p className="text-gray-600">Delivery/Shipping</p>
            <p className="font-medium">Free</p>
          </div>

          {/* Total Section */}
          <div className="flex justify-between items-center border-t border-gray-200 pt-4 mb-4">
            <p className="text-lg font-medium">Total</p>
            <p className="text-lg font-bold">₹ 20 890.00</p>
          </div>
          <p className="text-sm text-gray-500 mb-6">
            (*The total reflects the price of your order, including all duties
            and taxes)
          </p>

          {/* Delivery Information */}
          <h3 className="font-semibold text-gray-800 mb-4">
            Arrives Mon, 27 Mar - Wed, 12 Apr
          </h3>

          {/* Items Section */}
          <div className="mb-4">
            {/* Item 1 */}
            <div className="flex items-start mb-4">
              <Image
                src="/men.png"
                alt="Nike Dri-FIT Shirt"
                width={208}
                height={208}
                className="w-20 h-20 object-cover rounded"
              />
              <div className="ml-4">
                <p className="font-medium">
                  Nike Dri-FIT ADV TechKnit Ultra Men's Short-Sleeve Running Top
                </p>
                <p className="text-sm text-gray-500">Qty 1</p>
                <p className="text-sm text-gray-500">Size L</p>
                <p className="text-sm font-medium mt-2">₹ 3 895.00</p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-start">
              <Image
                src="/Image (10).png"
                alt="Nike Air Max"
                width={208}
                height={208}
                className="w-20 h-20 object-cover rounded"
              />
              <div className="ml-4">
                <p className="font-medium">Nike Air Max 97 SE Men's Shoes</p>
                <p className="text-sm text-gray-500">Qty 1</p>
                <p className="text-sm text-gray-500">Size UK 8</p>
                <p className="text-sm font-medium mt-2">₹ 16 995.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
