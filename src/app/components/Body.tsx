import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";

export default function(){
    return(
        <div className="bg-white text-black ">

            <h1 className="flex justify-center items-center">First Look</h1>

            <h1 className="text-6xl justify-center flex items-center font-bold"> NIKE AIR MAX PULSE </h1>

            <p className="justify-center flex items-center mt-6"> Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse </p>

              <p className="justify-center flex items-center">  -designed to push you past your limits and help you go to the max </p>
<div className="justify-center flex items-center mt-8">
              <button type="button" className="text-white  bg-black hover:bg-gray-500 focus:outline-none focus:ring-4
              font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">Notify Me</button>

<button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none
 bg-black rounded-full border  hover:bg-gray-500
 ">Shop Air Max</button>
 </div>

 <div >
    <h1 className="pl-20 text-xl mt-8 font-semibold">
        Best of Air Max </h1>
        <h1 className="text-xl text-black font-medium flex justify-end pr-20 gap-2"> Shop 
<a className="flex text-gray-200 "><IoIosArrowDropleftCircle size={50}/> <IoIosArrowDroprightCircle size={50} />
        </a>
        </h1>
    

    
 </div>
        </div>
    )
}