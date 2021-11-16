import rootReducer from './rootReducer.jsx';
import { IS_CLOSE_FIRST_MODAL, IS_OPEN_FIRST_MODAL, LOADED, LOADING, UPDATE_CARDS, VENDORCODE } from './types.jsx';

describe("Testing reducer UPDATE_CARDS", ()=>{

    const initialState = {
        cards: [],
        isOpenFirst: false,
        isOpenDeleteFromCart: false,
        isLoading: false,
        vendorCode: '',
        values: {
          name: '',
          surname: '',
          age: '',
          delivery: '',
          mobil: ''
        }   
      }
    test("UPDATE_CARDS toggle cards", ()=>{  
        const testCards = [{id:1, name: "Cards1"}, {id:2, name: "Cards2"}]
        const action = {
            type: UPDATE_CARDS, 
            payload: {cards: testCards}
        }
        const newState = rootReducer(initialState, action)
        expect(newState.cards).toEqual(testCards)
    })
    test("VENDORCODE to get vendorecode", ()=>{  
        const action = {
            type: VENDORCODE, 
            payload: 5566
        }
        const newState = rootReducer(initialState, action)
        expect(newState.vendorCode).toBe(5566)
    })   
    test("LOADING toggle isLoading in cards", ()=>{
        
        const action = {
            type: LOADING, 
            payload: true
        }
        const newState = rootReducer(initialState, action)
        expect(newState.isLoading).toBe(action.payload)
    })
    test("LOADED cards ", ()=>{
        
        const action = {
            type: LOADED, 
            payload: false
        }
        const newState = rootReducer(initialState, action)
        expect(newState.isLoading).toBe(action.payload)
    })
    test("IS_OPEN_FIRST_MODAL is open Modal", ()=>{
        
        const action = {
            type: IS_OPEN_FIRST_MODAL, 
            payload: true
        }
        const newState = rootReducer(initialState, action)
        expect(newState.isOpenFirst).toBe(action.payload)
    })
    test("IS_OPEN_CLOSE_MODAL is close Modal", ()=>{
        
        const action = {
            type: IS_CLOSE_FIRST_MODAL, 
            payload: false
        }
        const newState = rootReducer(initialState, action)
        expect(newState.isOpenFirst).toBe(action.payload)
    })
})
