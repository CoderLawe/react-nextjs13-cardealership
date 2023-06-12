import React from 'react'

function ElectronicsCardMain() {
  return (
    <div className="w-[332.66px]  shadow-lg rounded-[8px] block px-[15px] pb-[15px] hover:scale-105 cursor-pointer transition-all duration-500 ease-out">
        <img className="w-full h-[218.08px] object-cover " src="https://m.media-amazon.com/images/I/3145szSi9kL._AC_SY200_.jpg" alt="Electronics image"/>
        <div className="flex items-center space-x-[8px]">
            <div className="bg-red-600 py-1 px-2 mt-[10px]">
                <p className="text-white">14% Off</p>
            </div>
            <p className="text-red-600 tex-[20px] font-[500]">Offer</p>
        </div>

        <div className="mt-[18px] block ">
            <p className="text-gray-700 font-[700]">Ipad 2nd Gen Case</p>
            <div className="flex space-x-[10px mt-[10px]">
                <p className="text-black font-[400] ">Bif 20,000</p>
                <p>Was <s className="text-strikethrough">50,000</s></p>

            </div>

        </div>
    </div>
  )
}

export default ElectronicsCardMain