import { z} from "zod";

const createHallSchema=z.object({
name: z.string().min(3,"Hall name should be at least 3 characters."),
location: z.string().min(3,"Location name should be at least 3 characters."),
price: z.number().min(100, "The minimum price must at least 100 rupees."),
capacity: z.number().min(10, "The minimum capacity should be 10 people.")

});

const filterHallSchema=z. object({
location: z.string().min(3,"Location name should be at least 3 characters. ").optional(),
minPrice: z.coerce.number().min(100, "The minimum price must at least 100 rupees.").optional(),
maxPrice:z. coerce. number().optional(),
capacity: z.coerce.number().min(10, "The minimum capacity should be 10 people.").optional()
});
export {createHallSchema, filterHallSchema};