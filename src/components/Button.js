import React from "react";
import '../stylesheets/Button.css';


function Button(props) {

    const isAnOperator = val => {
        return isNaN(val) && (val !== '.') && (val !== '=');
    };

    return (
        <div
          className={` box-title ${isAnOperator(props.children) ? 'operator' : null}`} 
          onClick={() => props.doClick(props.children)}>
            {props.children}
        </div>
    );
}

export default Button;