import { asyncHandler } from " .. /utils/asyncHandler. js";
import apiResponse from " .. /utils/apiResponse.js";
import { createHallSchema, filterHallSchema } from " .. /validators/hall.validators. js";
import { createHallService, getHallDetails, listHallsService } from " .. /services/hall.service. js";

const createHall = asyncHandler(async (req, res) => {
    const data = createHallSchema.parse(req.body);
    const user = req.user;
    const createdHall = await createHallService(data, user);
    const statusCode = 201;
    const message = "Hall Created Successfully";
    return apiResponse.successHelp(res, statusCode, message, createdHall);
});

const getHalls = asyncHandler(async (req, res) => {
    const query = filterHallSchema.parse(req.query);
    const retrievedHalls = await listHallsService(query);
    const statusCode = 200;
    const message = "Halls retrieved successfully";
    return apiResponse.successHelp(res, statusCode, message, retrievedHalls);
});

const getHallById = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const retrievedHall = await getHallDetails(id);
    const statusCode = 200;
    const message = "Hall retrieved successfully";
    return apiResponse.successHelp(res, statusCode, message, retrievedHall);
});

export { createHall, getHalls, getHallById };