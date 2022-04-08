import axios from 'axios'
import {singleUser} from './types';

export  const getUser = (id) => async (dispatch) => {
    
    try{
        
        dispatch({type: "IS_LOADING"})
        const { data } = await axios.get(`https://reqres.in/api/user/${id}`);
        dispatch({type: singleUser, payload: data })
        
    }
    catch(error) {
        console.log(error.message);
    }

}