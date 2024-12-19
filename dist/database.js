"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config(); // Load environment variables from .env
const connectDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    const mongoURI = process.env.MONGO_URI; // Fetch the MongoDB URI from environment variables
    if (!mongoURI) {
        console.error("MONGO_URI is not defined in the .env file");
        process.exit(1); // Exit the process if the URI is not provided
    }
    try {
        yield mongoose_1.default.connect(mongoURI); // No need to pass additional options
        console.log("MongoDB connected successfully");
    }
    catch (error) {
        console.error("Database connection failed:", error);
        process.exit(1); // Exit the process if the connection fails
    }
});
exports.default = connectDatabase;
