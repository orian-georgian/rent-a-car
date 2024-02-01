//import Card from "./Card/Card";
import Loader from "./Loader/Loader";
import AddCarForm from "./AddCarForm/AddCarForm";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { useState } from "react";

function MainContent({
  cars,
  isLoading,
  loadingMessage,
  onDeleteItem,
  onSelectItem,
  onAddNewCar,
}) {
  const [isVisible, setIsVisible] = useState(false);

  const handleDeleteItem = (e, id) => {
    e.stopPropagation();
    onDeleteItem(id);
  };

  const handleSelectItem = (id) => {
    onSelectItem(id);
  };

  const handleOpenAddCar = () => {
    setIsVisible(true);
  };

  const handleCloseAddCar = () => {
    setIsVisible(false);
  };

  return (
    <main className="cars-main-content">
      {isLoading && <Loader message={loadingMessage} />}
      {cars.map(({ title, price, imageUrl, id, selected }) => (
        <Card
          className="cars-card p-3"
          key={id}
          onSelectItem={() => handleSelectItem(id)}
        >
          <Card.Img width="100%" variant="top" src={imageUrl} alt={title} />
          <Card.Body>
            <Card.Title>
              <h2 className="h2">{title}</h2>
            </Card.Title>
            <Card.Text>${price} / d</Card.Text>
            <Button variant="danger" onClick={(e) => handleDeleteItem(e, id)}>
              Delete
            </Button>
          </Card.Body>
        </Card>
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
        onSave={onAddNewCar}
      />
    </main>
  );
}

export default MainContent;
