import React, {Component} from 'react';

import Aux from '../../hoc/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import {connect} from 'react-redux';
import * as actionTypes from '../../store/actions';

class BurgerBuilder extends Component {
    render() {
        const disabledInfo = {
            ...this.props.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return (
            <Aux>
                <Modal show={this.props.purchasing} modalClosed={this.props.onPurchaseCancel}>
                    <OrderSummary
                        ingredients={this.props.ingredients}
                        price={this.props.totalPrice}
                        purchaseCancelled={this.props.onPurchaseCancel}
                        purchaseContinued={this.props.onPurchaseContinue}/>
                </Modal>
                <Burger ingredients={this.props.ingredients}/>
                <BuildControls
                    ingredientAdded={this.props.onAddIngredient}
                    ingredientRemoved={this.props.onRemoveIngredient}
                    disabled={disabledInfo}
                    purchasable={this.props.purchasable}
                    ordered={this.props.onPurchase}
                    price={this.props.totalPrice}/>
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        ingredients: state.BurgerBuilderReducer.ingredients,
        totalPrice: state.BurgerBuilderReducer.totalPrice,
        purchasable: state.BurgerBuilderReducer.purchasable,
        purchasing: state.BurgerBuilderReducer.purchasing
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddIngredient: (IngredientType) => dispatch({
            type: actionTypes.ADD_INGREDIENT,
            payload: {
                IngredientType: IngredientType
            }
        }),
        onRemoveIngredient: (IngredientType) => dispatch({
            type: actionTypes.REMOVE_INGREDIENT,
            payload: {
                IngredientType: IngredientType
            }
        }),
        onPurchase: () => dispatch({
            type: actionTypes.PURCHASE,
            payload: {}
        }),
        onPurchaseCancel: () => dispatch({
            type: actionTypes.PURCHASE_CANCEL,
            payload: {}
        }),
        onPurchaseContinue: () => dispatch({
            type: actionTypes.PURCHASE_CONTINUE,
            payload: {}
        }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);
