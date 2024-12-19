// src/routes/studentRoutes.ts
import express from "express";
import { StudentController } from "../controllers/studentController";
import { StudentService } from "../services/studentService";

const router = express.Router();

// Instantiate the StudentService and StudentController
const studentService = new StudentService();
const studentController = new StudentController(studentService);

// Wrapper function for async handling
const asyncHandler = (fn: any) => {
  return (req: express.Request, res: express.Response, next: express.NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};

router.get("/", asyncHandler(studentController.getAllStudents.bind(studentController)));
router.get("/:id", asyncHandler(studentController.getStudentById.bind(studentController)));
router.post("/", asyncHandler(studentController.createStudent.bind(studentController)));
router.patch("/:id", asyncHandler(studentController.updateStudent.bind(studentController)));
router.delete("/:id", asyncHandler(studentController.deleteStudent.bind(studentController)));

export default router;

