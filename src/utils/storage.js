export default{
    setUserDetails(user){
       return localStorage.setItem('user',JSON.stringify(user));
    },
    getUserDetails(){
        return JSON.parse(localStorage.getItem('user'))
    },
    // user token
    setToken(token){
        return localStorage.setItem('token',token);
    },
    getToken(){
        return localStorage.getItem('token')
    }
}