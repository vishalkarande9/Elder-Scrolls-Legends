import React from 'react';
import classes from './Search.module.css';
import searchLogo from '../../assets/search@3x.png';


const Search = (props) => {
    return (
        <div className={classes.search__block}>
          <div className={classes.icon__block}>
            <img className={classes.img} src={searchLogo} />
          </div> 
          <input type="text" value={props.query} onChange={props.inputChange} className={classes.input} placeholder={'Search for Cards by Name'}></input>
        </div>
    );
};

export default Search;