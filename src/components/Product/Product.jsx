import React from 'react';
import Icon from '../Icon/index';
import "./style.scss";
import "arial";
import { useDispatch } from 'react-redux';
import { modalFirstOpen, vendorCodePrime } from '../../store/actions';
import Button from '../Button/Index';




const Product = (props) => {

    const dispatch = useDispatch()
    const { title, cost, url, className, description, isInfavorite, vendorСode, toggleFavorite, added } = props

    const modalFirstOpenWindow = () => {
        const isOpenData = true
        const vendoreCode = props.vendorСode
        dispatch(modalFirstOpen(isOpenData))
        dispatch(vendorCodePrime(vendoreCode))
    }

    return (
        <div className={className}>
            <img className="album__image" src={url} alt={title} />
            <div className="album__title-container">
                <h3 className="album__title-medic">{title}</h3>
                <h4 className="album__title-country">made by Egypt</h4>
            </div>
            <div >
                <Icon
                    onClick={() => toggleFavorite(vendorСode)}
                    color={isInfavorite ? "red" : "yellow"}
                    type="star"
                    className="star-class"
                />
                {/* <Icon
                    onClick={() => console.log(alert("Упс, а этого небыло в задании, нажмите на первую звёздочку слева"))}
                    type="star"
                    color="yellow"
                    className="star-class"
                />
                <Icon
                    onClick={() => console.log(alert("Упс, а этого небыло в задании, нажмите на первую звёздочку слева"))}
                    type="star"
                    color="yellow"
                    className="star-class"
                />
                <Icon
                    onClick={() => console.log(alert("Упс, а этого небыло в задании, нажмите на первую звёздочку слева"))}
                    type="star"
                    color="yellow"
                    className="star-class"
                />
                <Icon
                    onClick={() => console.log(alert("Упс, а этого небыло в задании, нажмите на первую звёздочку слева"))}
                    type="star"
                    color="yellow"
                    className="star-class"
                /> */}
            </div>
            <h3 className="album__description">{description}</h3>
            <div className="album__cost-container">
                <h2 className="album__cost">&#8372;{cost}</h2>
                <div className="album__btn-add">
                    {!added ?
                        <Button onClick={modalFirstOpenWindow} />
                        :
                        <Icon
                            type="cart"
                            className="album__cart"
                        />
                    }
                </div>
            </div>
        </div>
    )
}

export default Product;

