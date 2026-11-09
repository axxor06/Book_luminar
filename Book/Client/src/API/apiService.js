import axiosInstance from "./axiosInstance";


const apiServices = async(httpMethod,url,reqBody,reqHeader) => {
    const reqConfig = {
        method:httpMethod,
        url,
        data:reqBody,
        headers:reqHeader  //we are using reqHeader field in the Headers field because any uploading content or file upload exists in the project we are using this field
    }
    try{
        const response = await axiosInstance(reqConfig)
        //console.log(response)
        return response
    }
    catch(err){
        console.log(err);
        throw err
    }
}


export default apiServices