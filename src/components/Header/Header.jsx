import Button from "react-bootstrap/Button";

import RentalCart from "../RentalCart/RentalCart";

import { useState } from "react";

import "./Header.css";

function Header() {
  const [title, setTitle] = useState("Rent-a-Car");
  const [isLogoVisible, setIsLogoVisible] = useState(true);

  const handleChangeTitle = () => {
    setTitle("Changed!");
  };

  const handleToggleLogo = () => {
    setIsLogoVisible((currentState) => !currentState);
  };

  return (
    <header className="cars-header">
      {isLogoVisible && (
        <img
          src="https://static.vecteezy.com/system/resources/previews/001/193/930/non_2x/vintage-car-png.png"
          alt="Rent a car logo"
        />
      )}
      <h1>{title}</h1>

      <Button variant="warning" onClick={handleChangeTitle}>
        Change title
      </Button>
      <Button variant="outline-info" onClick={handleToggleLogo}>
        Toggle Logo
      </Button>
      <RentalCart />
    </header>
  );
}

export default Header;
