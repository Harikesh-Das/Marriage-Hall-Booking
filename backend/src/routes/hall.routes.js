import express from 'express';
import {createHall,getHalls,getHallById} from " .. /controllers/hall. controller. js";
import auth from " .. /middlewares/auth. js";
import authorize from ' .. /middlewares/role.js';
import ROLES from " .. /constants/roles. js";

const hallRoutes=express. Router();

hallRoutes.post("/",auth, authorize(ROLES.ADMIN, ROLES.OWNER) , createHall);
hallRoutes.get("/",getHalls);
hallRoutes.get("/: id",getHallById);

export default hallRoutes;