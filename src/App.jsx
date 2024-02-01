import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer/Footer";
import MainContent from "./components/MainContent";

import { useState, useEffect } from "react";
import { fetchData } from "./api/cars-api";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [cars, setCars] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("Cars are loading...");

  const handleDeleteItem = (id) => {
    setCars((prevState) => prevState.filter((car) => car.id !== id));
  };

  const getData = async () => {
    setIsLoading(true);
    setLoadingMessage("Cars are loading...");
    const { isOk, data } = await fetchData();

    if (isOk) {
      setCars(data);
      setIsLoading(false);
    }
  };

  const handleSelectItem = (id) => {
    setCars((prevState) =>
      prevState.map((car) => (car.id === id ? { ...car, selected: true } : car))
    );
  };

  const handleAddNewCar = (car) => {
    setCars((prevState) => {
      return [...prevState, car];
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <Header cars={cars} />
      <div className="app-row">
        <Sidebar />
        <MainContent
          cars={cars}
          isLoading={isLoading}
          loadingMessage={loadingMessage}
          onDeleteItem={handleDeleteItem}
          onSelectItem={handleSelectItem}
          onAddNewCar={handleAddNewCar}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
