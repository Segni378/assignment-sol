import {combineReducers} from 'redux'
import user from "./getsingleUser"
import users from './users'

export default combineReducers ({

    user,
    users
})