import * as actionTypes from "./actionTypes";
import axios from '../../axios-orders';
import * as constants from '../constants';

export const addIngredient = (IngredientType) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        payload: {
            IngredientType: IngredientType
        }
    };
};
export const removeIngredient = (IngredientType) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        payload: {
            IngredientType: IngredientType
        }
    };
};
export const purchase = () => {
    return {
        type: actionTypes.PURCHASE,
        payload: {
        }
    };
};
export const purchaseCancel = () => {
    return {
        type: actionTypes.PURCHASE_CANCEL,
        payload: {
        }
    };
};
export const purchaseContinue = () => {
    return {
        type: actionTypes.PURCHASE_CONTINUE,
        payload: {
        }
    };
};

const getIngredientsAction = (ingredients) => {
    return {
        type: actionTypes.FETCH_INGREDIENTS,
        payload: {
            ingredients: ingredients
        }
    };
};

export const getIngredients = () => {
    return dispatch => {
        axios.get(constants.INGREDIENTS_URL)
            .then(response => {
                dispatch(getIngredientsAction(response.data));
            })
            .catch(error => {
                alert("Ingredients can't be loaded!");
                console.log(error.message);
            });
    };
};