import InfoCard from './InfoCard';


function Hero() {
  

  return (
    <div className="relative w-full mt-[50px] ">
        <img className="h-[80vh] w-full object-cover" src="https://cdn.discordapp.com/attachments/817048198022430761/1105585105440870451/pexels-pixabay-164634.jpg"/>

        <InfoCard />

        <div className="block absolute top-[100px] right-0 lg:right-[290px]">
            <p className=" text-yellow-500 font-[700] text-[50px]">NEW ARRIVALS!</p>
            {/* <div className="absolute right-[200px] bg-yellow-400 p-5 rounded-full text-gray-900">
                NEW!
            </div> */}
            <p className=" text-gray-100  text-[50px] font-[700]">IMPORT AND DOMESTIC!</p>


        </div>
    </div>
  )
}

export default Hero