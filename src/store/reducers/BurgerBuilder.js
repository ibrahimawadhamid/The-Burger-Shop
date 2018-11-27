import * as actionTypes from '../actions';
import {INGREDIENT_PRICES} from '../constants';

const initialState = {
    ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
    },
    totalPrice: 4,
    purchasable: false,
    purchasing: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            let oldCount = state.ingredients[action.payload.IngredientType];
            let updatedCount = oldCount + 1;
            let updatedIngredients = {
                ...state.ingredients
            };
            updatedIngredients[action.payload.IngredientType] = updatedCount;
            const priceAddition = INGREDIENT_PRICES[action.payload.IngredientType];
            let oldPrice = state.totalPrice;
            let newPrice = oldPrice + priceAddition;
            let sum = Object.keys(updatedIngredients)
                .map(igKey => {
                    return updatedIngredients[igKey];
                })
                .reduce((sum, el) => {
                    return sum + el;
                }, 0);
            return {
                ...state,
                totalPrice: newPrice,
                ingredients: updatedIngredients,
                purchasable: sum > 0
            };
        case actionTypes.REMOVE_INGREDIENT:
            oldCount = state.ingredients[action.payload.IngredientType];
            if (oldCount <= 0) {
                return {
                    ...state
                };
            }
            updatedCount = oldCount - 1;
            updatedIngredients = {
                ...state.ingredients
            };
            updatedIngredients[action.payload.IngredientType] = updatedCount;
            const priceDeduction = INGREDIENT_PRICES[action.payload.IngredientType];
            oldPrice = state.totalPrice;
            newPrice = oldPrice - priceDeduction;
            sum = Object.keys(updatedIngredients)
                .map(igKey => {
                    return updatedIngredients[igKey];
                })
                .reduce((sum, el) => {
                    return sum + el;
                }, 0);
            return {
                ...state,
                totalPrice: newPrice,
                ingredients: updatedIngredients,
                purchasable: sum > 0
            };
        case actionTypes.PURCHASE:
            return {
                ...state,
                purchasing: true
            };
        case actionTypes.PURCHASE_CANCEL:
            return {
                ...state,
                purchasing: false
            };
        case actionTypes.PURCHASE_CONTINUE:
            alert('You continued!');
            return {
                ...state
            };
        default:
            return {
                ...state
            }
    }
};

export default reducer;
