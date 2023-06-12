import React from 'react'
import ElectronicsCardMain from "./ElectronicsCardMain"
function ElectronicsCardsMain() {
  return( <div className="flex justify-center">
  <div className="block lg:mx-[60px] mt-[70px]">
    {/* Title and filters */}
    <div className="block space-y-[8px]">
        <div className="flex justify-center">
            <p className="text-gray-900 text-[24px] font-[700]">Electronics</p>

        </div>

      {/* <FiltersNew /> */}
    </div>
    <div className="grid lg:grid-cols-3 gap-x-[28px] gap-y-[44.01px] mt-[40px]">
      <ElectronicsCardMain />
      <ElectronicsCardMain />
      <ElectronicsCardMain />

    </div>
     
    </div>
  </div>


);
}

export default ElectronicsCardsMain