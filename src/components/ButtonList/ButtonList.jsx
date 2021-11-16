import React from 'react';
import Button from '../Button/Index';



const ButtonList = (props) => {
    const { modalFirstOpen } = props
    return (
        <div>
            <Button
                onClick={modalFirstOpen}
            />
        </div>
    )
}

export default ButtonList
