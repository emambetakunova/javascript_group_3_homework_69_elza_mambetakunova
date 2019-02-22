import {
    ADD_POSITION,
    REMOVE_POSITION,
    INIT_POSITIONS,
    POSITION_REQUEST,
    POSITION_SUCCESS,
    POSITION_FAILURE
} from "../action/actionTypes";

const initialState = {
    positions: {},
    count: null,
    cart: [],
    loading: false,
    totalPrice: 0
};


const ffBuilderReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POSITION:
            let order;

            if(state.cart[action.position.name]) {
                order = {...action.position, amount: state.cart[action.position.name].amount + 1}
            } else {
                order = {...action.position, amount: 1};
            }
            const orders = {...state.cart, [action.position.name]: order};
            return {
                ...state, cart: orders,
                totalPrice: state.totalPrice + action.position.price
            };
        case REMOVE_POSITION:
            let cart = {...state.cart};
            let newAmount = cart[action.position].amount - 1;
            cart[action.position].amount = newAmount;
            return {
                    ...state, cart: cart,
                    totalPrice: state.totalPrice - cart[action.position].price
                };
        case INIT_POSITIONS:
            return {
                ...state,
                positions: [],
                totalPrice: 0
            };
        case POSITION_REQUEST:
            return {
                ...state,
                positions: [],
                totalPrice: 0
            };
        case POSITION_SUCCESS:
            return {
                ...state,
                positions: action.response,
            };
        case POSITION_FAILURE:
            return {
                ...state
            };
        default:
            return state
    }
};

export default ffBuilderReducer;