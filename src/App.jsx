import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer/Footer";
import MainContent from "./components/MainContent";

import { useState, useEffect } from "react";
import { fetchData, removeCarById } from "./api/cars-api";

import "./App.css";

function App() {
  const [cars, setCars] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("Cars are loading...");

  const handleDeleteItem = async (id) => {
    setIsLoading(true);
    setLoadingMessage("Removing car...");
    const { isOk, data } = await removeCarById(id);

    if (isOk) {
      setCars(data);
      setIsLoading(false);
    }
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
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
