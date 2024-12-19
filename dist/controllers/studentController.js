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
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentController = void 0;
class StudentController {
    constructor(studentService) {
        this.studentService = studentService;
    }
    getAllStudents(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const students = yield this.studentService.getAllStudents();
                res.render("students/list", { students }); // Render list.ejs with students data
            }
            catch (error) {
                res.status(500).json({ message: "Error fetching students", error: error });
            }
        });
    }
    getStudentById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const student = yield this.studentService.getStudentById(req.params.id);
                if (!student) {
                    return res.status(404).json({ message: "Student not found" });
                }
                res.render("students/details", { student }); // Render details.ejs with student data
            }
            catch (error) {
                res.status(500).json({ message: "Error fetching student", error: error });
            }
        });
    }
    createStudent(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const student = yield this.studentService.createStudent(req.body);
                //   res.status(201).json(student); // After creation, redirect to the list or show success message
                res.redirect('/students');
            }
            catch (error) {
                res.status(500).json({ message: "Error creating student", error: error });
            }
        });
    }
    updateStudent(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const student = yield this.studentService.updateStudent(req.params.id, req.body);
                if (!student) {
                    return res.status(404).json({ message: "Student not found" });
                }
                res.redirect("/students"); // Redirect to the students list after update
            }
            catch (error) {
                res.status(500).json({ message: "Error updating student", error: error });
            }
        });
    }
    deleteStudent(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const student = yield this.studentService.deleteStudent(req.params.id);
                if (!student) {
                    return res.status(404).json({ message: "Student not found" });
                }
                res.redirect("/students"); // Redirect to the students list after deletion
            }
            catch (error) {
                res.status(500).json({ message: "Error deleting student", error: error });
            }
        });
    }
}
exports.StudentController = StudentController;
