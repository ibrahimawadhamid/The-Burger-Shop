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

const purchaseCompleted = () => {
    return {
        type: actionTypes.PURCHASE_COMPLETED,
        payload: {
        }
    };
};

export const confirmOrder = () => {
    return (dispatch, getState) => {
        const state = getState().BurgerBuilderReducer;
        const order = {
            ingredients: state.ingredients,
            price: state.totalPrice,
            customer: {
                name: 'Ibrahim Awad',
                address: {
                    street: 'Test Street',
                    zipCode: '12321',
                    country: 'Egypt'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fastest'
        };
        alert("Attempting Order Submission");
        axios.post('/orders.json', order)
            .then(response => {
                alert("Order Submitted");
                console.log(response.data);
            })
            .catch(error => {
                alert("Connection Error");
                console.log(error)
            });
        dispatch(purchaseCompleted());
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