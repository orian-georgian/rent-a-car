import Button from "../Button/Button";

import "./Card.css";

function Card({
  imageUrl,
  title,
  price,
  children,
  selected,
  onDeleteItem,
  onSelectItem,
}) {
  const paragraphStyles = {
    textDecoration: "underline",
    color: price > 200 ? "red" : "green",
  };

  const isFerarri = title === "Ferarri";

  const handleOnDelete = (e) => {
    e.stopPropagation();
    onDeleteItem();
  };

  const handleCarSelect = () => {
    onSelectItem();
  };

  /*   if (isFerarri) {
    return (
      <div className="cars-card">
        <img src={imageUrl} alt={title} />
      </div>
    );
  } */

  return (
    <div
      className={`cars-card ${selected ? "border-green" : ""}`}
      onClick={handleCarSelect}
    >
      <img src={imageUrl} alt={title} />
      <h2>{title}</h2>
      <p style={paragraphStyles}>{`$${price} / d`}</p>
      {!!children ? children : null}
      <Button
        variant="contained"
        color="danger"
        buttonText="Delete Card"
        onClick={handleOnDelete}
      />
    </div>
  );
}

export default Card;
