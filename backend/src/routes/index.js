import { Router } from 'express';
import apiResponse from ' .. /utils/apiResponse. js';
import pool from ' .. /config/db. js';
import authRoutes from './auth.routes.js';
import hallRoutes from './hall.routes.js';

const router = Router();

router.get('/health', async (req, res) => {
    try {
        const result = await pool.query("SELECT current_database()");
        const data = {
            api: "ok",
            db: "ok",
            database: result.rows[0].current_database
        }

        return apiResponse.successHelp(res, 200, "All running", data);

    } catch (error) {
        return apiResponse.errorHelp(res, 500, "API working but DB not connected", { dbError: error.message })
    }

});

router.use("/auth",authRoutes);
router.use("/halls", hallRoutes);

export default router;