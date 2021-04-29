export default (state, action) => {
    switch (action.type) {
        case 'DELETE_HENKILO':
        return {
            ...state,
            henkilot: state.henkilot.filter(henkilo => {
                return henkilo.id !== action.payload
            })
        }
        case 'ADD_HENKILO':
            return {
                ...state,
                henkilot: [action.payload, ...state.henkilot]
            }
        case 'EDIT_HENKILO':
            const updateHenkilo = action.payload

            const updateHenkilot = state.henkilot.map(henkilo => {
                if(henkilo.id === updateHenkilo.id) {
                    return updateHenkilo
                }
                return henkilo
            }) 
        
            return {
                ...state,
                henkilot: updateHenkilot
            }

        default:
            return state
    }
}