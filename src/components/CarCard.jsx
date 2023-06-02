import Link from 'next/link'
import React from 'react'

function CarCard({ title, price, image}) {
  return (
    <div className="h-[336px] w-[320px] lg:w-[288px] block shadow-xl">
        <div className="block">
            <img className="h-[194px] w-full object-cover cursor-pointer" src={image}/>


            {/* Car details */}
            <div className="mt-[14px] ml-[16px] block">
                <p className="text-[#24272C] text-[16px] font-[400]">{title}</p>
                <p className="text-[#24272C] text-[16px] font-[400] mt-[3px]">{price}</p>

            </div>
            <button className=" h-[40px] w-[256px] text-[#F75D34] mx-[16px] bg-white border border-[#F75D34] text-[12px] mt-[16px] cursor-pointer hover:bg-[#F75D34] hover:text-gray-100 transform transition-all duration-300 ease-out">Check new offers</button>

        </div>

    </div>
  )
}

export default CarCard