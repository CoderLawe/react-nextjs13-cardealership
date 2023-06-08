import { useState } from 'react';
import { AiOutlineCheckCircle, AiOutlineClockCircle } from 'react-icons/ai';
import { BsFillPinFill } from 'react-icons/bs';
import { TbManualGearbox } from "react-icons/tb";

function DetailGallery({ car }) {


    const [selectedImage, setSelectedImage] = useState(car.images[0]);

    const [counter, setCounter] = useState()
    const handleImageClick = (image) => {
      setSelectedImage(image);
    };
  


    return (
      <div className=" px-[24px] pt-[100px] block lg:flex bg-gray-100">

        {/* Left side */}
        <div className="w-[800px] block">
          <img className="object-cover h-[500px] w-[100%]" src={selectedImage} alt="Selected Image" />
  
          <div className=" flex-col bg-white">
            <div className="flex space-x-[15px] pt-[20px] overflow-x-scroll">
              {car.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Image ${index + 1}`}
                  onClick={() => handleImageClick(image)}
                  className="w-40 h-40 object-cover cursor-pointer"
                />
              ))}
            </div>


            <div className="block px-5 py-2">
              <h1 className="text-[32px] text-gray-700 font-semibold ">{car.title} {car.model}</h1>

              <div className="flex space-x-[16px] mt-[15px]">
                  <div className="flex items-center space-x-[5px]">
                      <AiOutlineClockCircle className="text-[20px] text-gray-500" />
                      <p className="text-[15px] text-gray-500 font-[600]">Posted 15/04/2023</p>
                  </div>

                  <div className="flex items-center space-x-[5px]">
                      <BsFillPinFill className="text-[20px] text-gray-500" />
                      <p className="text-[15px] text-gray-500 font-[600]">Posted 15/04/2023</p>
                  </div>
              </div>

              <hr className="my-[15px]"/>
              
              <div className="flex space-x-[12px]">
                  <div className="flex space-x-[5px] items-center">
                    <TbManualGearbox className="text-[25px] text-gray-500 border  rounded-full px-[2px] py-[2px]"/>
                    <p className="text-[15px] text-gray-500 font-[600]">{car.transmission}</p>

                  </div>

                  <div className="flex space-x-[5px] items-center">
                    <AiOutlineClockCircle className="text-[25px] text-gray-500 px-[2px] py-[2px]"/>
                    <p className="text-[15px] text-gray-500 font-[600]">{car.mileage} Kms</p>

                  </div>
              </div>
            </div>
          </div>
        


          {/* Description card */}

        
        </div>


        {/* Right side */}

        <div className="lg:ml-[40px] block space-y-[20px] ">
          {/* Top card */}
          <div className="rounded-[4px] lg:shadow-lg flex justify-center  h-[150px] w-[400px] pt-[20px] bg-white">
              <div className="block">
                <p className="text-gray-900 text-[32px] font-semibold whitespace-nowrap text-center">BiF {car.price}</p>

                <button className="h-[40px] w-[256px] text-[#F75D34] mx-[16px] bg-white border border-[#F75D34] text-[12px] mt-[16px] cursor-pointer hover:bg-[#F75D34] hover:text-gray-100 transform transition-all duration-300 ease-out">Make an offer</button>

              </div>
             
          </div>


              {/* Bottom card */}
          <div className="rounded-[4px] lg:w-[400px]  block lg:shadow-lg pt-[10px] pb-[15px] px-[8px] bg-white">
              <div className="flex justify-center space-x-[10px] items-center">
                  <img className="w-[50px] h-[50px] rounded-[100%] object-cover" src="https://cdn.discordapp.com/attachments/817048198022430761/1105767736648421426/IMG_20230429_064010_723.jpg" alt="Profile img"/>
                  <div className="block space-y-[8px] align-middle">
                    <p className="text-[24px] font-[500] text-gray-900">Seller Jacbobsen</p>
                    <div className="bg-gray-100 px-[2px] py-[8px]  flex items-center space-x-[4px]">
                      <AiOutlineCheckCircle className="text-green-500 text-[30px]" />
                      <p className="text-gray-900 font-[700] text-[12px] w-[100px] text-center">Verified Seller</p>
                    </div>

                  </div>
              </div>

              <div className="flex justify-center">
                <div className="block space-y-[20px]">
                  <button className="h-[40px] w-[256px] text-gray-100 mx-[16px] mt-[25px]  text-[12px]  cursor-pointer bg-black hover:bg-white hover:text-gray-900 hover:border hover:border-black transform transition-all duration-300 ease-out">Make an offer</button>

                </div>
                
              </div>


          </div>


          
        </div>
       
      </div>
    );
}

export default DetailGallery