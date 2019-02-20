import React from "react";
import "./Positions.css";

const Positions = props => {
    return (
        <div className="Position">
            <div onClick={props.onClick}>
                <img src={props.image} alt=""/>
                <p>{props.name}</p>
                <p><b>Price: </b>{props.price} kgs</p>
            </div>
        </div>
    )
};

export default Positions;