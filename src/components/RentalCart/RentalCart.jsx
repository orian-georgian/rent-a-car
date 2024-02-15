import { Image, Dropdown, CardTitle, Button, Stack } from "react-bootstrap";

import { FaCartPlus, FaTrashCan } from "react-icons/fa6";

import { useContext } from "react";

import { CarsContext } from "../../context/CarsContext";

import "./RentalCart.css";

export default function RentalCart() {
  const { cars, deleteCartItem } = useContext(CarsContext);
  const selectedCars = cars.filter((car) => car.selected);

  const handleDelete = (id) => {
    deleteCartItem(id);
  };

  return (
    <Dropdown className="rental-cart">
      <Dropdown.Toggle
        id="dropdown-button-dark-example1"
        variant="light"
        disabled={selectedCars.length === 0}
      >
        <Stack direction="horizontal" gap={3}>
          <FaCartPlus />
          <div>({selectedCars.length})</div>
        </Stack>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {selectedCars.map(({ id, imageUrl, title }) => (
          <Dropdown.Item key={id}>
            <Stack style={{ width: "300px" }} direction="horizontal" gap={3}>
              <Image src={imageUrl} width="80px" />
              <CardTitle>{title}</CardTitle>
              <Button
                className="ms-auto"
                variant="link"
                onClick={() => handleDelete(id)}
              >
                <FaTrashCan color="#dc3545" />
              </Button>
            </Stack>
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}
