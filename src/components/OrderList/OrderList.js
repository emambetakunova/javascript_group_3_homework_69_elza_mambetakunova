import React from "react";
import "./OrderList.css";

const Order = props => {
    return (
        <div className="Order">
        <p>{props.initialText}</p>
    {props.usedPositions.map((ing, key) => {
        return (
            <div className="OrderDiv" key={key}>
            <p>{ing.name}</p>
        <span>{ing.count} x</span>
        <span>{ing.price} kgs</span>
        <button onClick={() => props.remove(key)}>X</button>
        </div>
    )
    })}
<p className="totalPrice"><b>Total price: </b>{props.total} KGS</p>
    </div>
)
};

export default Order;