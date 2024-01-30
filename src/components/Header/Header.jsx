import Button from "../Button/Button";

import { useState } from "react";

import "./Header.css";

function Header({ cars }) {
  const [title, setTitle] = useState("Rent-a-Car");
  const [isLogoVisible, setIsLogoVisible] = useState(true);
  const selectedCarsNo = cars.filter((car) => car.selected).length;

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

      <Button
        variant="outlined"
        color="default"
        buttonText="Change title"
        onClick={handleChangeTitle}
      />
      <Button
        color="danger"
        buttonText="Toggle Logo"
        onClick={handleToggleLogo}
      />
      <div
        style={{
          marginLeft: "auto",
        }}
      >
        {selectedCarsNo}
      </div>
    </header>
  );
}

export default Header;
