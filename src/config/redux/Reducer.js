import {combineReducers} from 'redux'
import Constants from 'expo-constants'

const stateGlobal = {
    isLoading:false,
    isDisabled:true,
    isNotif:'',
    tipeNotif:''
}

const stateConfig = {
    endpoint:Constants.manifest.extra.endpoint
}

const configReducer = (state = stateConfig, action) => {
    return state
}

const globalReducer = (state = stateGlobal, action) => {
    if(action.type === 'SET_ISLOADING') {
        return {
            ...state,
            isLoading:action.value
        }
    }
    if(action.type === 'SET_ISDISABLED') {
        return {
            ...state,
            isDisabled:action.value
        }
    }
    if(action.type === 'SET_ISNOTIF') {
        return {
            ...state,
            isNotif:action.value,
            tipeNotif:action.tipe
        }
    }
    if(action.type === 'RESET_NOTIF') {
        state = stateGlobal
    }
    return state
}

const reducer = combineReducers({
    configReducer,
    globalReducer
})

export default reducer