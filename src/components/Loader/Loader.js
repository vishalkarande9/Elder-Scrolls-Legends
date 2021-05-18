import React from 'react';
import classes from './Loader.module.css';
import loader from '../../assets/loader.png';


const Loader = (props) => {
    return (
        <div className={classes.loader}>        
            <img src={loader} className={classes.img}></img>
        </div>
    );
};

export default Loader;