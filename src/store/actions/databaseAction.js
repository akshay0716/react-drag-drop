import axios from 'axios';
import  { GET_NEW_LEADS, GET_CONTACT_LEADS, GET_QUALIFIED_LEADS } from '../types';

export const get_new_leads = () => async dispatch => {
    try{
        let allData = await axios.get('http://localhost:3000/customer/');
        if( allData.data ){
            let AllData = allData.data;
            let allNewLeads = AllData.filter( ( data ) => ( data.state === 'New Leads' )   );
            let allContactedLeads = AllData.filter( data => (data.state === 'Contacted') );
            let allQualifiedLeads = AllData.filter( data => ( data.state === 'Qualified' ) );
            dispatch({
                type : GET_NEW_LEADS,
                payload : allNewLeads
            });
            dispatch({
                type :GET_CONTACT_LEADS,
                payload : allContactedLeads
            });
            dispatch({
                type : GET_QUALIFIED_LEADS,
                payload : allQualifiedLeads
            })
        }
    } catch ( err ){
        console.log( err );
    }
}

export const get_the_data_changes = ( formData, id ) => async dispatch => {
    console.log("adsa");
    let data = await axios.patch(`http://localhost:3000/customer/${id}`, formData);
    if( data.data ){
        console.log( data );
        dispatch(get_new_leads())
    }
}