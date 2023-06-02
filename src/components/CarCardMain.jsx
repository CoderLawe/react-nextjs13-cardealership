import React, { useContext } from 'react'
import { AiOutlineClockCircle } from "react-icons/ai"
import { VscGear } from "react-icons/vsc";
import { BsFillFuelPumpFill } from "react-icons/bs";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { CarDataContext, CardIdContext } from './context/CarCardContext';

function CarCardMain({type, title, image, price, fuel, mileage, transmission, id, model, images }) {

    const router = useRouter();

    const [carId, setCardId] = useContext(CardIdContext);
    const [carData, setCarData] = useContext(CarDataContext);

    const handleCardClick = () => {
        router.push(`/${id}`);

        setCardId(id)
        setCarData({type, title, image, price, fuel, mileage, transmission, id, model, images})
      };
  return (
    <div className="block">
        <div className="relative">
            
            <Link href={`/${id}`}>
                <img onClick={() => handleCardClick()} className="h-[218.08px] w-[332.66px] object-cover cursor-pointer" src={images[0]}/>

            </Link>

            <div className="bg-[#262626] absolute bottom-[4px] left-[8px] h-[25px] w-[179.86px] flex justify-between items-center rounded-[6px]">
                {/* Left side */}
                <div className="flex space-x-[4px] items-center ml-[8px]">
                    <AiOutlineClockCircle className="h-[11px] w-[11px] text-gray-400" />
                    <p className="text-[13px] text-white font-[500]">{type}</p>

                </div>


                {/* Right side */}

                <div className="mr-[7.85px]">
                    <p className="text-[14px] text-white font-[500]">BIF {price}</p>
                </div>

            </div>

            
        </div>


        <div className="block">
            {/* Bottom details */}
            
            <p className="text-[16px] font-[700] text-[#262626] mt-[15px]">{title} {model}</p>

            <div className="flex space-x-[6.89px]">
                <div className="bg-[#5CA1FF] rounded-[4px] h-[19px] w-[73.39px] text-center pt-[2px] text-white text-[10px]">New</div>
                <p className="text-[#262626] text-[14px] font-[400]">{mileage} Kms</p>

            </div>

            <div className="flex items-center mt-[10px] space-x-[12px]">

                <div className="mt-[4px] flex items-center space-x-[8px]">
                    <VscGear className="text-gray-500 text-[20px]"/>
                    <p className="text-[#262626] text-[14px] font-[600]">{transmission}</p>
                </div>

                <div className="flex items-center space-x-[8px]">
                    <BsFillFuelPumpFill className="text-red-600 text-[20px]"/>
                    <p className="text-[#262626] text-[14px] font-[600]">{fuel}</p>


                </div>

            </div>


            <Link href={`/${id}`}>
                <button  className=" h-[40px] w-[332.66px]  text-[#F75D34] bg-white border border-[#F75D34] text-[12px] mt-[16px] cursor-pointer hover:bg-[#F75D34] hover:text-gray-100 transform transition-all duration-300 ease-out">More Details</button>

            </Link>

        </div>
    </div>
   
  )
}

export default CarCardMain