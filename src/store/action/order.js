import axios from '../../axios-fastfood'

import {ORDER_FAILURE, ORDER_REQUEST, ORDER_SUCCESS} from "./actionTypes";

export const orderRequest = () => ({type: ORDER_REQUEST});

export const orderSuccess = response => ({type: ORDER_SUCCESS, response});

export const orderFailure = error => ({type: ORDER_FAILURE, error});


export const createOrder = order => {
    return dispatch => {
        dispatch(orderRequest());

        axios.post('dishes.json, order').then(
            response => dispatch(orderSuccess()),
            error => dispatch(orderFailure(error))
        )
    }
};