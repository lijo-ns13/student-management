export interface CreateStudentRequest {
    name: string;
    age: number;
    grade: string;
  }
  
  export interface UpdateStudentRequest {
    id: string;
    name?: string;
    age?: number;
    grade?: string;
  }
  