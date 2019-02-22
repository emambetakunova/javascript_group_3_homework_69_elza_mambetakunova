import React, {Component} from 'react';
import Positions from "../../components/Positions/Positions"
import Cart from "../../components/CartList/CartList"
import {connect} from "react-redux";

import {addPosition, fetchPosition, removePosition} from "../../store/action/ffBuilderAction";


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
                <h4 className="MenuItem">Order list</h4>
                <div className="OrderWrap">
                    <Cart
                    total={this.props.totalPrice}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        positions: state.ff.positions,
        totalPrice: state.ff.totalPrice
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addPosition: position => dispatch(addPosition(position)),
        fetchPosition: () => dispatch(fetchPosition())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FastFoodBuilder);