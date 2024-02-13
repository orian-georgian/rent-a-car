import Button from "react-bootstrap/Button";

import RentalCart from "../RentalCart/RentalCart";

import { useContext } from "react";
import { SharedContext } from "../../context/SharedContext";

import "./Header.css";

function Header() {
  const { changeAddCarVisibility } = useContext(SharedContext);

  const handleOpenAddCar = () => {
    changeAddCarVisibility(true);
  };

  return (
    <header className="cars-header">
      <img
        src="https://static.vecteezy.com/system/resources/previews/001/193/930/non_2x/vintage-car-png.png"
        alt="Rent a car logo"
      />

      <h1>Rent a Car</h1>

      <Button
        className="ms-auto"
        variant="secondary"
        onClick={handleOpenAddCar}
      >
        Add new car
      </Button>
      <RentalCart />
    </header>
  );
}

export default Header;
