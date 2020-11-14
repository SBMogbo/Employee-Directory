import React from "react";
// import CardBtn from "../CardBtn";
import "./style.css";

function Card(props) {
  return (
    <div className="card">
    <img
      className="card-img-top"
      src={props.image}
      alt={`Employees: ${props.firstName} ${props.lastName}`}
    ></img>
    <div className="card-body information">
      <h5 className="card-title">{`${props.firstName} ${props.lastName}`}</h5>
      <p className="Card-text">Email: {props.email}</p>
      <p className="Card-text">Phone: {props.phoneNum}</p>
      <p className="Card-text">Age: {props.age}</p>
    </div>
  </div>
  );
}

export default Card;
