import { createContext, useState } from "react";

export const CarsContext = createContext();

export const CarsProvider = ({ children }) => {
  const [cars, setCars] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("Cars are loading...");

  const loadCars = (data) => {
    setCars(data);
  };

  const selectCar = (id) => {
    setCars((prevState) =>
      prevState.map((car) => (car.id === id ? { ...car, selected: true } : car))
    );
  };

  const addNewCar = (car) => {
    setCars((prevState) => {
      return [...prevState, car];
    });
  };

  const deleteCartItem = (id) => {
    setCars((prevState) =>
      prevState.map((car) =>
        car.id === id ? { ...car, selected: false } : car
      )
    );
  };

  const deleteCar = (id) => {
    setCars((prevState) => prevState.filter((car) => car.id !== id));
  };

  return (
    <CarsContext.Provider
      value={{
        cars,
        isLoading,
        loadingMessage,
        loadCars,
        setIsLoading,
        setLoadingMessage,
        selectCar,
        addNewCar,
        deleteCartItem,
        deleteCar,
      }}
    >
      {children}
    </CarsContext.Provider>
  );
};
