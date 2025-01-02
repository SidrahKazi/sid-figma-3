import Link from "next/link"


export default function(){
    return(
        <div className="p-4 md:p-10">
            <h1 className="mt-6 mb-4 text-xl md:text-xl font-semibold text-left">Don't Miss</h1>

            <img src="Image (8).png" w-full h-auto 
             alt="Image 1" />

<h1 className="mt-10 text-3xl md:text-6xl flex justify-center items-center font-semibold">
               FLIGHT ESSENTIALS
            </h1>
            <p className="mt-5 text-center">
            Your built-to-last, all-week wears-but with style only Jordan Brand can deliver.
            </p>

            <div className="flex justify-center mt-6">
            <Link href="/store">
            <button className="py-2.5 px-5 text-sm font-medium text-white focus:outline-none bg-black rounded-full border hover:bg-gray-500">
                    Shop
                    </button>
                </Link>
            </div>
            
            </div>

            
    )
}