import React, {Component} from 'react';
import Positions from "../../components/Positions/Positions"
import Order from "../../components/OrderList/OrderList"

import hamburgerImage from '../../assets/hamburger.png';
import cheeseburgerImage from '../../assets/cheeseburger.png';
import friesImage from '../../assets/fries.png';
import coffeeImage from '../../assets/coffee.png';
import teaImage from '../../assets/tea.png';
import colaImage from '../../assets/cola.png';


const POSITIONS = [
    {name: 'Hamburger', image: hamburgerImage},
    {name: 'Cheeseburger', image: cheeseburgerImage},
    {name: 'Fries', image: friesImage},
    {name: 'Coffee', image: coffeeImage},
    {name: 'Tea', image: teaImage},
    {name: 'Cola', image: colaImage}
];

class FastFoodBuilder extends Component {
    state = {
        initialText: 'Order is empty! Please add some items!',
        totalPrice: 0,
        usedPositions: [],
        positions: [
            {name: 'Hamburger', count: 0, price: 110},
            {name: 'Cheeseburger', count: 0, price: 120},
            {name: 'Fries', count: 0, price: 45},
            {name: 'Coffee', count: 0, price: 70},
            {name: 'Tea', count: 0, price: 20},
            {name: 'Cola', count: 0, price: 35}
        ]
    };

    addElement = (index) => {
        let positions = [...this.state.positions];
        let position = positions[index];
        position.count++;
        let totalPrice = this.state.totalPrice + position.price;
        positions[index] = position;
        let usedPositions = [...this.state.usedPositions];
        if (!usedPositions.includes(position)) {
            usedPositions.push(position);
        }
        let initialText = ' ';
        this.setState({totalPrice, positions, usedPositions, initialText});
    };

    removeElement = (index) => {
        let usedPositions = [...this.state.usedPositions];
        let usedPosition = usedPositions[index];
        if (usedPosition.count > 1) {
            usedPosition.count--;
            let totalPrice = this.state.totalPrice - usedPosition.price;
            usedPositions[index] = usedPosition;
            this.setState({totalPrice, usedPositions});
        } else {
            usedPositions.splice(index, 1);
            let totalPrice = this.state.totalPrice - usedPosition.price;
            let initialText = 'Order is empty! Please add some items!';
            this.setState({totalPrice, usedPositions, initialText});
        }
    };

    render() {
        return (
            <div>
                <h4 className="MenuItem">Menu</h4>
                <div className="Menu">
                    {POSITIONS.map((pos, key) =>
                        <Positions
                            key={key}
                            image={pos.image}
                            name={pos.name}
                            price={this.state.positions[key].price}
                            onClick={() => this.addElement(key)}
                        />
                    )}
                </div>
                <h4 className="MenuItem">Order list</h4>
                <div className="OrderWrap">
                    <Order
                        initialText = {this.state.initialText}
                        usedPositions={this.state.usedPositions}
                        total={this.state.totalPrice}
                        remove={this.removeElement}
                    />
                </div>
            </div>
        );
    }
}

export default FastFoodBuilder;