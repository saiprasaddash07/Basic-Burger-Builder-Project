import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    
    console.log(props);

    let transformedIngredients = Object.keys(props.ingredients).map( k => {
        return [...Array(props.ingredients[k])].map((_,i)=>{
            return <BurgerIngredient key={k+i} type={k} /> ;
        }) // [x,y]
    });
    // .reduce((arr,el)=>{
    //     return arr.concat(el);
    // },[]);
    // if(transformedIngredients.length===0){
    //     transformedIngredients = <p>Please start adding ingredients!</p>
    // }

    let flag=0;
    for(let i=0;i<transformedIngredients.length;i++){
        var j = transformedIngredients[i];
        // console.log(j);
        if(j.length!==0){
            flag=1;
        } 
    }
    if(flag===0){
        transformedIngredients = <p>Please start adding ingredients!</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default burger;