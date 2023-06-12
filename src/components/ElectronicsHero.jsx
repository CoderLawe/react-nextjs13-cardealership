import React from 'react'
import Image from "next/image";
function ElectronicsHero() {
  return (
    <div>
        <div className="absolute h-[100%] w-[100%]">
            <Image className="object-cover" src="https://cdn.discordapp.com/attachments/839784544798638090/1117750544866484375/pexels-junior-teixeira-2047905.jpg" fill   />

            <div className="relative block pt-[20px] align-middle bg-yellow-500 w-[100px] h-[100px] -bottom-[55%] -right-[70%] rounded-full">
                <p className="text-center font-serif font-[600] ">New</p>
                <p className="text-center font-serif font-[400]">Arrivals!</p>

            </div>

            <div className="relative -bottom-[20%] -left-[30%]">
                <p className="text-gray-200 text-[50px] capitalize font-[700]">GREAT DEALS ON</p>
                <p className="text-yellow-500 text-[50px] capitalize font-[700]">ELECTRONICS</p>

            </div>
            <button className="bg-green-900 h-[40px] w-[100px] text-gray-200 relative -bottom-[40%]">Shop Now</button>
        </div>
    </div>
  )
}

export default ElectronicsHero