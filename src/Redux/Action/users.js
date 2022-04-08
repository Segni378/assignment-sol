import axios from 'axios'
import {allUsers} from './types';

export const getUsers = () => async (dispatch) => {
    
    try{

        const { data } = await axios.get("https://reqres.in/api/users");
        dispatch({type: allUsers, payload: data })
        
    }
    catch(error) {
        console.log(error.message);
    }

}
