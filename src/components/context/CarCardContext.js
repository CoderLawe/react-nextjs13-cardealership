"use client";
import { createContext, useState } from "react";

export const CardIdContext = createContext();
export const CarDataContext = createContext();
export const FetchedCarsContext = createContext();
export const CarCardProvider = ({ children }) => {
  const [carId, setCarId] = useState(0);
  const [carData, setCarData] = useState({});
  const [cars, setCars] = useState([]);

  return (
    <CardIdContext.Provider value={[carId, setCarId]}>
      <CarDataContext.Provider value={[carData, setCarData]}>
        <FetchedCarsContext.Provider value={[cars, setCars]}>
          {children}
        </FetchedCarsContext.Provider>
      </CarDataContext.Provider>
    </CardIdContext.Provider>
  );
};
