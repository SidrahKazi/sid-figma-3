export default function FeaturedSection() {
    return (
        <div className="px-4 md:px-10">
            <h1 className="text-start text-2xl md:text-4xl font-bold mb-6">
                Featured
            </h1>

            <img src="Image (4).png" alt="Image 1" className="w-full h-auto" />

            <h1 className="mt-10 text-3xl md:text-6xl flex justify-center items-center font-semibold">
                STEP INTO WHAT FEELS GOOD
            </h1>
            <p className="mt-5 text-center">
                Cause everyone should know the feeling of running in that perfect pair.
            </p>

            <div className="flex justify-center mt-6">
                <button type="button" className="py-2.5 px-5 text-sm font-medium text-white focus:outline-none bg-black rounded-full border hover:bg-gray-500">
                    Find Your Shoe
                </button>
            </div>
        </div>
    );
}
