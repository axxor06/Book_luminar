import axios from 'axios'


const axiosInstance = axios.create({
    baseURL:'http://localhost:3000',
    timeout: 10000
})


//response interceptors: handling global/common errors
// // any restrictions for our code or the normal flow of our project has happened it should mention using interceptors
axios.interceptors.response.use(
    (response) => {
        console.log("Message Received!!!");
        return response
    },

    (error) => {
        if(error.response) {
            const status = error.response.status
            if(status==401){
                console.log("Unauthorized Access - Redirect to Login Page");
            }
            else if(status==404){
                console.log("API Not Found")
            }
            else if(status==500){
                console.log("Server Error!!!r")
            }
            else if(error.request){
                console.log("Client Error")
                return error.request
                // console.log("No response from the server")
            }
            else{
                console.log("Error: " + error.message)
            }
            return Promise.reject(error)
        }
    }
)



export default axiosInstance