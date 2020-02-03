import decode from 'jwt-decode';


export const userService = {
    loggedIn:loggedIn,
    setToken:setToken,
    isTokenExpired:isTokenExpired,
    getToken:getToken,
    logout:logout,
};

function loggedIn() {
    const token = this.getToken()
    return !!token && !this.isTokenExpired(token)
}

function isTokenExpired(token) {
        try {
            const decoded = decode(token);
            if (decoded.exp < Date.now() / 1000) { // Checking if token is expired.
                return true;
            }
            else
                return false;
        }
        catch (err) {
            console.log("expired check failed! Line 42: AuthService.js");
            return false;
        }
    }

function setToken(logginobj) {
    localStorage.setItem('id_token', logginobj.token)
    localStorage.setItem('loggedIn_email', logginobj.user.email)
}

function getToken() {
    return localStorage.getItem('id_token')
}

function logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('loggedIn_email');
}
