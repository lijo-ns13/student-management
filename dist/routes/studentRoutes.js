"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/studentRoutes.ts
const express_1 = __importDefault(require("express"));
const studentController_1 = require("../controllers/studentController");
const studentService_1 = require("../services/studentService");
const router = express_1.default.Router();
// Instantiate the StudentService and StudentController
const studentService = new studentService_1.StudentService();
const studentController = new studentController_1.StudentController(studentService);
// Wrapper function for async handling
const asyncHandler = (fn) => {
    return (req, res, next) => {
        Promise.resolve(fn(req, res, next)).catch(next);
    };
};
router.get("/", asyncHandler(studentController.getAllStudents.bind(studentController)));
router.get("/:id", asyncHandler(studentController.getStudentById.bind(studentController)));
router.post("/", asyncHandler(studentController.createStudent.bind(studentController)));
router.patch("/:id", asyncHandler(studentController.updateStudent.bind(studentController)));
router.delete("/:id", asyncHandler(studentController.deleteStudent.bind(studentController)));
exports.default = router;
