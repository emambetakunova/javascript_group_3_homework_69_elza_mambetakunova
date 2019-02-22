import {
    ADD_POSITION,
    REMOVE_POSITION,
    POSITION_REQUEST,
    POSITION_SUCCESS,
    POSITION_FAILURE,
    PLACE_ORDER,
    CLOSE_MODAL, CLEAR_CART
} from "../action/actionTypes";

const initialState = {
    positions: {},
    count: null,
    cart: [],
    loading: false,
    purchasing: false,
    totalPrice: 150
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
                totalPrice: state.totalPrice + action.position.price,
            };
        case REMOVE_POSITION:
            let cart = {...state.cart};
            let newAmount = cart[action.position].amount - 1;
            cart[action.position].amount = newAmount;
            return {
                    ...state, cart: cart,
                    totalPrice: state.totalPrice - cart[action.position].price
                };
        case POSITION_REQUEST:
            return {
                ...state,
                positions: [],
                totalPrice: 150
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
        case PLACE_ORDER:
            return {
                ...state,
                purchasing: true
            };
        case CLOSE_MODAL:
            return {
                ...state,
                purchasing: false
            };
        case CLEAR_CART:
            return {
                ...state,
                cart: []
            };
        default:
            return state
    }
};

export default ffBuilderReducer;