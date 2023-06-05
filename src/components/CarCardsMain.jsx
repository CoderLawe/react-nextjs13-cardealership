import React, { useContext, useEffect, useState } from 'react';
import CarCardMain from './CarCardMain';
import Filters from './Filters';
import FiltersNew from "./FiltersNew";
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firestore';
import { FetchedCarsContext } from './context/CarCardContext';

function CarCardsMain() {
  const [cars, setCars] = useContext(FetchedCarsContext);
  // const [cars, setCars] = useState([])
  useEffect(() => {
    const getCars = async () => {
      const carsSnapshot = await getDocs(collection(db, 'cars'));
      const carsList = carsSnapshot.docs.map((doc) => doc.data());
      setCars(carsList);
      console.log("cars", cars)
    };
  
    getCars();
  }, []);
  
  return (
    <div className="block mx-[60px] mt-[20px]">
      {/* Title and filters */}
      <div className="block space-y-[8px]">
        <p className="text-gray-900 text-[24px] font-[700]">Arrivals</p>
        {/* <Filters /> */}

        <FiltersNew />
      </div>
      <div className="grid lg:grid-cols-3 gap-x-[28px] gap-y-[44.01px] mt-[30px]">
        
        {cars?.map((car) => (
          <CarCardMain
            key={car.id} // Remember to provide a unique key for each item in the list
            title={car.make}
            model={car.model}
            transmission={car.transmission}
            year={car.year}
            mileage={car.mileage}
            image={car.image}
            images={car.images}
            type={car.type}
            price={car.price}
            id={car.id}
          />
        ))}
      </div>
    </div>
  );
}

export default CarCardsMain;


