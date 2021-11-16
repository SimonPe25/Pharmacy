import React from 'react';
import Cart from '../../components/Cart/Cart';
import Formik1 from '../../components/Formik/Formik';
import "./style.scss"

const CartList = (props) => {

    const { cards, toggleAdded } = props
    return (
        <div className="container">
            <ul className="albums container">
                <div className="albums__header-container">
                    <h2 className="albums__title">CART</h2>
                </div>
                <div className="albums__cart-container" >
                    {cards
                        .filter(el => el.added)
                        .map(el =>
                            <Cart
                                toggleAdded={toggleAdded}
                                vendorСode={el.vendorСode}
                                title={el.title}
                                url={el.url}
                                cost={el.cost}
                                key={el.id.toString()}
                            >
                            </Cart>)}
                </div>
                <div className="pay">Итого к оплате:___________</div>
            </ul>
            
            <div>
            <Formik1 cards={cards}/>
            </div>
        </div>
    )
}

export default CartList;
