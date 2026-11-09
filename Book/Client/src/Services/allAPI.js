import apiServices from "../API/apiService";


//RegisterAPI: called by auth component when register button is clicked
export const registerAPI = async(userData) => {
    return await apiServices('POST','/register',userData)
}


//LoginAPI: called by auth component when login button is clicked
export const loginAPI = async(userData) => {
    return await apiServices('POST','/login',userData)
}

//googleLoginAPI: called by auth component when googlelogin button is clicked
export const googleLoginAPI = async(userData) => {
    return await apiServices('POST','/google-login',userData)
}