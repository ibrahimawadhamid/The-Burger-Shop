import * as actionTypes from '../actions/actionTypes';
import * as constants from '../constants';
import axios from '../../axios-orders';

const initialState = {
    ingredients: null,
    totalPrice: 4,
    purchasable: false,
    purchasing: false,
    loading: false
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
            const priceAddition = constants.INGREDIENT_PRICES[action.payload.IngredientType];
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
            const priceDeduction = constants.INGREDIENT_PRICES[action.payload.IngredientType];
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
            purchaseContinue(state);
            return {
                ...state,
                loading: true,
                purchasing: false
            };
        case actionTypes.FETCH_INGREDIENTS:
            return {
                ...state,
                ingredients: action.payload.ingredients
            };
        default:
            return {
                ...state
            }
    }
};

const purchaseContinue = (state) => {
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
    axios.post('/orders.json', order)
        .then((response) => {
            alert("Submitted, waiting for confirmation!");
            console.log(response);
        })
        .catch(error => {
            alert("Connection Error");
            console.log(error)
        });
};

export default reducer;
