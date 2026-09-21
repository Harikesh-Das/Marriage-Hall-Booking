import apiResponse from "../utils/apiResponse.js";

const notFound= (req,res)=>{
    return apiResponse.errorHelp(res,404,'Route not found')
}

export default notFound;