import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Carousel from "react-bootstrap/Carousel";
import { Container, Row, Col, Image } from "react-bootstrap";

import Loader from "../Loader/Loader";

import { fetchCarById } from "../../api/cars-api";

export default function CardDetails() {
  const [car, setCar] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { cardId } = useParams();

  const fetchData = async () => {
    const { isOk, data } = await fetchCarById(cardId);

    if (isOk) {
      setCar(data);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <Loader message="The car details are loading" />;
  }

  if (!car) {
    return <div>Car not available!</div>;
  }

  return (
    <Container className="card-details m-5">
      {car.images.length > 0 && (
        <Row>
          <Col>
            <Carousel data-bs-theme="dark">
              {car.images.map((image) => (
                <Carousel.Item key={image}>
                  <Image src={image} fluid />
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      )}
      <Row className="mb-5">
        <h1 className="h1">{car.title}</h1>
      </Row>
      <Row className="mb-5">
        <Col>{car.description}</Col>
      </Row>
    </Container>
  );
}
