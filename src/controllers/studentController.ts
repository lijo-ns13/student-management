// src/controllers/studentController.ts
import { Request, Response } from "express";
import { StudentService } from "../services/studentService";

export class StudentController {
  private studentService: StudentService;

  constructor(studentService: StudentService) {
    this.studentService = studentService;
  }

  async getAllStudents(req: Request, res: Response) {
    try {
      const students = await this.studentService.getAllStudents();
      res.render("students/list", { students }); // Render list.ejs with students data
    } catch (error) {
      res.status(500).json({ message: "Error fetching students", error: error });
    }
  }

  async getStudentById(req: Request, res: Response) {
    try {
      const student = await this.studentService.getStudentById(req.params.id);
      if (!student) {
        return res.status(404).json({ message: "Student not found" });
      }
      res.render("students/details", { student }); // Render details.ejs with student data
    } catch (error) {
      res.status(500).json({ message: "Error fetching student", error: error });
    }
  }

  async createStudent(req: Request, res: Response) {
    try {
      const student = await this.studentService.createStudent(req.body);
    //   res.status(201).json(student); // After creation, redirect to the list or show success message
    res.redirect('/students')
    } catch (error) {
      res.status(500).json({ message: "Error creating student", error: error });
    }
  }

  async updateStudent(req: Request, res: Response) {
    try {
      const student = await this.studentService.updateStudent(req.params.id, req.body);
      if (!student) {
        return res.status(404).json({ message: "Student not found" });
      }
      res.redirect("/students"); // Redirect to the students list after update
    } catch (error) {
      res.status(500).json({ message: "Error updating student", error: error });
    }
  }

  async deleteStudent(req: Request, res: Response) {
    try {
      const student = await this.studentService.deleteStudent(req.params.id);
      if (!student) {
        return res.status(404).json({ message: "Student not found" });
      }
      res.redirect("/students"); // Redirect to the students list after deletion
    } catch (error) {
      res.status(500).json({ message: "Error deleting student", error: error });
    }
  }
}

