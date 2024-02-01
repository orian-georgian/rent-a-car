import Offcanvas from "react-bootstrap/Offcanvas";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { useState } from "react";

import getRandomId from "../../utils/random-id";

import "./AddCarForm.css";

export default function AddCarForm({ isVisible, onCancel, onSave }) {
  const [validated, setValidated] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);

  const handleImageUrlChange = (event) => {
    setImageUrl(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const isValid = form.checkValidity();

    function convertToObject(obj) {
      obj = {};
      for (var p in form) {
        obj[p] = form[p];
      }
      return obj;
    }

    var result = Object.assign(convertToObject(form), { www: 1 });

    console.log(result);

    /* if (isValid) {
      const id = getRandomId(20);

      onSave({
        id,
        imageUrl,
        title,
        price,
      });

      onCancel();

      setImageUrl("");
      setTitle("");
      setPrice(0);
    } */

    setValidated(true);
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
          validated={validated}
          onSubmit={handleSubmit}
        >
          <Form.Group className="mb-3">
            <Form.Label>Image Url</Form.Label>
            <Form.Control
              type="url"
              size="lg"
              placeholder="Add a valid image url"
              required
              value={imageUrl}
              onChange={handleImageUrlChange}
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
              placeholder="Add a car title"
              value={title}
              onChange={handleTitleChange}
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
              placeholder="Add a price"
              value={price}
              onChange={handlePriceChange}
              min={10}
              max={900}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              The price should be a value between 10 and 900
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3 mt-auto">
            <Button type="submit" size="lg" variant="primary">
              Add Car
            </Button>
          </Form.Group>
        </Form>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
