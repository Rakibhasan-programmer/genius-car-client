import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, title, img, price } = service;
  return (
    <>
      <div className="col-md-6 col-lg-4">
        <Card>
          <Card.Img style={{ height: "15rem" }} variant="top" src={img} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>Price: {price}</Card.Text>
            <Link to={`/book/${_id}`}>
              <Button variant="primary">Book Now</Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default ServiceCard;
