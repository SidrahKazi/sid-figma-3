export default function(){
    return(
        <div className="container mx-auto p-10 space-y-10 ">
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 mt-0">
            {/* Image and Frame Pair */}
            <div className="flex flex-col items-center">
                <img src="men.png" width={300} alt="Image 1" />
                <img src="Frame (5).png" width={295} alt="Frame 2" className="mt-4" />
            </div>
            
            <div className="flex flex-col items-center">
                <img src="Image (5).png" width={300} alt="Image 2" />
                <img src="Frame (6).png" width={295} alt="Frame 3" className="mt-4" />
            </div>
            
            <div className="flex flex-col items-center">
                <img src="Image (6).png" width={300} alt="Image 3" />
                <img src="Frame (7).png" width={295} alt="Frame 4" className="mt-4" />
            </div>

            <div className="flex flex-col items-center">
                <img src="Image (7).png" width={300} alt="Image 3" />
                <img src="Frame (8).png" width={295} alt="Frame 4" className="mt-4" />
            </div>
        </div>
    </div>
);
}