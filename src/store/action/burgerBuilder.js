import {ADD_INGREDIENT, INIT_INGREDIENTS, REMOVE_INGREDIENT} from "./actionTypes";

export const addIngredient = ingredientName => ({type: ADD_INGREDIENT, ingredientName});

export const removeIngredient = ingredientName => ({type: REMOVE_INGREDIENT, ingredientName});

export const initIngredients = () => ({type: INIT_INGREDIENTS});