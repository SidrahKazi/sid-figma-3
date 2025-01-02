import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";

export default function GearUp() {
    return (
        <div className="p-4 md:p-10">
            <h1 className="mt-6 text-xl md:text-xl font-semibold text-left">Gear Up</h1>
            <div className="mt-4 flex flex-col md:flex-row items-center justify-center md:justify-between space-y-4 md:space-y-0 md:space-x-8">
                <div className="flex items-center space-x-2">
                    <h1 className="text-lg md:text-sm pl-96">Shop Men's</h1>
                    <a className="text-gray-200"><IoIosArrowDropleftCircle size={50} /></a>
                    <a className="text-gray-300"><IoIosArrowDroprightCircle size={50} /></a>
                </div>
                <div className="flex items-center space-x-2 md:ml-auto">
                    <h1 className="text-lg md:text-sm">Shop Women's</h1>
                    <a className="text-gray-200"><IoIosArrowDropleftCircle size={50} /></a>
                    <a className="text-gray-300"><IoIosArrowDroprightCircle size={50} /></a>
                </div>

               
            </div>
        </div>
    );
}
