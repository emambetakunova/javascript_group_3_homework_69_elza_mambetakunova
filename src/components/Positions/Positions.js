import React from "react";
import "./Positions.css";

const Positions = props => {

    return (
        <div className="Position">
            <div>
                <img src={props.image} alt=""/>
                <p>{props.name}</p>
                <p><b>Price: </b>{props.price} kgs</p>
                <button onClick={props.onClick}>Add to cart</button>
            </div>
        </div>
    )
};

export default Positions;