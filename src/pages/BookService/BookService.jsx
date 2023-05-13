import React, { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import swal from "sweetalert";

const BookService = () => {
  const { user } = useContext(AuthContext);
  const services = useLoaderData();
  const { _id, title, price, img } = services;

  const handleBookService = (e) => {
    // prevent refreshing
    e.preventDefault();

    // getting form data
    const name = e.target.name.value;
    const date = e.target.date.value;
    const email = e.target.email.value;

    const booking = {
      customerName: name,
      img,
      date,
      email,
      service: title,
      service_id: _id,
      price: price
    };

    console.log(booking);

    // send to server
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.insertedId){
          swal("Good job!", "You clicked the button!", "success");
        }
      })
      .catch((err) => console.log(err));

    // form value reset
    e.target.reset();
  };
  return (
    <div className="container py-5">
      <h3>Book Service: {title}</h3>

      <div className="w-75 mx-auto bg-light p-5 mt-5">
        <Form onSubmit={handleBookService}>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    defaultValue={user?.displayName}
                    required
                  />
                </Form.Group>
              </div>
              <div className="col-md-6">
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Date</Form.Label>
                  <Form.Control type="date" name="date" required />
                </Form.Group>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    defaultValue={user?.email}
                    readOnly
                  />
                </Form.Group>
              </div>
              <div className="col-md-6">
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Due Amount</Form.Label>
                  <Form.Control
                    type="text"
                    name="dueamount"
                    defaultValue={`$ ${price}`}
                    readOnly
                  />
                </Form.Group>
              </div>
            </div>
          </div>

          <div className="container">
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={6}
                name="message"
                placeholder="Message"
              />
            </Form.Group>
          </div>

          <div className="container">
            <Button className="w-100 py-2" variant="primary" type="submit">
              Order Confirm
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default BookService;
