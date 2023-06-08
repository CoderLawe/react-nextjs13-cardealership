import React, { useContext, useEffect, useState } from "react";
// import DetailGallery from "../../../components/DetailGallery";
import dynamic from "next/dynamic";
import { db } from "../../firestore";

// const MyComponent = dynamic(() => import("../../components/DetailGallery"));

import { collection, doc, getDoc } from "firebase/firestore";
import {
  CarDataContext,
  CardIdContext,
} from "@/components/context/CarCardContext";
import DetailGallery from "@/components/DetailGallery";
import Navbar from "@/components/Navbar";
import DetailPage from "../components/DetailPage";


function DetailPage() {
    const [carId, setCarId] = useContext(CardIdContext);
  const [car, setCar] = useState({});
  const [carData, setCarData] = useContext(CarDataContext);

  useEffect(() => {
    const getData = async (carId) => {
      const carSnapshot = await getDoc(doc(db, "cars", carId));
      if (carSnapshot.exists()) {
        setCar(carSnapshot.data());
      } else {
        console.log("Note doesn't exist");
      }
    };

    return () => {
      getData();
    };
  }, []);

  useEffect(() => {
    console.log("help me", carData);
  }, []);

  return (
    <div> <Navbar />
    <DetailGallery
      car={carData}
      make={carData.make}
      images={carData.images}
    /></div>
  )
}

export default DetailPage