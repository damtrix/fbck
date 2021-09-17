import { combineReducers } from 'redux'

import welcomeDataReducer from './welcomeData/welcomeData.reducer'


const rootReducer = combineReducers({
    welcome: welcomeDataReducer
})

export default rootReducer