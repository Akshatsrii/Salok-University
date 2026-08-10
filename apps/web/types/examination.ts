export interface ExamSchedule {
  id: string;
  course: string;
  subject: string;
  date: string;
  time: string;
  room: string;
}

export interface HallTicketEligibility {
  studentId: string;
  name: string;
  rollNo: string;
  attendance: number;
  feeDues: number;
  eligible: boolean;
}

export interface StudentResult {
  studentId: string;
  name: string;
  course: string;
  sgpa: number;
  cgpa: number;
  hasBacklog: boolean;
  status: 'Pass' | 'Fail';
}
