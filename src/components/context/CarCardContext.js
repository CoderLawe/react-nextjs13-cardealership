"use client";
import { createContext, useState } from "react";

export const CardIdContext = createContext();
export const CarDataContext = createContext();
export const FetchedCarsContext = createContext();
export const MakeFilterContext = createContext();
export const ModelFilterContext = createContext();
export const YearFilterContext = createContext();
export const PriceRangeFilterContext = createContext();
export const SearchingContext = createContext();
export const FilteredCarsContext = createContext();
export const TypingContext = createContext();
export const CarCardProvider = ({ children }) => {
  const [carId, setCarId] = useState(0);
  const [carData, setCarData] = useState({ images: ["src1", "src2"] });
  const [cars, setCars] = useState([]);

  // Filters

  const [makeFilter, setMakeFilter] = useState("");
  const [modelFilter, setModelFilter] = useState("");
  const [yearFilter, setYearFilter] = useState("");
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [searching, setSearching] = useState(false);
  const [filteredCars, setFilteredCars] = useState([]);
  const [typing, setTyping] = useState(false);

  return (
    <CardIdContext.Provider value={[carId, setCarId]}>
      <CarDataContext.Provider value={[carData, setCarData]}>
        <FetchedCarsContext.Provider value={[cars, setCars]}>
          <MakeFilterContext.Provider value={[makeFilter, setMakeFilter]}>
            <ModelFilterContext.Provider value={[modelFilter, setModelFilter]}>
              <YearFilterContext.Provider value={[yearFilter, setYearFilter]}>
                <PriceRangeFilterContext.Provider
                  value={[priceRange, setPriceRange]}
                >
                  <SearchingContext.Provider value={[searching, setSearching]}>
                    <FilteredCarsContext.Provider
                      value={[filteredCars, setFilteredCars]}
                    >
                      <TypingContext.Provider value={[typing, setTyping]}>
                        {children}
                      </TypingContext.Provider>
                    </FilteredCarsContext.Provider>
                  </SearchingContext.Provider>
                </PriceRangeFilterContext.Provider>
              </YearFilterContext.Provider>
            </ModelFilterContext.Provider>
          </MakeFilterContext.Provider>
        </FetchedCarsContext.Provider>
      </CarDataContext.Provider>
    </CardIdContext.Provider>
  );
};
