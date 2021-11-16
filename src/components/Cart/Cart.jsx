import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { modalCartOpen, vendorCodePrime } from '../../store/actions';

import Icon from '../Icon';
import './cart.scss';


const Cart = (props) => {

  const [count, setCount] = useState(1);

  const plusMedic =() => {
    setCount(count+1)
  }
  const minusMedic =() => {
    if (count>=2) {
      setCount(count-1)
    }
      return
  }

  const dispatch = useDispatch()
  const { title, cost, vendorСode, url } = props

  const modalCartOpenWindow = () => {
    const isOpenData = true
    const vendoreCode = props.vendorСode
    dispatch(modalCartOpen(isOpenData))
    dispatch(vendorCodePrime(vendoreCode))
  }

  const summa = count * cost

  return (
    <div>
      <div className="cart-block">
        <img src={url} alt="medic" className="cart-block__img-cart"/>
        <div className="title-container">
          <h2 className="title-container__title">{title}</h2>
          <h3 className="title-container__vendore">Артикул товара - {vendorСode}</h3>
        </div>
        <div className="cart-block__cost">
          {cost} грн
        </div>
        <div className="counter">
        <Icon 
        
        onClick={minusMedic} 
           type="minus"
           color="red"
           className="minus"
           />
           <div>{count}</div>
           <Icon
           onClick={plusMedic} 
           type="plus"
           color="green"
           className="plus"
           />
        </div>
        <div className="content-cart">{summa}.грн</div>
        <div onClick={modalCartOpenWindow} className="close-cart">&#10006;</div>
      </div>
    </div>
  )
}
export default Cart;
