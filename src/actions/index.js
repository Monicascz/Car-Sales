export const ADD_FEAT = "ADD_FEAT"
export const CLEAR_FEAT ="CLEAR_FEAT"

export const addFeature = (id) => {
    return({type: ADD_FEAT, payload: id})
}

export const clearFeature = (id) =>{
    return({type: CLEAR_FEAT, payload:id})
}