import React from 'react'
import {USCurrencyFormat} from './App'
import slugify from 'slugify'


function FinalCostumize(props){

    // Adding props to all going back to parent
    return (
        <div key={props.itemHash} className="feature__item">
          <input
            type="radio"
            id={props.itemHash}
            className="feature__option"
            name={slugify(props.feature)}
            checked={props.item.name === props.selected[props.feature].name}
            onChange={e => props.updateFeature(props.feature, props.item)}
          />
          <label htmlFor={props.itemHash} className="feature__label">
            {props.item.name} ({USCurrencyFormat.format(props.item.cost)})
          </label>
        </div>
      );
}


export default FinalCostumize;
