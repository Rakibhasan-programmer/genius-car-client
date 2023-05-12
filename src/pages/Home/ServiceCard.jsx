import React from "react";
import { Button, Card } from "react-bootstrap";

const ServiceCard = ({ service }) => {
  const { title, img, price } = service;
  return (
    <>
      <div className="col-md-6 col-lg-4">
        <Card>
          <Card.Img style={{height: "15rem"}} variant="top" src={img} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>Price: {price}</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default ServiceCard;
