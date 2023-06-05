"use client";

import DashboardChart from "@/components/DashboardChart";
import MetricCard from "@/components/MetricCard";
import Navbar from "@/components/Navbar";

import React, { useState, useEffect, useContext } from "react";
import { db, storage } from "../../firestore";
import { addDoc, collection, getDocs, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";
import { FetchedCarsContext } from "@/components/context/CarCardContext";
import { useSession } from "next-auth/react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { VscGear } from "react-icons/vsc";

function cars() {
  const [cars, setCars] = useContext(FetchedCarsContext);
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [images, setImages] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [open, setOpen] = useState(false);
  const [id, setId] = useState("");
  const { data: session } = useSession()


  
  useEffect(() => {
    const getCars = async () => {
      const carsSnapshot = await getDocs(collection(db, "cars"));
      const carsList = carsSnapshot.docs.map((doc) => doc.data());
      setCars(carsList);
      console.log("cars", cars);
    };

    getCars();
  }, [cars]);

  const toggleModal = () => {
    setOpen(true);
  };

  useEffect(() => {
    console.log("Images", images);
  }, [images]);
  

  const handleImageUpload = async (e) => {
    const files = e.target.files;
    const storageRef = ref(storage);

    try {
      const uploadPromises = Array.from(files).map((file) => {
        const fileRef = ref(storageRef, file.name);
        return uploadBytes(fileRef, file);
      });

      const uploadSnapshots = await Promise.all(uploadPromises);

      const downloadUrlsPromises = uploadSnapshots.map((snapshot) => {
        return getDownloadURL(snapshot.ref);
      });

      const downloadUrls = await Promise.all(downloadUrlsPromises);

      setImages((prevImages) => [...prevImages, ...downloadUrls]);
    } catch (error) {
      console.error("Error uploading images:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setUploading(true);
      const carRef = await addDoc(collection(db, "cars"), {
        type,
        make,
        model,
        year,
        images,
        transmission,
        mileage,
        price,
        username:session.user.username,
        id: uuidv4(),
        timestamp:serverTimestamp()

      });
      console.log("Car added with images:", carRef.images);
      setMake("");
      setModel("");
      setYear("");
      setImages([]);
      setUploading(false);
    } catch (error) {
      console.error("Error adding car:", error);
      setUploading(false);
    }
  };

  useEffect(() => {
    console.log("The images", images);
  }, []);

  return (
    <div>
        <Navbar link="dashboard"/>
      <div className="mt-[100px]">



        {/* {cars.map((car) => (
          <p key={car.id} className="text-black text-[32px]">
            {" "}
            njk
            {car.make} {car.model}
          </p>
        ))} */}

    <p className="text-[32px] font-serif font-[500] text-center">My Ads</p>
    <div className="flex justify-between">

        
      { 
        cars.filter((car) => car.username === session?.user.username).map((filteredCar) => (
                <div key={filteredCar.id} className="grid grid-cols-2 ml-[32px]">
                    <div className="block">
                        <div className="relative">
                        
                            <img  className="h-[218.08px] w-[332.66px] object-cover cursor-pointer" src={filteredCar.images[0]}/>
            
            
                        <div className="bg-[#262626] absolute bottom-[4px] left-[8px] h-[25px] w-[179.86px] flex justify-between items-center rounded-[6px]">
                            {/* Left side */}
                            <div className="flex space-x-[4px] items-center ml-[8px]">
                                <AiOutlineClockCircle className="h-[11px] w-[11px] text-gray-400" />
                                <p className="text-[13px] text-white font-[500]">{filteredCar.type}</p>
            
                            </div>
            
            
                            {/* Right side */}
            
                            <div className="mr-[7.85px]">
                                <p className="text-[14px] text-white font-[500]">BIF {filteredCar.price}</p>
                            </div>
            
                        </div>
            
                        
                    </div>
            
            
                    <div className="block">
                        {/* Bottom details */}
                        
                        <p className="text-[16px] font-[700] text-[#262626] mt-[15px]">{filteredCar.make} {filteredCar.model}</p>
            
                        <div className="flex space-x-[6.89px]">
                            <div className="bg-[#5CA1FF] rounded-[4px] h-[19px] w-[73.39px] text-center pt-[2px] text-white text-[10px]">New</div>
                            <p className="text-[#262626] text-[14px] font-[400]">{filteredCar.mileage} Kms</p>
            
                        </div>
            
                        <div className="flex items-center mt-[10px] space-x-[12px]">
            
                            <div className="mt-[4px] flex items-center space-x-[8px]">
                                <VscGear className="text-gray-500 text-[20px]"/>
                                <p className="text-[#262626] text-[14px] font-[600]"></p>
                            </div>
            
                            <div className="flex items-center space-x-[8px]">
                                <BsFillFuelPumpFill className="text-red-600 text-[20px]"/>
                                <p className="text-[#262626] text-[14px] font-[600]">Fuel type</p>
            
            
                            </div>

                        
            
                        </div>
            
            
                            <div className="flex justify-between">
                                <button  className=" h-[40px] w-[150px]  text-gray-50 bg-green-500  text-[12px] mt-[16px] cursor-pointer hover:bg-[#F75D34] hover:text-gray-100 transform transition-all duration-300 ease-out">Edit</button>
                                <button  className=" h-[40px] w-[150px]  text-gray-50 bg-red-500  text-[12px] mt-[16px] cursor-pointer hover:bg-[#F75D34] hover:text-gray-100 transform transition-all duration-300 ease-out">Delete</button>

                            </div>
            
            
                    </div>
                </div>     
                </div>   
                
            ))
      }

      {/* Right side */}
      <div className="flex justify-end">
      </div>
                  </div>


    </div>

      <button onClick={toggleModal}>Add Car</button>

      {open && (
        <div className="">
          <h2>Add Car</h2>
          <form className="block" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Make"
              value={make}
              onChange={(e) => setMake(e.target.value)}
            />
            <input
              type="text"
              placeholder="Model"
              value={model}
              onChange={(e) => setModel(e.target.value)}
            />
            <input
              type="text"
              placeholder="Year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
            <input type="file" multiple onChange={handleImageUpload} />
            {uploading && <p>Uploading images...</p>}
            <button type="submit">Add</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default cars;
