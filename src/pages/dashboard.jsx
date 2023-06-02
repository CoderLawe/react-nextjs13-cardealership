
import DashboardChart from "@/components/DashboardChart";
import MetricCard from "@/components/MetricCard";
import React, { useState, useEffect } from "react";
import { db, storage } from "../../firestore";
import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";
import Navbar from "@/components/Navbar";
function page() {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [images, setImages] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [open, setOpen] = useState(false);
  const [id, setId] = useState("");

  const toggleModal = () => {
    setOpen(true);
  };
  // const handleImageUpload = async (e) => {
  //   const file = e.target.files[0];
  //   const storageRef = ref(storage);
  //   const fileRef = ref(storageRef, file.name);

  //   try {
  //     await uploadBytes(fileRef, file);
  //     const downloadUrl = await getDownloadURL(fileRef);
  //     setImages((prevImages) => [...prevImages, downloadUrl]);
  //   } catch (error) {
  //     console.error("Error uploading image:", error);
  //   }
  // };

  return (
    <div className="block">
            <Navbar />

      <div className="flex justify-center">
        <div className="flex justify-between w-full mx-[40px] mt-[90px]">
          <MetricCard title="Ad clicks" metric="12" colour="red" />
          <MetricCard title="Pending orders" metric="14" colour="yellow" />
          <MetricCard title="Total orders" metric="14" colour="blue" />
        </div>
      </div>

      <div className="flex justify-between bg-white mt-[40px] mx-[40px]">
        {/* Bottom Left */}
        <DashboardChart />

        {/* Bottom Right */}

        <div className="flex space-x-[10px]">
          <Link href="/cars">
            <button className="h-[50px] px-[5px] py-[7px] rounded-[8px] bg-black text-white font-[400]">
              My Cars
            </button>
          </Link>
        </div>

        <div className="block w-[500px]">
          <div className="flex justify-center">
            <button onClick={toggleModal}>Add Car</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;