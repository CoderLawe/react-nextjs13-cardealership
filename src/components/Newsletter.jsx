function Newsletter() {


    return (
        <div className="md:flex block space-y-6 md:space-y-0 mx-12 text-center justify-between bg-yellow-300 px-5 py-6 shadow-md mt-[40px]">
            <div className="flex-col gap-y-3">
                {/* Left side */}
                <h5 className="text-gray-900 font-serif text-lg">Join our Newsletter</h5>
                <h6 className="text-gray-700 font-serif ">Stay in the loop on the latest car listings in Burundi!</h6>
            </div>

            <div className="flex justify-center md: space-x-2 items-center">
                {/* Right side */}
                <input className="focus:outline-none border border-black text-black  focus:border-black h-9 transform transition-all duration-500 ease-out bg-transparent px-3 rounded-[8px]" placeholder="Your email Address"/>
                <button className=" h-[30px] w-full text-black rounded-r-[8px] font-[500] px-[3px] bg-[#F75D34] border border-[#F75D34] text-[12px] cursor-pointer hover:bg-[#F75D34] hover:text-gray-100 transform transition-all duration-300 ease-out">Subsribe!</button>

            </div>
        </div>
    )
}

export default Newsletter