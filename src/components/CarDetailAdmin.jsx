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

const CarDetailAdmin = () => {
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
      
    </div>
  );
}

export default CarDetailAdmin