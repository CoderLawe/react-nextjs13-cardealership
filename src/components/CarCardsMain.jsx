import React, { useContext, useEffect, useState } from 'react';
import CarCardMain from './CarCardMain';
import Filters from './Filters';
import FiltersNew from "./FiltersNew";
import { collection, getDocs, subcollection } from 'firebase/firestore';
import { db } from '../../firestore';
import { CardIdContext, FetchedCarsContext, FilteredCarsContext, MakeFilterContext, ModelFilterContext, PriceRangeFilterContext, SearchingContext, YearFilterContext } from './context/CarCardContext';

function CarCardsMain() {
  const [cars, setCars] = useContext(FetchedCarsContext);
  // const [cars, setCars] = useState([])

  const [filteredCars, setFilteredCars] = useContext(FilteredCarsContext);

const [makeFilter, setMakeFilter] = useContext(MakeFilterContext);
const [modelFilter, setModelFilter] = useContext(ModelFilterContext);
const [yearFilter, setYearFilter] = useContext(YearFilterContext);
const [priceRange, setPriceRange] = useContext(PriceRangeFilterContext);

const [searching, setSearching] = useContext(SearchingContext);
const [orders, setOrders] = useState([]);
const [carId, setCarId] = useContext(CardIdContext);


useEffect(() => {
  const fetchData = async () => {
    const carsSnapshot = await getDocs(collection(db, 'cars'));
    const carsData = carsSnapshot.docs.map((doc) => {
      const data = doc.data();
      const id = doc.id;
      setCarId(id);
      return { id, ...data };
    });

    setCars(carsData);
  };

  fetchData();
  console.log("orders", cars.orders)
}, []);


  useEffect(() => {
    console.log("make filter", makeFilter)
  },[makeFilter])
  
  
  
  return (
    <div className="flex justify-center">
      <div className="block lg:mx-[60px] mt-[20px]">
        {/* Title and filters */}
        <div className="block space-y-[8px]">
          <p className="text-gray-900 text-[24px] font-[700]">Arrivals</p>
          <Filters />

          {/* <FiltersNew /> */}
        </div>
        <div className="grid lg:grid-cols-3 gap-x-[28px] gap-y-[44.01px] mt-[30px]">
          
          {
          !searching ?
          cars?.map((car) => (
            <CarCardMain
              key={car?.id}
              title={car?.make}
              model={car?.model}
              transmission={car?.transmission}
              year={car?.year}
              mileage={car?.mileage}
              image={car?.image}
              fuel={car?.fuel}
              images={car?.images}
              type={car?.type}
              price={car?.price}
              id={car?.id}
            />
          )):(
            filteredCars?.map((car) => (
              <CarCardMain
              key={car.id} // Remember to provide a unique key for each item in the list
              title="Jerp"
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
            ))
          )
        }
        </div>
      </div>
    </div>

  );
}

export default CarCardsMain;


