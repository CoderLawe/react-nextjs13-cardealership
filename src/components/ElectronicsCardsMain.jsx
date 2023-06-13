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
      <ElectronicsCardMain discount="14" title="Ipad Pro Case" price="22,000" was="50,000" image="https://m.media-amazon.com/images/I/3145szSi9kL._AC_SY200_.jpg"/>
      <ElectronicsCardMain discount="20" title="Ipad Pro Case" price="22,000" was="50,000" image="https://m.media-amazon.com/images/I/41WkAu6UJLL._AC_SY200_.jpg" />
      <ElectronicsCardMain discount="24" title="Ipad Pro Case" price="22,000" was="50,000"  image="https://m.media-amazon.com/images/I/31eQG-gVTXL._AC_SY200_.jpg"/>

     

    </div>
     
    </div>
  </div>


);
}

export default ElectronicsCardsMain