

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-20">
      
      <div className="bg-white p-8 max-w-md w-full">
        <div className="flex justify-center mb-6">
          <img src="/Frame (1).png" alt="Nike Logo" className="h-12" />
        </div>
        <h2 className="text-2xl font-bold text-center mb-6">
          YOUR ACCOUNT <br /> FOR EVERYTHING <br /> NIKE
        </h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700"></label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Email address"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700"></label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Password"
              required
            />
          </div>
          <div className="flex items-center justify-between mb-4 mt-6">
            <div className="flex items-center">
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-500">
                Keep me signed in
              </label>
            </div>
            <div className="text-sm">
              <a href="#" className="font-medium text-gray-400 hover:text-black">
                Forgotten your password?
              </a>
            </div>
          </div>
          <div className="mt-6 text-center text-xs text-gray-500 mb-6">
          <p>
            By logging in, you agree to Nike's{' '}
            <a href="#" className="underline">
              Privacy Policy
            </a>{' '} <br/>
            and{' '}
            <a href="#" className="underline">
              Terms of Use
            </a>
            .
          </p>
        </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              SIGN IN
            </button>
          </div>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-400">
            Not a Member?{' '}
            <a href="#" className="font-medium text-black hover:text-gray-800">
            <u>  Join  us </u>
            </a>
          </p>
        </div>
        
      </div>
    </div>
  );
}
