import React, {Component} from 'react';

import Aux from '../../hoc/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import {connect} from 'react-redux';
import * as actionCreators from '../../store/actions/index';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';

class BurgerBuilder extends Component {

    state = {
        loading: false,
    };

    componentDidMount() {
        this.setState({
            loading: true,
        });
        this.props.getIngredients();
    }

    render() {
        const disabledInfo = {
            ...this.props.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        let orderSummary = null;
        let burger = null;
        if (this.props.ingredients) { // If the ingredients are ready
            orderSummary = <OrderSummary
                ingredients={this.props.ingredients}
                price={this.props.totalPrice}
                purchaseCancelled={this.props.onPurchaseCancel}
                purchaseContinued={this.props.onPurchaseContinue}/>;
            burger = (
                <Aux><Burger ingredients={this.props.ingredients}/>
                    <BuildControls
                        ingredientAdded={this.props.onAddIngredient}
                        ingredientRemoved={this.props.onRemoveIngredient}
                        disabled={disabledInfo}
                        purchasable={this.props.purchasable}
                        ordered={this.props.onPurchase}
                        price={this.props.totalPrice}/>
                </Aux>);
        } else {
            orderSummary = <Spinner/>;
        }
        return (
            <Aux>
                <Modal show={this.props.purchasing} modalClosed={this.props.onPurchaseCancel}>
                    {orderSummary}
                </Modal>
                {this.props.ingredients ? burger : null}
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        ingredients: state.BurgerBuilderReducer.ingredients,
        totalPrice: state.BurgerBuilderReducer.totalPrice,
        purchasable: state.BurgerBuilderReducer.purchasable,
        purchasing: state.BurgerBuilderReducer.purchasing,
        loading: state.BurgerBuilderReducer.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddIngredient: (IngredientType) => dispatch(actionCreators.addIngredient(IngredientType)),
        onRemoveIngredient: (IngredientType) => dispatch(actionCreators.removeIngredient(IngredientType)),
        onPurchase: () => dispatch(actionCreators.purchase()),
        onPurchaseCancel: () => dispatch(actionCreators.purchaseCancel()),
        onPurchaseContinue: () => dispatch(actionCreators.purchaseContinue()),
        getIngredients: () => dispatch(actionCreators.getIngredients()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));
