import Select from "react-select";

import { useState } from "react";

function InfoCard() {

const budgetOptions = [
    { value: "2-5 M BIF", label: "5-12 M BIF" },
    { value: "12-16 M BIF", label: "16-32 M BIF" },
    { value: "32M + BIF", label: "32M + BIF" },
  ];

const carTypeOptions = [
    { value: "Hatchback", label: "Hatchback" },
    { value: "Sedan", label: "Sedan" },
    { value: "Station Wagon", label: "Station Wagon" },
    { value: "SUV", label: "SUV" },
    { value: "Compact SUV", label: "Compact SUV" },


]

  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  return (
    <div className="bg-white pb-[45px] w-[348px] z-[20] absolute bottom-[40px] lg:top-[60px] left-[30px] rounded-[8px] block ">
        
        {/* Top card */}
        <p className="text-[#24272C] text-[30px] font-[700] ml-[20px] mr-[78.06px] mt-[21px]">Find the right car!</p>

        {/* Option buttons */}

        <div className="flex space-x-[8px]">
            <button className="bg-[#24272C] text-[16px] font-500 w-[146px] ml-[24px] h-[49px] text-white whitespace-nowrap py-[13px] rounded-[4px]">New Car</button>
            <button className="bg-white border border-gray-300  text-[16px] font-500 w-[146px] ml-[24px] h-[49px] text-gray-900 whitespace-nowrap py-[13px] rounded-[4px]">Used Car</button>
        </div>

        {/* Radio buttons */}

        <div className="flex space-x-[25.03px] ml-[24px] mt-[28.3px]">
            <div className="flex space-x-[8px] items-center">
                <input className="h-[18px] w-[18px] outline-none" active type='radio'/>
                <p className="text-[#F75D34] text-[16px] font-[500]">By Budget</p>
            </div>

            <div className="flex space-x-[8px] items-center">
                <input className="h-[18px] w-[18px] outline-none" active type='radio'/>
                <p className="text-[#24272CB2] text-[16px] font-[500]">By Budget</p>
            </div>
            
        </div>

        {/* Budget Options */}
     
        <div className="mx-[24px] block mt-[25px]">
            <Select
            className="w-full"
            options={budgetOptions}
            value={selectedOption}
            onChange={setSelectedOption}
            placeholder="Select Budget"
            />


            <Select
            className="w-full mt-[10px]"
            options={carTypeOptions}
            value={selectedType}
            onChange={setSelectedType}
            placeholder="All vehicle Types"
            />
        
        <button className="mt-[24px] w-full bg-[#F75D34] h-[48px] text-white text-[20px] font-[300]">Search</button>

        </div>


       

    </div>
  )
}

export default InfoCard