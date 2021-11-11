import React from "react";
import { Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./style.css";
import { v4 as uuidv4 } from "uuid";

const Addbutton = ({ getdata }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [input, setInput] = useState({
    post: "",
    title: "",
    description: "",
    rating: "",
    id: uuidv4(),
    trailer: "",
  });

  const changesubmit = (e) => {
    e.preventDefault();
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handelsubmit = (e) => {
    e.preventDefault();
    getdata(input);
    handleClose();
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add new film
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          {" "}
          <div className="add"> Add post</div>
          <input
            type="text"
            name="post"
            onChange={changesubmit}
            placeholder="New post"
          />
          <div className="add">Add title</div>
          <input
            name="title"
            onChange={changesubmit}
            type="text"
            placeholder="New title"
          />
          <div className="add">Add description</div>
          <input
            onChange={changesubmit}
            type="text"
            name="description"
            placeholder="New description"
          />
          <div className="add">Add rating</div>
          <input
            onChange={changesubmit}
            type="text"
            name="rating"
            placeholder="New rating"
          />
          <br />
          <div className="add">Add trailer</div>
          <input
            onChange={changesubmit}
            type="text"
            name="trailer"
            placeholder="New trailer"
          />
          <br />
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handelsubmit}
            style={{
              marginBottom: "10px",
              marginRight: "10px",
              marginTop: "10px",
            }}
          >
            Add
          </button>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Addbutton;
