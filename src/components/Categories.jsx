import { useContext, useEffect } from "react"
import { AiFillCar, AiOutlineTablet, AiFillTool } from "react-icons/ai"
import { SelectedCategoryContext } from "./context/CarCardContext"
const Categories = () => {

    const [selectedCategory, setSelectedCategory] = useContext(SelectedCategoryContext)

    useEffect(() => {
        console.log("selectedCategody", selectedCategory)
        },[selectedCategory])
    return(
        <div className="flex justify-center mt-[44px]">
            <div className="flex justify-between space-x-[100px]">
                <div className="flex-col space-y-[8px]">
                    <AiFillCar onClick={() => setSelectedCategory("vehicles")} className="text-[75px] text-white  bg-black p-[5px] rounded-full  cursor-pointer"/>
                    <p className="text-center font-[400] text-gray-700 font-serif">Vehicles</p>
                </div>

                <div className="flex-col space-y-[8px]">
                    <AiOutlineTablet onClick={() => setSelectedCategory("electronics")} className="text-[75px] text-white  bg-black p-[5px] rounded-full cursor-pointer"/>
                    <p className="text-center font-[400] text-gray-700 font-serif">Electronics</p>
                </div>  

                 <div className="flex-col space-y-[8px]">
                    <AiFillTool onClick={() => setSelectedCategory("other")} className="text-[75px] text-white  bg-black p-[5px] rounded-full cursor-pointer"/>
                    <p className="text-center font-[400] text-gray-700 font-serif">Other</p>
                </div>                

                

            </div>
        </div>
    )
}

export default Categories