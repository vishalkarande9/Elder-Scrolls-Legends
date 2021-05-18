import React from 'react';
import classes from './Card.module.css';


const Card = React.forwardRef((props, ref) => {
    return (
        <div ref={ref} className={classes.card}>
            <div className={classes.img__container}>
                <img className={classes.img} src={props.card.imageUrl} alt={"Card Image"}></img>
            </div>
            <label className={classes.txt}>Name: {props.card.name}</label>
            <label className={classes.txt}>Text: {props.card.text}</label>
            <label className={classes.txt}>Set Name: {props.card.set.name}</label>
            <label className={classes.txt}>Type: {props.card.type}</label>
        </div>
    );
});

export default Card;