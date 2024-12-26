import React from 'react'

const page = () => {
  return (
    


    <div className="flex items-center justify-center min-h-screen bg-white p-4">
      
        <title>Become a Nike Member</title>
      
      <div className= " p-8 w-full max-w-md">
        <div className="flex justify-center mb-4">
          <img src="/Frame (1).png" alt="Nike Logo" className="h-8" />
        </div>
        <h1 className="text-2xl font-bold mb-4 text-center">BECOME A NIKE MEMBER</h1>
        <p className="text-center mb-6 text-gray-400">
          Create your Nike Member profile and get first access to the very best of Nike products, inspiration and community.
        </p>
        <form>
          <div className="mb-4">
            <input type="email" placeholder="Email address" className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div className="mb-4">
            <input type="password" placeholder="Password" className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div className="mb-4">
            <input type="text" placeholder="First Name" className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div className="mb-4">
            <input type="text" placeholder="Last Name" className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div className="mb-4">
            <input type="date" placeholder="Date of Birth" className="w-full p-2 border text-gray-400 border-gray-300 rounded" />
            <small className="text-gray-400">Get a Nike Member Reward every year on your Birthday.</small>
          </div>
          <div className="mb-4">
            <select className="w-full p-2 border text-gray-400 border-gray-300 rounded">
              <option>India</option>
              <option>Pakistan</option>
              <option>US</option>
              <option>Srilanka</option>
              <option>Australia</option>
              <option>Canada</option>
              <option>Saudia Arab</option>
              <option>Qatar</option>

              
            </select>
          </div>
          <div className="mb-4 flex justify-between text-gray-400">
            <label className="flex items-center">
              <input type="radio" name="gender" value="male" className="mr-2" />
              Male
            </label>
            <label className="flex items-center">
              <input type="radio" name="gender" value="female" className="mr-2" />
              Female
            </label>
          </div>
          <div className="mb-4 text-gray-400 text-sm">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Sign up for emails to get updates from Nike on products, offers, and your Member benefits. 
            </label>
            <label>
            By creating an account, you agree to Nike's <u>Privacy Policy</u> and <u>Terms of Use.</u>
            </label>
          </div>
          <div className="mb-4 text-center">
            <button type="submit" className="w-full bg-black text-white p-2 rounded">
              JOIN US
            </button>
          </div>
          <div className="text-center text-xs">
            <a href="#" className="text-gray-400">Already a Member? <u className='text-black'>Sign In.</u></a>
          </div>
        </form>
      </div>
    </div>
  );
}


  

export default page
