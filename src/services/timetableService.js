import { apiRequest } from "./api";

// --- Types ---
export type DayOfWeek =
  | "monday" | "tuesday" | "wednesday"
  | "thursday" | "friday" | "saturday" | "sunday";

export type TimetableStatus = "active" | "inactive" | "draft" | "archived";
export type RecurrenceType = "none" | "daily" | "weekly" | "biweekly" | "monthly";
export type TimetableView = "day" | "week" | "month" | "semester";
export type SortOrder = "asc" | "desc";

export interface TimeSlot {
  id: string | number;
  day: DayOfWeek;
  startTime: string;   // "HH:mm"
  endTime: string;     // "HH:mm"
  subject: string;
  teacherId?: string | number;
  teacherName?: string;
  roomNumber?: string;
  classGroup?: string;
  color?: string;      // Hex color for UI display
  notes?: string;
  recurrence?: RecurrenceType;
  [key: string]: unknown;
}

export interface Timetable {
  id: string | number;
  title: string;
  description?: string;
  status: TimetableStatus;
  academicYear?: string;
  semester?: string;
  effectiveFrom?: string;   // ISO date
  effectiveTo?: string;     // ISO date
  slots: TimeSlot[];
  createdAt?: string;
  updatedAt?: string;
  [key: string]: unknown;
}

export interface TimetableFilters {
  status?: TimetableStatus;
  day?: DayOfWeek;
  teacherId?: string | number;
  classGroup?: string;
  roomNumber?: string;
  subject?: string;
  academicYear?: string;
  semester?: string;
  startDate?: string;
  endDate?: string;
  view?: TimetableView;
  sortBy?: "createdAt" | "updatedAt" | "title" | "effectiveFrom";
  order?: SortOrder;
  search?: string;
  page?: number;
  limit?: number;
}

export interface ConflictCheckResult {
  hasConflict: boolean;
  conflicts: Array<{
    slotId: string | number;
    reason: string;
    conflictingSlot: Partial<TimeSlot>;
  }>;
}

export interface TimetableStats {
  totalSlots: number;
  byDay: Record<DayOfWeek, number>;
  bySubject: Record<string, number>;
  byTeacher: Record<string, number>;
  byRoom: Record<string, number>;
  peakHours: string[];
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
}

// --- Helpers ---
const buildQueryString = (filters: TimetableFilters): string => {
  const params = new URLSearchParams();
  Object.entries(filters).forEach(([key, value]) => {
    if (value === undefined || value === null) return;
    if (Array.isArray(value)) {
      value.forEach((v) => params.append(key, String(v)));
    } else {
      params.append(key, String(value));
    }
  });
  const query = params.toString();
  return query ? `?${query}` : "";
};

const parseTime = (time: string): number => {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
};

const validateTimeSlot = (slot: Partial<TimeSlot>): void => {
  if (!slot.subject?.trim()) throw new Error("Subject is required.");
  if (!slot.day) throw new Error("Day is required.");

  if (slot.startTime && slot.endTime) {
    const start = parseTime(slot.startTime);
    const end = parseTime(slot.endTime);
    if (!/^\d{2}:\d{2}$/.test(slot.startTime)) {
      throw new Error("Start time must be in HH:mm format.");
    }
    if (!/^\d{2}:\d{2}$/.test(slot.endTime)) {
      throw new Error("End time must be in HH:mm format.");
    }
    if (start >= end) {
      throw new Error("Start time must be before end time.");
    }
  }
};

const validateTimetablePayload = (data: Partial<Timetable>): void => {
  if (data.title !== undefined && !data.title.trim()) {
    throw new Error("Timetable title cannot be empty.");
  }
  if (
    data.effectiveFrom &&
    data.effectiveTo &&
    new Date(data.effectiveFrom) >= new Date(data.effectiveTo)
  ) {
    throw new Error("effectiveFrom must be before effectiveTo.");
  }
};

// --- Timetable API ---

/**
 * Fetch all timetables with optional filters and pagination.
 * @example getTimetables({ status: "active", semester: "Fall 2024", page: 1 })
 */
export const getTimetables = (
  filters: TimetableFilters = {}
): Promise<PaginatedResponse<Timetable>> => {
  const query = buildQueryString(filters);
  return apiRequest(`/timetable${query}`);
};

/**
 * Fetch a single timetable by ID.
 */
export const getTimetableById = (
  id: Timetable["id"]
): Promise<ApiResponse<Timetable>> => {
  if (!id) throw new Error("Timetable ID is required.");
  return apiRequest(`/timetable/${id}`);
};

/**
 * Fetch the timetable for a specific day of the week.
 * @example getTimetableByDay("monday")
 */
export const getTimetableByDay = (
  day: DayOfWeek,
  filters: Omit<TimetableFilters, "day"> = {}
): Promise<ApiResponse<TimeSlot[]>> => {
  if (!day) throw new Error("Day is required.");
  const query = buildQueryString({ ...filters, day });
  return apiRequest(`/timetable/day${query}`);
};

/**
 * Fetch the timetable for a specific teacher.
 */
export const getTimetableByTeacher = (
  teacherId: string | number,
  filters: TimetableFilters = {}
): Promise<ApiResponse<TimeSlot[]>> => {
  if (!teacherId) throw new Error("Teacher ID is required.");
  const query = buildQueryString(filters);
  return apiRequest(`/timetable/teacher/${teacherId}${query}`);
};

/**
 * Fetch the timetable for a specific class group.
 */
export const getTimetableByClass = (
  classGroup: string,
  filters: TimetableFilters = {}
): Promise<ApiResponse<TimeSlot[]>> => {
  if (!classGroup?.trim()) throw new Error("Class group is required.");
  const query = buildQueryString(filters);
  return apiRequest(`/timetable/class/${encodeURIComponent(classGroup)}${query}`);
};

/**
 * Fetch the timetable for a specific room.
 */
export const getTimetableByRoom = (
  roomNumber: string,
  filters: TimetableFilters = {}
): Promise<ApiResponse<TimeSlot[]>> => {
  if (!roomNumber?.trim()) throw new Error("Room number is required.");
  const query = buildQueryString(filters);
  return apiRequest(`/timetable/room/${encodeURIComponent(roomNumber)}${query}`);
};

/**
 * Create a new timetable.
 */
export const createTimetable = (
  data: Omit<Timetable, "id" | "createdAt" | "updatedAt">
): Promise<ApiResponse<Timetable>> => {
  if (!data?.title?.trim()) throw new Error("Timetable title is required.");
  validateTimetablePayload(data);
  return apiRequest("/timetable", "POST", {
    ...data,
    title: data.title.trim(),
    description: data.description?.trim(),
  });
};

/**
 * Fully update an existing timetable.
 */
export const updateTimetable = (
  id: Timetable["id"],
  data: Partial<Omit<Timetable, "id" | "createdAt">>
): Promise<ApiResponse<Timetable>> => {
  if (!id) throw new Error("Timetable ID is required.");
  validateTimetablePayload(data);
  return apiRequest(`/timetable/${id}`, "PUT", data);
};

/**
 * Partially update a timetable.
 */
export const patchTimetable = (
  id: Timetable["id"],
  data: Partial<Omit<Timetable, "id" | "createdAt">>
): Promise<ApiResponse<Timetable>> => {
  if (!id) throw new Error("Timetable ID is required.");
  validateTimetablePayload(data);
  return apiRequest(`/timetable/${id}`, "PATCH", data);
};

/**
 * Update only the status of a timetable.
 */
export const updateTimetableStatus = (
  id: Timetable["id"],
  status: TimetableStatus
): Promise<ApiResponse<Timetable>> => {
  if (!id) throw new Error("Timetable ID is required.");
  if (!status) throw new Error("Status is required.");
  return apiRequest(`/timetable/${id}/status`, "PATCH", { status });
};

/**
 * Delete a timetable by ID.
 */
export const deleteTimetable = (
  id: Timetable["id"]
): Promise<ApiResponse<null>> => {
  if (!id) throw new Error("Timetable ID is required.");
  return apiRequest(`/timetable/${id}`, "DELETE");
};

// --- Time Slot API ---

/**
 * Add a new time slot to an existing timetable.
 */
export const addTimeSlot = (
  timetableId: Timetable["id"],
  slot: Omit<TimeSlot, "id">
): Promise<ApiResponse<TimeSlot>> => {
  if (!timetableId) throw new Error("Timetable ID is required.");
  validateTimeSlot(slot);
  return apiRequest(`/timetable/${timetableId}/slots`, "POST", slot);
};

/**
 * Update a specific time slot within a timetable.
 */
export const updateTimeSlot = (
  timetableId: Timetable["id"],
  slotId: TimeSlot["id"],
  data: Partial<Omit<TimeSlot, "id">>
): Promise<ApiResponse<TimeSlot>> => {
  if (!timetableId) throw new Error("Timetable ID is required.");
  if (!slotId) throw new Error("Slot ID is required.");
  validateTimeSlot(data);
  return apiRequest(`/timetable/${timetableId}/slots/${slotId}`, "PATCH", data);
};

/**
 * Delete a specific time slot from a timetable.
 */
export const deleteTimeSlot = (
  timetableId: Timetable["id"],
  slotId: TimeSlot["id"]
): Promise<ApiResponse<null>> => {
  if (!timetableId) throw new Error("Timetable ID is required.");
  if (!slotId) throw new Error("Slot ID is required.");
  return apiRequest(`/timetable/${timetableId}/slots/${slotId}`, "DELETE");
};

/**
 * Bulk replace all time slots in a timetable.
 */
export const bulkUpdateTimeSlots = (
  timetableId: Timetable["id"],
  slots: Omit<TimeSlot, "id">[]
): Promise<ApiResponse<TimeSlot[]>> => {
  if (!timetableId) throw new Error("Timetable ID is required.");
  if (!slots?.length) throw new Error("At least one time slot is required.");
  slots.forEach(validateTimeSlot);
  return apiRequest(`/timetable/${timetableId}/slots/bulk`, "PUT", { slots });
};

// --- Utilities ---

/**
 * Check for scheduling conflicts before saving a slot.
 */
export const checkTimetableConflicts = (
  timetableId: Timetable["id"],
  slot: Partial<TimeSlot>
): Promise<ApiResponse<ConflictCheckResult>> => {
  if (!timetableId) throw new Error("Timetable ID is required.");
  validateTimeSlot(slot);
  return apiRequest(`/timetable/${timetableId}/conflicts`, "POST", slot);
};

/**
 * Duplicate an existing timetable with a new title.
 */
export const duplicateTimetable = (
  id: Timetable["id"],
  newTitle: string
): Promise<ApiResponse<Timetable>> => {
  if (!id) throw new Error("Timetable ID is required.");
  if (!newTitle?.trim()) throw new Error("New title is required.");
  return apiRequest(`/timetable/${id}/duplicate`, "POST", { title: newTitle.trim() });
};

/**
 * Fetch aggregated timetable statistics.
 */
export const getTimetableStats = (
  id?: Timetable["id"]
): Promise<ApiResponse<TimetableStats>> =>
  apiRequest(id ? `/timetable/${id}/stats` : "/timetable/stats");

/**
 * Export a timetable as CSV, JSON, or PDF.
 * @example exportTimetable(1, "pdf")
 */
export const exportTimetable = (
  id: Timetable["id"],
  format: "csv" | "json" | "pdf" = "pdf"
): Promise<Blob> => {
  if (!id) throw new Error("Timetable ID is required.");
  return apiRequest(`/timetable/${id}/export?format=${format}`);
};