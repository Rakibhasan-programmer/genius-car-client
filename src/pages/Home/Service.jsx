import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import ServiceCard from "./ServiceCard";

const Service = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Container className="py-5">
        <div className="text-center">
          <p>Service</p>
          <h2>Our Service Area</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
            enim quos totam dolores, voluptatibus eius obcaecati debitis iusto
            ut corrupti?
          </p>
        </div>
        <Row className="pt-5 g-4">
          {services.map((service) => (
            <ServiceCard key={service._id} service={service} />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Service;
