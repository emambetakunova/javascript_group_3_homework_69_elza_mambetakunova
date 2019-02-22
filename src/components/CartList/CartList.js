import React, {Component} from "react";
import "./CartList.css";
import connect from "react-redux/es/connect/connect";
import {removePosition, placeOrder} from "../../store/action/ffBuilderAction";

class CartList extends Component {

    render() {
        return (
            <div className="Cart">
                {Object.keys(this.props.cart).map((ing, key) => {
                    return (
                        this.props.cart[ing].amount < 1 ? null : <div className="CartDiv" key={key}>
                            <p>{this.props.cart[ing].name}</p>
                            <span>{this.props.cart[ing].amount} x</span>
                            <span>{this.props.cart[ing].price} kgs</span>
                            <button onClick={() => this.props.remove(ing)}>X</button>
                        </div>
                    )
                })}
                <p className="totalPrice"><b>Total price: </b>{this.props.totalPrice} KGS</p>
                {this.props.totalPrice === 150 ? null : <button
                    className="CartButton"
                    onClick={this.props.placeOrder}
                >
                    Place order
                </button>}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        cart: state.ff.cart,
        totalPrice: state.ff.totalPrice,
        purchasing: state.ff.purchasing,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        remove: (name) => dispatch(removePosition(name)),
        placeOrder: () => dispatch(placeOrder())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartList);