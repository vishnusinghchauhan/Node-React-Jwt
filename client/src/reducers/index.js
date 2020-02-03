import { combineReducers } from 'redux'
import login from "./loginReducer";

const rootReducer = combineReducers({  
	login: login
})

export default rootReducer