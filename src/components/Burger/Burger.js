import React from 'react';

import classes from './Burger.css';
import BurgerIngredients from './BurgerIngridients/BurgerIngridients';

const burger = (props) => {
    let transformedIngridients = Object.keys(props.ingredients)
    .map( igKey => {
        return [...Array(props.ingredients[igKey])].map(( _,i) => {
            return <BurgerIngredients key={igKey + i} type={igKey}/>
        });
    })
    .reduce((arr,el)=>{
        return arr.concat(el)
    },[]);

    if(transformedIngridients.length === 0){
      transformedIngridients = <p>Please start adding ingredients!</p>  
    }
    return(
        <div className={classes.Burger}>
            <BurgerIngredients type="bread-top"/>
                {transformedIngridients}
            <BurgerIngredients type="bread-bottom"/>
        </div>
    )
}

export default burger;