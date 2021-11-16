import React from 'react';
import Product from '../../components/Product/Product';
import "./style.scss"

const Favorites = (props) => {

    const { cards, toggleFavorite, toggleAdded } = props

    return (
        <div>
            <ul className="albums container">
                <div className="albums__header-container">
                    <h2 className="albums__title">FAVORITE PRODUCt</h2>
                </div>
                <div className="albums__title-container" >
                    {cards
                        .filter(el => el.isInfavorite)
                        .map(el => <Product
                            toggleAdded={toggleAdded}
                            toggleFavorite={toggleFavorite}
                            added={el.added}
                            className="album__content"
                            key={el.id}
                            title={el.title}
                            cost={el.cost}
                            url={el.url}
                            vendorСode={el.vendorСode}
                            description={el.description}
                            isInfavorite={el.isInfavorite}
                        >
                            {el.title}
                        </Product>)
                    }
                </div>
            </ul>
        </div>

    )
}

export default Favorites;
