import React, {Component} from "react";
import "./CartList.css";
import connect from "react-redux/es/connect/connect";
import {removePosition} from "../../store/action/ffBuilderAction";

class Order extends Component {
    render() {
        return (
            <div className="Order">
                {Object.keys(this.props.cart).map((ing, key) => {
                    return (
                        this.props.cart[ing].amount < 1 ? null : <div className="OrderDiv" key={key}>
                            <p>{this.props.cart[ing].name}</p>
                            <span>{this.props.cart[ing].amount} x</span>
                            <span>{this.props.cart[ing].price} kgs</span>
                            <button onClick={() => this.props.remove(ing)}>X</button>
                        </div>
                    )
                })}
                <button></button>
                <p className="totalPrice"><b>Total price: </b>{this.props.totalPrice} KGS</p>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        cart: state.ff.cart,
        totalPrice: state.ff.totalPrice,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        remove: (name) => dispatch(removePosition(name))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Order);