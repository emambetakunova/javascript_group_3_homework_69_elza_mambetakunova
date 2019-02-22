import React, {Component} from 'react';
import Positions from "../../components/Positions/Positions"
import CartList from "../../components/CartList/CartList"
import {connect} from "react-redux";

import {addPosition, clearCart, closeModal, fetchPosition} from "../../store/action/ffBuilderAction";
import Modal from "../../components/UI/Modal/Modal";
import ContactData from "../ContactData/ContactData";


class FastFoodBuilder extends Component {
    componentDidMount() {
        this.props.fetchPosition();
    }

    clickHandler = key => {
        const position = {
            name: this.props.positions[key].name,
            price: this.props.positions[key].price,
        };
        this.props.addPosition(position)
    };


    render() {
        const positions = Object.keys(this.props.positions).map(posKey => (
            <Positions
                key={posKey}
                name={this.props.positions[posKey].name}
                image={this.props.positions[posKey].image}
                price={this.props.positions[posKey].price}
                onClick={() => this.clickHandler(posKey)}
            />
        ));
        return (
            <div>
                <h4 className="MenuItem">Menu</h4>
                <div className="Menu">
                    {positions}
                </div>
                <h4 className="MenuItem">Cart list</h4>
                <div className="CartWrap">
                    <CartList/>
                </div>
                <Modal
                    show={this.props.purchasing}
                    close={this.props.purchaseCancel}
                >
                    <ContactData
                        close={this.props.purchaseCancel}
                        clearCart={this.props.clearCart}
                    />
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        positions: state.ff.positions,
        totalPrice: state.ff.totalPrice,
        purchasing: state.ff.purchasing,
        cart: state.ff.cart
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addPosition: position => dispatch(addPosition(position)),
        fetchPosition: () => dispatch(fetchPosition()),
        purchaseCancel: () => dispatch(closeModal()),
        clearCart: () => dispatch(clearCart())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FastFoodBuilder);