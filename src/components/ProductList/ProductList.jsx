import React from 'react';
import Product from '../Product/Product';
import "typeface-oswald";
import "./style.scss";
import Icon from '../Icon/index';


const ProductList = (props) => {

    const { cards, toggleFavorite, toggleAdded } = props

    return (
        <div >
            <ul className="albums container">
                <div className="albums__header-container">
                    <h2 className="albums__title">Latest arrivals in musica</h2>
                    <div className="albums__icon-container">
                        <Icon
                            type="youtube"
                            color="red"
                            className="albums__youtube-left"
                        />
                        <Icon
                            type="youtube"
                            color="red"
                            className="albums__youtube-right"
                        />
                    </div>
                </div>
                <div className="albums__title-container">
                    {cards.map(medicalCards =>
                        <Product
                            cards={cards}
                            added={medicalCards.added}
                            toggleAdded={toggleAdded}
                            toggleFavorite={toggleFavorite}
                            className="album__content"
                            key={medicalCards.id.toString()}
                            title={medicalCards.title}
                            cost={medicalCards.cost}
                            url={medicalCards.url}
                            vendorСode={medicalCards.vendorСode}
                            description={medicalCards.description}
                            isInfavorite={medicalCards.isInfavorite}
                        >
                        </Product>)}
                </div>
            </ul>
        </div>
    )
}

export default ProductList;

