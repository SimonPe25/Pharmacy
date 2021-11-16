import getMedicCards from "../api/getMedicCards"
import { AGE, DELIVERY, ERRORS, IS_CLOSE_DELETE_FROM_CART, IS_CLOSE_FIRST_MODAL, IS_OPEN_DELETE_FROM_CART, IS_OPEN_FIRST_MODAL, LOADED, LOADING,  MOBIL, NAME,  SURNAME, UPDATE_CARDS, VENDORCODE } from "./types"


export const modalFirstOpen = (data) => {
    return { type: IS_OPEN_FIRST_MODAL, payload: data }
}

export const vendorCodePrime = (data) => {
    return { type: VENDORCODE, payload: data }
}

export const modalFirstClose = (data) => {
    return { type: IS_CLOSE_FIRST_MODAL, payload: data }
}

export const modalCartOpen = (data) => {
    return { type: IS_OPEN_DELETE_FROM_CART, payload: data }
}
export const modalCartClose = (data) => {
    return { type: IS_CLOSE_DELETE_FROM_CART, payload: data }
}

export const updateCardsStore = cards => {
    return { type: UPDATE_CARDS, payload: { cards } }
}

export const fetchMedical = () => (dispatch) => {

    dispatch({ type: LOADING })
    getMedicCards().then(res => {
        const normalizeArray = normalizeData(res.data);
        dispatch({ type: UPDATE_CARDS, payload: { cards: normalizeArray } })
    })

    const normalizeData = (data) => {
        return data.map(cardPlus => {
            const favorites = JSON.parse(localStorage.getItem('favorites')) || []
            const added = JSON.parse(localStorage.getItem('added')) || []
            const isOpenModal = JSON.parse(localStorage.getItem('isOpenModal')) || []

            cardPlus.isInfavorite = favorites.includes(cardPlus.vendorСode)
            cardPlus.added = added.includes(cardPlus.vendorСode)
            cardPlus.isOpenModal = isOpenModal.includes(cardPlus.vendorСode)
            return cardPlus
        })
    }
    dispatch({ type: LOADED })
}

export const dataErrors = (data) => {
    return { type: ERRORS, payload: data }
}
export const dataName = (data) => {
    return { type: NAME, payload: data }
}
export const dataSurname = (data) => {
    return { type: SURNAME, payload: data }
}
export const dataAge = (data) => {
    return { type: AGE, payload: data }
}
export const dataDelivery = (data) => {
    return { type: DELIVERY, payload: data }
}
export const dataMobil = (data) => {
    return { type: MOBIL, payload: data }
}








