import React from 'react';

import classes from './Burger.css';
import BurgerIngredients from './BurgerIngridients/BurgerIngridients';

const burger = (props) => {
    const transformedIngridients = Object.keys(props.ingredients)
    .map( igKey => {
        return [...Array(props.ingredients[igKey])].map(( _,i) => {
            return <BurgerIngredients key={igKey + i} type={igKey}/>
        });
    });

    return(
        <div className={classes.Burger}>
            <BurgerIngredients type="bread-top"/>
                {transformedIngridients}
            <BurgerIngredients type="bread-bottom"/>
        </div>
    )
}

export default burger;