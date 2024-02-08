import CarCard from "./CarCard/CarCard";
import AddCarForm from "./AddCarForm/AddCarForm";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Placeholder from "react-bootstrap/Placeholder";

import { useState, useContext, useEffect } from "react";

import { CarsContext } from "../context/CarsContext";

import { fetchData } from "../api/cars-api";

const CardPlaceholder = () => (
  <Card style={{ width: "18rem" }}>
    <Card.Img variant="top" src="/images/placeholder.png" />
    <Card.Body>
      <Placeholder as={Card.Title} animation="glow">
        <Placeholder xs={6} />
      </Placeholder>
      <Placeholder as={Card.Text} animation="glow">
        <Placeholder xs={7} size="lg" /> <Placeholder xs={4} size="lg" />
      </Placeholder>
      <Placeholder.Button className="mb-3" variant="outline-primary" xs={12} />
      <Placeholder.Button variant="danger" xs={12} />
    </Card.Body>
  </Card>
);

const cardPlaceholders = [
  CardPlaceholder,
  CardPlaceholder,
  CardPlaceholder,
  CardPlaceholder,
  CardPlaceholder,
  CardPlaceholder,
];

function MainContent() {
  const [isVisible, setIsVisible] = useState(false);
  const { cars, isLoading, setIsLoading, loadCars, addNewCar } =
    useContext(CarsContext);

  const handleOpenAddCar = () => {
    setIsVisible(true);
  };

  const handleCloseAddCar = () => {
    setIsVisible(false);
  };

  const getData = async () => {
    setIsLoading(true);
    const { isOk, data } = await fetchData();

    if (isOk) {
      loadCars(data);
      setIsLoading(false);
    }
  };

  const handleAddNewCar = (car) => {
    addNewCar(car);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <main className="cars-main-content">
      {isLoading && cardPlaceholders.map((Item, index) => <Item key={index} />)}
      {!isLoading && (
        <>
          {cars.map((car) => (
            <CarCard key={car.id} {...car} />
          ))}
          <Card className="cars-card p-3">
            <Card.Body className="d-flex justify-content-center align-items-center">
              <Button variant="primary" onClick={handleOpenAddCar}>
                Add new car
              </Button>
            </Card.Body>
          </Card>
          <AddCarForm
            isVisible={isVisible}
            onCancel={handleCloseAddCar}
            onSave={handleAddNewCar}
          />
        </>
      )}
    </main>
  );
}

export default MainContent;
