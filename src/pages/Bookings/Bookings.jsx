import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Button, Table } from "react-bootstrap";
import swal from "sweetalert";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const url = `http://localhost:5000/bookings?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover the data!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        // deleting from database
        fetch(`http://localhost:5000/bookings/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              swal("Your order has been deleted!", {
                icon: "success",
              });

              // updating the state
              const remaining = bookings.filter(
                (booking) => booking._id !== id
              );
              setBookings(remaining);
            }
          });
      }
    });
  };

  const handleUpdateBooking = (id) => {
    fetch(`http://localhost:5000/bookings/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          // update state
          const remaining = bookings.filter((booking) => booking._id !== id);
          const updated = bookings.find((booking) => booking._id === id);
          updated.status = "confirm";
          const newBookings = [updated, ...remaining];
          setBookings(newBookings);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="container py-5">
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Image</th>
            <th>Service Name</th>
            <th>Customer Name</th>
            <th>Price</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((data) => (
            <tr key={data._id}>
              <td>
                <img src={data?.img} alt="" style={{ height: "3rem" }} />
              </td>
              <td>{data?.service}</td>
              <td>{data?.customerName}</td>
              <td>{data?.price}</td>
              <td>{data?.date}</td>
              <td>
                {data?.status === "confirm" ? (
                  <Button className="btn-sm" variant="success">
                    Confirmed
                  </Button>
                ) : (
                  <Button
                    className="btn-sm"
                    variant="warning"
                    onClick={() => handleUpdateBooking(data?._id)}
                  >
                    Pending
                  </Button>
                )}
                <Button
                  className="btn-sm ms-2"
                  variant="danger"
                  onClick={() => handleDelete(data?._id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Bookings;
