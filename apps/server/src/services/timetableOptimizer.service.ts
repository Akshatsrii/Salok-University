import { Timetable, ITimetable } from '../models/Timetable';

export interface Conflict {
  type: 'TeacherDoubleBooked' | 'RoomDoubleBooked';
  message: string;
  slotInfo: { day: string; startTime: string; endTime: string };
  entities: any;
}

export class TimetableOptimizerService {
  /**
   * Mock implementation of an AI optimizer.
   * It takes a proposed timetable entry and checks against existing entries for conflicts.
   */
  static async checkConflicts(proposedEntry: Partial<ITimetable>): Promise<Conflict[]> {
    const conflicts: Conflict[] = [];
    const { tenantId, teacherId, roomId, dayOfWeek, startTime } = proposedEntry;

    // Check Room Conflict
    const roomConflict = await Timetable.findOne({
      tenantId,
      roomId,
      dayOfWeek,
      startTime
    });

    if (roomConflict) {
      conflicts.push({
        type: 'RoomDoubleBooked',
        message: `Room ${roomId} is already booked for another course at this time.`,
        slotInfo: { day: dayOfWeek as string, startTime: startTime as string, endTime: roomConflict.endTime },
        entities: { roomId, existingCourse: roomConflict.courseId }
      });
    }

    // Check Teacher Conflict
    const teacherConflict = await Timetable.findOne({
      tenantId,
      teacherId,
      dayOfWeek,
      startTime
    });

    if (teacherConflict) {
      conflicts.push({
        type: 'TeacherDoubleBooked',
        message: `The assigned teacher is already taking another class at this time.`,
        slotInfo: { day: dayOfWeek as string, startTime: startTime as string, endTime: teacherConflict.endTime },
        entities: { teacherId, existingCourse: teacherConflict.courseId }
      });
    }

    return conflicts;
  }

  /**
   * Mock generation of a schedule.
   * In a real scenario, this would use genetic algorithms or constraint satisfaction programming.
   */
  static async optimizeSchedule(tenantId: string, courseId: string) {
    // Stub implementation returning a success message
    return {
      success: true,
      message: 'AI Optimizer generated an optimal schedule for the course with 0 conflicts.',
    };
  }
}
