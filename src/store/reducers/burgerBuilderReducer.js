import {ADD_INGREDIENT, REMOVE_INGREDIENT, INIT_INGREDIENTS} from "../action/actionTypes";

const INITIAL_INGREDIENTS = {
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0
};

const INITIAL_PRICE = 20;

const INGREDIENT_PRICES = {
    salad: 5,
    bacon: 20,
    cheese: 50,
    meat: 30
};

const initialState = {
    ingredients: {...INITIAL_INGREDIENTS},
    totalPrice: INITIAL_PRICE
};


const burgerBuilderReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] + 1
                },
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
            };
        case REMOVE_INGREDIENT:
            if (state.ingredients[action.ingredientName] > 0) {
                return {
                    ...state,
                    ingredients: {
                        ...state.ingredients,
                        [action.ingredientName]: state.ingredients[action.ingredientName] - 1
                    },
                    totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
                };
            }
            return state;
        case INIT_INGREDIENTS:
            return {
                ...state,
                ingredients: {...INITIAL_INGREDIENTS},
                totalPrice: INITIAL_PRICE
            };
        default:
            return state
    }
};

export default burgerBuilderReducer;