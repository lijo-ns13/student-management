import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();
import connectDatabase from "./database";
import studentRoutes from "./routes/studentRoutes";
import { errorHandler } from "./middlewares/errorHandler";

import methodOverride from 'method-override';




// Use method-override for supporting HTTP verbs such as DELETE and PATCH


console.log("MONGO_URI:", process.env.MONGO_URI,process.env.PORT);
const app = express();
app.use(methodOverride('_method'));
// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set("view engine", "ejs");
app.set("views", "views");

// Connect Database
connectDatabase();

// Routes
app.use("/students", studentRoutes);

// Error Handling
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
