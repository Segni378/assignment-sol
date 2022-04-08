
const initialState = {
    user:{},
    isLoading:false
}
const fetchUser =  (state=initialState, action) => {

    const {type, payload} = action;

    switch(type) {
        case 'FETCH-USER':
            return {isLoading:false,user:payload}
        case 'IS_LOADING':
            return {...state,isLoading:true}
        default: return state
    }
    
}

export default fetchUser;