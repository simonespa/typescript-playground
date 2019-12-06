export interface Name {
  firstName: string;
  lastName: string;
}

export abstract class Person {
  readonly fullName: Name;

  constructor(fullName: Name) {
    this.fullName = fullName;
  }

  getFullName(): Name {
    return this.fullName;
  }
}

export class Student extends Person {
  readonly studentId: string;

  constructor(fullName: Name, studentId: string) {
    super(fullName);
    this.studentId = studentId;
  }

  getStudentId(): string {
    return this.studentId;
  }
}