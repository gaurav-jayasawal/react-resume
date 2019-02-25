import React from 'react';
import "./TechnologyButton.css";

const TechnologyButton = (props) => {
    return(
        <span className="TechnologyButton-component">
            {props.name}
        </span>
    )
}

export default TechnologyButton;