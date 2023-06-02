"use client";

import DashboardChart from "@/components/DashboardChart";
import MetricCard from "@/components/MetricCard";
import Navbar from "@/components/Navbar";

import React, { useState, useEffect, useContext } from "react";
import { db, storage } from "../../firestore";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";
import { FetchedCarsContext } from "@/components/context/CarCardContext";
import { useSession } from "next-auth/react";
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
  }, []);

  const toggleModal = () => {
    setOpen(true);
  };

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
        make,
        model,
        year,
        images,
        username:session.user.username,
        id: uuidv4(),
        timestamp:serverTimestamp(),

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
        <Navbar />
      <div className="mt-[100px]">



        {/* {cars.map((car) => (
          <p key={car.id} className="text-black text-[32px]">
            {" "}
            njk
            {car.make} {car.model}
          </p>
        ))} */}
      </div>

      { 
        cars.filter((car) => car.username === session?.user.username).map((filteredCar) => (
            <p>{filteredCar.make} {filteredCar.model}</p>
        ))
      }
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
