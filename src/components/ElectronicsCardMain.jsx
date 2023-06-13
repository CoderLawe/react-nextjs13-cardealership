import React from 'react'

function ElectronicsCardMain({ discount, title, price, was, image}) {
  return (
    <div className="w-[332.66px]  shadow-lg rounded-[8px] block px-[15px] pb-[15px] hover:scale-105 cursor-pointer transition-all duration-500 ease-out">
        <img className="w-full h-[218.08px] object-cover " src={image} alt="Electronics image"/>
        <div className="flex items-center space-x-[8px]">
            <div className="bg-red-600 py-1 px-2 mt-[10px]">
                <p className="text-white">{discount}% Off</p>
            </div>
            <p className="text-red-600 tex-[20px] font-[500]">Offer</p>
        </div>

        <div className="mt-[18px] block ">
            <p className="text-gray-700 font-[700]">{title}</p>
            <div className="flex space-x-[10px mt-[10px]">
                <p className="text-black font-[400] ">Bif {price}</p>
                <p>Was <s className="text-strikethrough">{was}</s></p>

            </div>

        </div>
        <div className="flex justify-center">
            <button  className=" h-[40px] px-[5px]  text-[#F75D34] bg-white border border-[#F75D34] text-[12px] mt-[16px] cursor-pointer hover:bg-[#F75D34] hover:text-gray-100 transform transition-all duration-300 ease-out">More Details</button>

        </div>

    </div>
  )
}

export default ElectronicsCardMain