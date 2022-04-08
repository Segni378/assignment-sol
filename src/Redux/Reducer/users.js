const fetchUsers =  (state=[], action) => {

    const {type, payload} = action;

    switch(type) {
        case 'FETCH-ALL-USERS':
            return payload
        default: return state
    }
    
}

export default fetchUsers;