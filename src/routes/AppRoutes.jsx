import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Page404 from '../components/Page404/Page404'
import ProductList from '../components/ProductList/ProductList'
import CartList from '../Pages/CartList/CartList'

import Favorites from '../Pages/Favorites/Favorites'


const AppRoutes = (props) => {
    const { toggleAdded, toggleFavorite, cards } = props
    return (
        <div>
            <Switch>
                <Redirect exact from="/" to="home" />
                <Route exact 
                path="/favorites" 
                render={() => 
                <Favorites
                        toggleFavorite={toggleFavorite}
                        toggleAdded={toggleAdded}
                        cards={cards}
                        />
                } />
                <Route exact path="/cart" render={() => 
                <CartList 
                toggleAdded={toggleAdded}
                cards={cards}
                />}
                 />
                <Route exact path="/home" render={(routerProps) =>
                    <ProductList
                        toggleAdded={toggleAdded}
                        toggleFavorite={toggleFavorite}
                        cards={cards}
                        {...routerProps}
                    />}
                />
                <Route path="*" component={Page404} />
            </Switch>
        </div>
    )
}

export default AppRoutes;
