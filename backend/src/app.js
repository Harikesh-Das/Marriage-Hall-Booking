import express from 'express';
import cors from 'cors';
import userRoutes from './routes/index. js';
import notFound from './middlewares/notFound. js'
import errorHandler from './middlewares/errorHandler.js';

const app= express();

//Request Processing Middlewares
app. use(express. json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

//Routes
app.use("/api",userRoutes);

// Error Handling Middlewares
app.use(notFound);
app.use(errorHandler);

export default app;