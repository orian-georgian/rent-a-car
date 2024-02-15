import Button from "react-bootstrap/Button";

import RentalCart from "../RentalCart/RentalCart";

import { useContext } from "react";
import { SharedContext } from "../../context/SharedContext";
import IdleStatus from "../IdleStatus/IdleStatus";

import "./Header.css";

function Header() {
  const { changeAddCarVisibility } = useContext(SharedContext);

  const handleOpenAddCar = () => {
    changeAddCarVisibility(true);
  };

  return (
    <header className="cars-header">
      <img
        src="https://purepng.com/public/uploads/large/purepng.com-yellow-ferrari-front-view-carcarferrarivehicletransport-9615246642488rjeh.png"
        alt="Rent a car logo"
      />

      <h1>Rent-a-Car</h1>

      <IdleStatus />
      <Button className="ms-auto" variant="warning" onClick={handleOpenAddCar}>
        Add new car
      </Button>
      <RentalCart />
    </header>
  );
}

export default Header;
