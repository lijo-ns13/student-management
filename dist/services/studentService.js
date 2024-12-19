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
exports.StudentService = void 0;
// src/services/studentService.ts
const student_1 = require("../models/student");
class StudentService {
    getAllStudents() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield student_1.Student.find({});
        });
    }
    getStudentById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield student_1.Student.findById(id);
        });
    }
    createStudent(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const newStudent = new student_1.Student(data);
            return yield newStudent.save();
        });
    }
    updateStudent(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield student_1.Student.findByIdAndUpdate(id, data, { new: true });
        });
    }
    deleteStudent(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield student_1.Student.findByIdAndDelete(id);
        });
    }
}
exports.StudentService = StudentService;
