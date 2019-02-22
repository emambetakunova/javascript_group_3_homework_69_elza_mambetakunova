import axios from '../../axios-fastfood';

import {
    ADD_POSITION,
    REMOVE_POSITION,
    INIT_POSITION,
    POSITION_FAILURE, POSITION_SUCCESS, POSITION_REQUEST, PLACE_ORDER, CLOSE_MODAL, CLEAR_CART
} from "./actionTypes";

export const positionRequest = () => {
    return {type: POSITION_REQUEST};
};

export const positionSuccess = (response) => {
    return {type: POSITION_SUCCESS, response};
};

export const positionFailure = () => {
    return {type: POSITION_FAILURE};
};

export const fetchPosition = () => {
    return dispatch => {
        dispatch(positionRequest());
        axios.get('/dishes.json').then(response => {
            dispatch(positionSuccess(response.data));
        }, error => {
            dispatch(positionFailure());
        });
    }
};

export const addPosition = position => ({type: ADD_POSITION, position});

export const removePosition = position => ({type: REMOVE_POSITION, position});

export const placeOrder = () => ({type: PLACE_ORDER});

export const closeModal = () => ({type: CLOSE_MODAL});

export const initPositions = () => ({type: INIT_POSITION});

export const clearCart = () => ({type: CLEAR_CART});