import React, { useEffect, useState } from 'react'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { db } from '../../firestore';
import { collection, query, where, orderBy, limit, getDocs } from "firebase/firestore";



function FiltersNew() {
const [filteredCars, setFilteredCars] = useState([]);

    const handlePriceChange = (value) => {
    setPriceRange(value);
    };

const [makeFilter, setMakeFilter] = useState('');
const [modelFilter, setModelFilter] = useState('');
const [yearFilter, setYearFilter] = useState('');
const [priceRange, setPriceRange] = useState([0, 100000]);

const handleMakeChange = (e) => {
  setMakeFilter(e.target.value);
};

const handleModelChange = (e) => {
  setModelFilter(e.target.value);
};

const handleYearChange = (e) => {
  setYearFilter(e.target.value);
};


const getCarsByFilters = async (makeFilter, modelFilter, yearFilter, priceRange) => {
  const carsCollection = collection(db, "cars");

  // Construct the base query
  let q = query(carsCollection);

  
  // Apply filters
  if (makeFilter) {
    q = query(q, where("make", "==", makeFilter));
  }
  if (modelFilter) {
    q = query(q, where("model", "==", modelFilter));
  }
  if (yearFilter) {
    q = query(q, where("year", "==", yearFilter));
    
  }
  if (priceRange) {
    // query = query.where('price', '>=', minPrice).where('price', '<=', maxPrice);
    q = query(q, where("price", ">=", priceRange[0]).where("price", "<=",priceRange[1]))
  }

  // Apply sorting and limiting
  q = query(q, orderBy("price"), limit(10));

  // Execute the query and retrieve the matching documents
  const querySnapshot = await getDocs(q);
  const cars = [];
  querySnapshot.forEach((doc) => {
    // Process each document as needed
    const car = doc.data();
    cars.push(car);
  });

  console.log("Query based on filters made... found this/these car(s)", cars )
  return cars;
};



useEffect(() => {
  // Apply filters to the cars data whenever the filter criteria change
  // Update the filtered cars state variable accordingly
  getCarsByFilters(makeFilter, modelFilter, yearFilter, priceRange);

}, [priceRange, makeFilter, modelFilter, yearFilter]);



  return (
    <div className="flex space-x-[8px] items-center">
         <h4>Make:</h4>
  <input type="text" value={makeFilter} onChange={handleMakeChange} />

  <h4>Model:</h4>
  <input type="text" value={modelFilter} onChange={handleModelChange} />
  <Slider
        className="max-w-[300px]"
            range
            min={0}
            max={100000}
            value={priceRange}
            onChange={handlePriceChange}
        />
  <h4>Year:</h4>
  <input type="text" value={yearFilter} onChange={handleYearChange} />
        <h4>Price Range:</h4>
        
</div>
  )
}

export default FiltersNew