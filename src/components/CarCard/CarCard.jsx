import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";

import { FaCartPlus } from "react-icons/fa6";

import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CarsContext } from "../../context/CarsContext";

function CarCard({ id, imageUrl, title, price, selected, cardColor }) {
  const [isConfirmationVisible, setIsConfirmationVisible] = useState(false);
  const navigate = useNavigate();
  const { deleteCar, selectCar } = useContext(CarsContext);

  const handleOpenConfirmationModal = (event) => {
    event.stopPropagation();
    setIsConfirmationVisible(true);
  };

  const handleCardClick = () => {
    navigate(`/cars/${id}`);
  };

  const handleCancel = () => {
    setIsConfirmationVisible(false);
  };

  const handleConfirm = () => {
    deleteCar(id);
    handleCancel();
  };

  const handleSelectItem = (event) => {
    event.stopPropagation();
    selectCar(id);
  };

  return (
    <Card
      className="cars-card p-3"
      style={{
        backgroundColor: cardColor,
      }}
      onClick={handleCardClick}
    >
      <Card.Img width="100%" variant="top" src={imageUrl} alt={title} />
      <Card.Body>
        <Card.Title className="mt-auto">
          <h2 className="h2">{title}</h2>
        </Card.Title>
        <Card.Text>${price} / d</Card.Text>
        {!selected && (
          <Button
            className="mb-3"
            variant="outline-primary"
            onClick={handleSelectItem}
          >
            <FaCartPlus /> Add to cart
          </Button>
        )}
        <Button variant="danger" onClick={handleOpenConfirmationModal}>
          Delete
        </Button>
      </Card.Body>
      <ConfirmationModal
        isVisible={isConfirmationVisible}
        title="Remove Car Confirmation"
        description="Are you sure you want to remove this card? Once removed it can't be reverted!"
        confirmText="Yes"
        cancelText="No"
        onCancel={handleCancel}
        onConfirm={handleConfirm}
      />
    </Card>
  );
}

export default CarCard;
