import React from "react";


export const alphaValidation = (props) => {
    
    return true;
}

export const alphaNumericValidation = (props) => {
    return false;
}

export const customValidation = (props) => {
    if(props && props.componentType==="TextBox" && props.validation && props.validation.type) {
        if(props.validation.type === "alphabets") {
            return alphaValidation(props.eTarget.target.value);
        }
    } 
    return false;
}
