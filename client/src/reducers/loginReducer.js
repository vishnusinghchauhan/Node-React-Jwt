import {userService} from "../services/authentication.service";
const initialState = {
	error: false,
	loggedIn: false,
}
const rootReducer = (currentState = initialState, action) => {
	console.log("actionactionaction",action)
    switch (action.type) {
    	case 'LOGIN_SUCCESS':
	  	return {
	  		...currentState, error: false, loggedIn:true
	  	};
	  	case 'LOGIN_FAILED':
	  	return {
	  		...currentState, error: true,  loggedIn:false
	  	};
	  	case 'LOGOUT_SUCCESS':
		return {
		  	...currentState, error: false, loggedIn:false
		};
	  	case 'GET_AUTH':
		return {
		  	...currentState, loggedIn: userService.loggedIn()
		}
        default:
            return currentState
    }
}
export default rootReducer;