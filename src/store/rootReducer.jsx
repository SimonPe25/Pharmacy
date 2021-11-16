import { AGE, DELIVERY, IS_CLOSE_DELETE_FROM_CART, IS_CLOSE_FIRST_MODAL, IS_OPEN_DELETE_FROM_CART, IS_OPEN_FIRST_MODAL, LOADED, LOADING, MOBIL, NAME, SURNAME, UPDATE_CARDS, VENDORCODE } from "./types"

const initialState = {
  cards: [],
  isOpenFirst: false,
  isOpenDeleteFromCart: false,
  isLoading: false,
  vendorCode: "",
  values: {
    name: '',
    surname: '',
    age: '',
    delivery: '',
    mobil: ''
  }
}

const rootReducer = (state = initialState, action) => { 
  switch (action.type) {
    case UPDATE_CARDS:
      return { ...state, cards: action.payload.cards }
    case VENDORCODE:
      return { ...state, vendorCode: action.payload }
    case LOADING:
      return { ...state, isLoading: true }
    case LOADED:
      return { ...state, isLoading: false }
    case IS_OPEN_FIRST_MODAL:
      return { ...state, isOpenFirst: action.payload }
    case IS_CLOSE_FIRST_MODAL:
      return { ...state, isOpenFirst: action.payload }
    case IS_OPEN_DELETE_FROM_CART:
      return { ...state, isOpenDeleteFromCart: action.payload }
    case IS_CLOSE_DELETE_FROM_CART:
      return { ...state, isOpenDeleteFromCart: action.payload }
    case NAME:
      return {
        ...state,
        values: {
          ...state.values,
          name: action.payload
        }
      }
    case SURNAME:
      return {
        ...state,
        values: {
          ...state.values,
          surname: action.payload
        }
      }
    case AGE:
      return {
        ...state,
        values: {
          ...state.values,
          age: action.payload
        }
      }
    case DELIVERY:
      return {
        ...state,
        values: {
          ...state.values,
          delivery: action.payload
        }
      }
    case MOBIL:
      return {
        ...state,
        values: {
          ...state.values,
          mobil: action.payload
        }
      }
    default:
      return state
  }
}

export default rootReducer;