import React, {Component} from 'react';
import {createOrder} from "../../store/action/order";
import Spinner from "../../components/UI/Spinner/Spinner";

import {connect} from "react-redux";
import Button from "../../components/UI/Button/Button";

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        street: '',
        postal: '',
    };

    valueChanged = event => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    };

    orderHandler = event => {
        event.preventDefault();
        let positions = {};
        Object.keys(this.props.cart).forEach(dish => {
            positions[dish] = this.props.cart[dish].amount
        });
        const orderData = {
            positions,
            totalPrice: this.props.totalPrice,
            customer: {...this.state}
        };
        console.log(this.props);

        this.props.createOrder(orderData);
        this.props.close();
        this.props.clearCart();
    };

    render() {
        let form = (
            <form onSubmit={this.orderHandler}>
                <input className="Input" type="text" name="name" placeholder="Your Name"
                       value={this.state.name} onChange={this.valueChanged}
                />
                <input className="Input" type="email" name="email" placeholder="Your Mail"
                       value={this.state.email} onChange={this.valueChanged}
                />
                <input className="Input" type="text" name="street" placeholder="Street"
                       value={this.state.street} onChange={this.valueChanged}
                />
                <input className="Input" type="text" name="postal" placeholder="Postal Code"
                       value={this.state.postal} onChange={this.valueChanged}
                />
                <Button btnType="Success">Create order</Button>
            </form>
        );

        if (this.props.loading) {
            form = <Spinner />;
        }

        return (
            <div className="ContactData">
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    positions: state.ff.positions,
    cart: state.ff.cart,
    totalPrice: state.ff.totalPrice,
    loading: state.order.loading,
    purchasing: state.order.purchasing
});

const mapDispatchToProps = dispatch => ({
    createOrder: (orderData) => dispatch(createOrder(orderData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactData);