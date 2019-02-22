import axios from '../../axios-fastfood'

import {ORDER_FAILURE, ORDER_REQUEST, ORDER_SUCCESS} from "./actionTypes";
import {initPositions} from "./ffBuilderAction";

export const orderRequest = () => ({type: ORDER_REQUEST});

export const orderSuccess = () => ({type: ORDER_SUCCESS});

export const orderFailure = error => ({type: ORDER_FAILURE, error});


export const createOrder = (order) => {
    return dispatch => {
        dispatch(orderRequest());
        axios.post('/dishesOrders.json', order).then(
            response => {
                dispatch(orderSuccess());
                dispatch(initPositions());
            },
            error => dispatch(orderFailure(error))
        );
    }
};