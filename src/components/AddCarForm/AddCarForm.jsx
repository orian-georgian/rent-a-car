import Offcanvas from "react-bootstrap/Offcanvas";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { useContext } from "react";
import { FormContext } from "../../context/FormContext";

import getRandomId from "../../utils/random-id";

import "./AddCarForm.css";

export default function AddCarForm({ isVisible, onCancel, onSave }) {
  const { formValues, changeValue, reset, changeValidity } =
    useContext(FormContext);

  const handleValueChange = ({ target: { name, value } }) => {
    changeValue({ name, value });
  };

  const handleReset = (event) => {
    event.preventDefault();

    reset();
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const isValid = form.checkValidity();

    if (isValid) {
      const id = getRandomId(20);

      onSave({
        id,
        ...formValues,
      });

      reset();

      onCancel();
    }

    changeValidity(true);
  };

  return (
    <Offcanvas className="cars-offcanvas" show={isVisible} placement="end">
      <Offcanvas.Header closeButton onHide={onCancel}>
        <Offcanvas.Title>Add new car</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Form
          className="d-flex flex-column h-100"
          noValidate
          validated={formValues.validated}
          onSubmit={handleSubmit}
        >
          <Form.Group className="mb-3">
            <Form.Label>Image Url</Form.Label>
            <Form.Control
              type="url"
              size="lg"
              name="imageUrl"
              placeholder="Add a valid image url"
              required
              value={formValues.imageUrl}
              onChange={handleValueChange}
            />
            <Form.Control.Feedback type="invalid">
              The url is not valid
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              size="lg"
              name="title"
              placeholder="Add a car title"
              value={formValues.title}
              onChange={handleValueChange}
              required
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              The title is required
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              size="lg"
              name="price"
              placeholder="Add a price"
              value={formValues.price}
              onChange={handleValueChange}
              min={10}
              max={900}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              The price should be a value between 10 and 900
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              size="lg"
              name="description"
              placeholder="Add a description"
              value={formValues.description}
              onChange={handleValueChange}
              rows={5}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Card Color</Form.Label>
            <Form.Control
              type="color"
              size="lg"
              name="cardColor"
              value={formValues.cardColor}
              onChange={handleValueChange}
            />
          </Form.Group>

          <Form.Group className="mb-3 mt-auto d-flex">
            <Button type="submit" size="lg" variant="primary">
              Add Car
            </Button>

            <Button
              className="ms-auto"
              type="button"
              size="lg"
              variant="secondary"
              onClick={handleReset}
            >
              Reset
            </Button>
          </Form.Group>
        </Form>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
