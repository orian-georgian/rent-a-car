import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer/Footer";
import MainContent from "./components/MainContent";
import Team from "./components/Team/Team";
import Contact from "./components/Contact/Contact";
import CardDetails from "./components/CardDetails/CardDetails";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { CarsProvider } from "./context/CarsContext";
import { FormProvider } from "./context/FormContext";
import { SharedProvider } from "./context/SharedContext";

//import { useState, useEffect } from "react";
//import { fetchData } from "./api/cars-api";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  /* const [cars, setCars] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("Cars are loading..."); */

  /* const handleDeleteItem = (id) => {
    setCars((prevState) => prevState.filter((car) => car.id !== id));
  };
 */
  /* const getData = async () => {
    setIsLoading(true);
    setLoadingMessage("Cars are loading...");
    const { isOk, data } = await fetchData();

    if (isOk) {
      setCars(data);
      setIsLoading(false);
    }
  }; */

  /*  const handleSelectItem = (id) => {
    setCars((prevState) =>
      prevState.map((car) => (car.id === id ? { ...car, selected: true } : car))
    );
  }; */

  /*  const handleAddNewCar = (car) => {
    setCars((prevState) => {
      return [...prevState, car];
    });
  }; */

  /* const handleCartItemDelete = (id) => {
    setCars((prevState) =>
      prevState.map((car) =>
        car.id === id ? { ...car, selected: false } : car
      )
    );
  }; */

  /*   useEffect(() => {
    getData();
  }, []); */

  return (
    <SharedProvider>
      <FormProvider>
        <CarsProvider>
          <BrowserRouter>
            <div className="App">
              <Header />
              <div className="app-row">
                <Sidebar />

                <Routes>
                  <Route path="/" element={<MainContent />} />
                  <Route path="/team" element={<Team />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/cars/:cardId" element={<CardDetails />} />
                </Routes>
              </div>
              <Footer />
            </div>
          </BrowserRouter>
        </CarsProvider>
      </FormProvider>
    </SharedProvider>
  );
}

export default App;
