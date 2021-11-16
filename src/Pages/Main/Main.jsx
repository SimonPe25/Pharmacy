import React, { useEffect } from 'react';
import AppRoutes from '../../routes/AppRoutes';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { fetchMedical, updateCardsStore } from "../../store/actions"
import { useDispatch, useSelector } from 'react-redux';
import { getCards } from '../../store/selectors'
import ModalList from '../../components/ModalList/Index';





const Main = () => {

    const dispatch = useDispatch()
    const cards = useSelector(getCards)
    
    useEffect(() => {
        dispatch(fetchMedical())
    }, [dispatch])

    const favoriteLocalStorage = (vendorСode) => {
        let array = JSON.parse(localStorage.getItem('favorites')) || []
        array = (array.includes(vendorСode) ? array.filter(el => el !== vendorСode) : array.concat(vendorСode))
        const favorites = JSON.stringify(array)
        localStorage.setItem('favorites', favorites)
    }

    const toggleFavorite = (vendorСode) => {
        const newArray = cards.map(el => {
            if (el.vendorСode === vendorСode) {
                el.isInfavorite = !el.isInfavorite
            }
            return el
        })

        favoriteLocalStorage(vendorСode)
        dispatch(updateCardsStore(newArray))

    }

    const addedLocalStorage = (vendorСode) => {
        let array = JSON.parse(localStorage.getItem('added')) || []
        array = (array.includes(vendorСode) ? array.filter(el => el !== vendorСode) : array.concat(vendorСode))
        const added = JSON.stringify(array)
        localStorage.setItem('added', added)
    }


    const toggleAdded = (vendorСode) => {
        const newArray = cards.map(el => {
            if (el.vendorСode === vendorСode) {
                el.added = !el.added
            }
            return el
        })

        addedLocalStorage(vendorСode)
        dispatch(updateCardsStore(newArray))
    }


    return (
        <div>
            <Header />
            <AppRoutes toggleAdded={toggleAdded} toggleFavorite={toggleFavorite} cards={cards} />
            <Footer />
            <ModalList toggleAdded={toggleAdded} />   
        </div>
    )
}

export default Main;



