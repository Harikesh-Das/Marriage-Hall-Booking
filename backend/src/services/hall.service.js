import {createHall,getAllHalls,getHallById} from "../repositories/hall.repo.js";
import ROLES from "../constants/roles.js";

const createHallService= async (data,user) => {
    const role= user.role
    if(role=== ROLES.OWNER || role=== ROLES.ADMIN){
        const owner_id=user.id;
        const name=data.name;
        const area=data.location;
        const address=data.location;
        const price_per_slot=data.price;
        const capacity = data.capacity;

        const createdHall= await createHall({name,area,address,price_per_slot,capacity,owner_id})

        return createdHall;
    }
    else{
        const error=new Error("You are not allowed to create halls");
        error.statusCode=403;
        throw error;
    }
}

const getHallDetails=async (id)=>{
    const retrievedHall= await getHallById(id);
    if(!retrievedHall){
        const error= new Error("Hall not found")
        throw error;

    }
    return retrievedHall;
}

const listHallService= async (query)=>{
    const location=query.location;
    const minPrice=query.minPrice;
    const maxPrice=query.maxPrice;
    const capacity=query.capacity;
    const allHalls=await getAllHalls(location,minPrice,maxPrice,capacity);
    return allHalls;

}

export {createHallService, getHallDetails, listHallService}