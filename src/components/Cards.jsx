import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import "./Cards.css";

function Cards(props) {
  return (
    <div>
      <Card>
        <Card.Img variant="top" src={props.image} />
        <Card.Body className="cards-body">
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <div className="button-section">
            <Link to="/" className="mx-auto">
              <Button variant="primary" className=" button">
                Check it out.
              </Button>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Cards;
