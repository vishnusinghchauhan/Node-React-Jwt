import axios from "axios";
import history from '../history'
import { userService } from "../services/authentication.service";
import setAuthToken from "../utils/setAuthToken";

export const register = (regObj) => {
    console.log("register action", regObj)
    return (dispatch) => {
        return axios.post("/api/signup", regObj).then((res) => {
            console.log("register response ", res);
            history.push('/login');
        });
    }
}


export const login = (loginData) => {
    return (dispatch) => {
        return axios.post("/api/login", loginData).then((res) => {
            console.log("loginData response ", res.data);
            userService.setToken(res.data);
            dispatch({
                type:'LOGIN_SUCCESS',
                payload:res.data
            })
            setAuthToken(res.data.token);
            history.push('/dashboard');
        }).catch((err)=>{
            console.log("Err is ", err)
            dispatch({
                type:'LOGIN_FAILED',
            })
            history.push('/login');
        });
    }
}


export const logout = () => {
    return (dispatch) => {
        userService.logout();
        history.push('/login');
        dispatch({
            type:'LOGOUT_SUCCESS'
        })
    }
}


export const fetchUserData = (data) => {
    return (dispatch) => {
        var user = localStorage.getItem('loggedIn_email')
        return axios.get("/api/me/" + user).then((res) => {
            console.log("fetchUserData response ", res);
        });
    }
}