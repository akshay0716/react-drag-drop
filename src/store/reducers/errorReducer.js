import { GET_ERRORS } from "../types";

const initialState = {
    errors : {}
}


export default function( state = initialState, action ){
    switch( action.type){
        case GET_ERRORS:
            return {
                errors : action.payload
            }
        default :
            return state
    }
}