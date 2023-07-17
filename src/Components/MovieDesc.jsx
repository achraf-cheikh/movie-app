import React from "react";
import { Button, Card } from "react-bootstrap";
import RatingStars from "./RatingStars";

const MovieDesc = ({ el, del }) => {
  return (
    <div className="movie">
      <Card
        style={{
          width: "320px",
          height: "670px",
        }}
      >
        <Card.Img variant="top" src={el.img} style={{ height: "400px" }} />
        <Card.Body
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          <Card.Title>{el.title}</Card.Title>
          <Card.Text>{el.text}</Card.Text>
          <Card.Text>
            <RatingStars rate={el.rating} />
          </Card.Text>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "flex-end",
            }}
          >
            <Button variant="danger" onClick={() => del(el.id)}>
              Delete
            </Button>
            <Button variant="primary">Watch</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieDesc;
