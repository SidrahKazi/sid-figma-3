import Image from "next/image";

export default function ImageWithFrames() {
    return (
        <div className="container mx-auto p-10 space-y-10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-3">
                {/* Image and Frame Pair */}
                <div className="flex flex-col items-center">
                    <img src="Image (1).png" width={500} alt="Image 1" />
                    <img src="Frame (2).png" width={395} alt="Frame 2" className="mt-4" />
                </div>
                
                <div className="flex flex-col items-center">
                    <img src="Image (2).png" width={500} alt="Image 2" />
                    <img src="Frame (3).png" width={395} alt="Frame 3" className="mt-4" />
                </div>
                
                <div className="flex flex-col items-center">
                    <img src="Image (3).png" width={500} alt="Image 3" />
                    <img src="Frame (4).png" width={395} alt="Frame 4" className="mt-4" />
                </div>
            </div>
        </div>
    );
}
