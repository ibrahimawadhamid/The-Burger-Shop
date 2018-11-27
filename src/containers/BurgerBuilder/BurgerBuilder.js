import React, {Component} from 'react';

import Aux from '../../hoc/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import {connect} from 'react-redux';
import * as actionTypes from '../../store/actions';

class BurgerBuilder extends Component {
   state = {
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

    purchaseHandler = () => {
        this.setState({purchasing: true});
    };

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    };

    purchaseContinueHandler = () => {
        alert('You continue!');
    };

    render() {
        const disabledInfo = {
            ...this.props.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        // {salad: true, meat: false, ...}
        return (
            <Aux>
                <Modal show={this.props.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary
                        ingredients={this.props.ingredients}
                        price={this.props.totalPrice}
                        purchaseCancelled={this.purchaseCancelHandler}
                        purchaseContinued={this.purchaseContinueHandler}/>
                </Modal>
                <Burger ingredients={this.props.ingredients}/>
                <BuildControls
                    //ingredientAdded={this.addIngredientHandler}
                    ingredientAdded={this.props.onAddIngredient}
                    ingredientRemoved={this.props.onRemoveIngredient}
                    disabled={disabledInfo}
                    purchasable={this.props.purchasable}
                    ordered={this.purchaseHandler}
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
        onAddIngredient: (type) => dispatch(
            {
                type: actionTypes.ADD_INGREDIENT,
                payload: {
                    type: type
                }
            }),
        onRemoveIngredient: (type) => dispatch(
            {
                type: actionTypes.REMOVE_INGREDIENT,
                payload: {
                    type: type
                }
            }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);
