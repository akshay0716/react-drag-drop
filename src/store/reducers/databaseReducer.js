import { GET_CONTACT_LEADS, GET_QUALIFIED_LEADS, GET_NEW_LEADS } from "../types";

const initialState = {
    newLeads:[],
    contactedLeads:[],
    qualifiedLeads:[]
}

export default function( state = initialState, action ){
    switch( action.type ){
        case GET_NEW_LEADS : 
            return {
                ...state,
                newLeads: action.payload
            }
        case GET_CONTACT_LEADS : 
            return {
                ...state ,
                contactedLeads : action.payload
            }
        case GET_QUALIFIED_LEADS : 
            return {
                ...state ,
                qualifiedLeads : action.payload
            }
        default :
            return state
    }
}