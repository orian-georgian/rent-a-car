import { Image, Dropdown, CardTitle, Button, Stack } from "react-bootstrap";

import { FaCartPlus, FaTrashCan } from "react-icons/fa6";

import { useContext } from "react";

import { CarsContext } from "../../context/CarsContext";

export default function RentalCart() {
  const { cars, deleteCartItem } = useContext(CarsContext);
  const selectedCars = cars.filter((car) => car.selected);

  const handleDelete = (id) => {
    deleteCartItem(id);
  };

  return (
    <Dropdown>
      <Dropdown.Toggle
        id="dropdown-button-dark-example1"
        variant="info"
        disabled={selectedCars.length === 0}
      >
        <FaCartPlus /> <span>({selectedCars.length})</span>
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
