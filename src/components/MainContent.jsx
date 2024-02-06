//import Card from "./Card/Card";
import Loader from "./Loader/Loader";
import AddCarForm from "./AddCarForm/AddCarForm";
import ConfirmationModal from "./ConfirmationModal/ConfirmationModal";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function MainContent({
  cars,
  isLoading,
  loadingMessage,
  onDeleteItem,
  onSelectItem,
  onAddNewCar,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [isConfirmationVisible, setIsConfirmationVisible] = useState(false);
  const [cardId, setCardId] = useState(null);
  const navigate = useNavigate();

  const handleSelectItem = (id) => {
    onSelectItem(id);
  };

  const handleOpenAddCar = () => {
    setIsVisible(true);
  };

  const handleCloseAddCar = () => {
    setIsVisible(false);
  };

  const handleCancel = () => {
    setIsConfirmationVisible(false);
  };

  const handleConfirm = (id) => {
    onDeleteItem(id);
    handleCancel();
  };

  const handleOpenConfirmationModal = (event, id) => {
    event.stopPropagation();
    setIsConfirmationVisible(true);
    setCardId(id);
  };

  const handleCardClick = (id) => {
    navigate(`/cars/${id}`);
  };

  return (
    <main className="cars-main-content">
      {isLoading && <Loader message={loadingMessage} />}
      {cars.map(({ title, price, imageUrl, id, selected }) => (
        <Card
          className="cars-card p-3"
          key={id}
          //onSelectItem={() => handleSelectItem(id)}
          onClick={() => handleCardClick(id)}
        >
          <Card.Img width="100%" variant="top" src={imageUrl} alt={title} />
          <Card.Body>
            <Card.Title>
              <h2 className="h2">{title}</h2>
            </Card.Title>
            <Card.Text>${price} / d</Card.Text>
            <Button
              variant="danger"
              onClick={(e) => handleOpenConfirmationModal(e, id)}
            >
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
      <ConfirmationModal
        cardId={cardId}
        isVisible={isConfirmationVisible}
        title="Remove Car Confirmation"
        description="Are you sure you want to remove this card? Once removed it can't be reverted!"
        confirmText="Yes"
        cancelText="No"
        onCancel={handleCancel}
        onConfirm={handleConfirm}
      />
    </main>
  );
}

export default MainContent;
