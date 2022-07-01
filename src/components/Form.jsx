import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import "./Form.css";
function Forms() {
  const cancelCourse = () => {
    document.getElementById("create-course-form").reset();
  };

  function callBack() {
    handleShow();
    cancelCourse();
  }
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div className="form-container">
        <Form id="create-course-form">
          <Form.Group
            className="mb-3 input-text"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label>Your Name</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group
            className="mb-3 input-text"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" />
          </Form.Group>
          <Form.Group
            className="mb-3 input-text"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label>Subject</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group
            className="mb-3 input-text"
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Label>Message</Form.Label>
            <div className="control-area">
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Type Your Message Here"
              />
            </div>
          </Form.Group>
          <Button variant="secondary" onClick={callBack}>
            Submit
          </Button>
        </Form>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton className="bg-dark">
            <Modal.Title className="text-danger">Alert</Modal.Title>
          </Modal.Header>
          <Modal.Body>Your message has been submitted!</Modal.Body>
        </Modal>
      </div>
    </div>
  );
}

export default Forms;
