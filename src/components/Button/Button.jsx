import React from 'react';
import PropTypes from 'prop-types';
import "./style.scss";


const Button = (props) => {
    const { onClick } = props
    return (
        <div>
            <button
                onClick={onClick}
                className={props.className}
                text={props.text}
            >
                {props.text}
            </button>
        </div>
    )
}

export default Button;



Button.protoType = {
    text: PropTypes.string.isRequired
}

Button.defaultProps = {
    text: 'ADD TO CARD',
    className: "btn btn-primary btn-sm "

}