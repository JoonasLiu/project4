import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

//Initial State
const initialState = {
    henkilot: []
}

//Tehdään Context
export const GlobalContext = createContext(initialState)

//Provider komponentti
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

//Toimintoja
const deleteHenkilo = (id) => {
    dispatch({
        type: 'DELETE_HENKILO',
        payload: id
    })
}

const addHenkilo = (henkilo) => {
    dispatch({
        type: 'ADD_HENKILO',
        payload: henkilo
    })
}

const editHenkilo = (henkilo) => {
    dispatch({
        type: 'EDIT_HENKILO',
        payload: henkilo
    })
}

    return (
        <GlobalContext.Provider value={{
            henkilot: state.henkilot,
            deleteHenkilo,
            addHenkilo,
            editHenkilo
        }}>
            {children}
        </GlobalContext.Provider>
    )
}