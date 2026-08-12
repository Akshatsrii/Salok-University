export interface Room {
  id: string;
  roomNumber: string;
  block: string;
  capacity: number;
  occupants: string[];
  type: 'AC' | 'NON_AC';
  status: 'AVAILABLE' | 'FULL' | 'MAINTENANCE';
}

export interface Complaint {
  id: string;
  studentId: string;
  roomId: string;
  category: 'PLUMBING' | 'ELECTRICAL' | 'CARPENTRY' | 'CLEANING' | 'OTHER';
  description: string;
  status: 'PENDING' | 'IN_PROGRESS' | 'RESOLVED';
  createdAt: string;
}

export interface GatePass {
  id: string;
  studentId: string;
  studentName: string;
  purpose: string;
  outTime: string;
  expectedInTime: string;
  status: 'PENDING' | 'APPROVED' | 'REJECTED' | 'EXPIRED';
}
