export const ADD_FEAT = "ADD_FEAT"

export const addFeature = (id) => {
    return({type: ADD_FEAT, payload: id})
}