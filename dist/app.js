"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const database_1 = __importDefault(require("./database"));
const studentRoutes_1 = __importDefault(require("./routes/studentRoutes"));
const errorHandler_1 = require("./middlewares/errorHandler");
const method_override_1 = __importDefault(require("method-override"));
// Use method-override for supporting HTTP verbs such as DELETE and PATCH
console.log("MONGO_URI:", process.env.MONGO_URI, process.env.PORT);
const app = (0, express_1.default)();
app.use((0, method_override_1.default)('_method'));
// Middleware
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.set("view engine", "ejs");
app.set("views", "views");
// Connect Database
(0, database_1.default)();
// Routes
app.use("/students", studentRoutes_1.default);
// Error Handling
app.use(errorHandler_1.errorHandler);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
