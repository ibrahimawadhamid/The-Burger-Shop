import * as actionTypes from '../actions';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

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
            let oldCount = state.ingredients[action.payload.type];
            let updatedCount = oldCount + 1;
            let updatedIngredients = {
                ...state.ingredients
            };
            updatedIngredients[action.payload.type] = updatedCount;
            const priceAddition = INGREDIENT_PRICES[action.payload.type];
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
            oldCount = state.ingredients[action.payload.type];
            if (oldCount <= 0) {
                return {
                    ...state
                };
            }
            updatedCount = oldCount - 1;
            updatedIngredients = {
                ...state.ingredients
            };
            updatedIngredients[action.payload.type] = updatedCount;
            const priceDeduction = INGREDIENT_PRICES[action.payload.type];
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
        default:
            return {
                ...state
            }
    }
};

export default reducer;
