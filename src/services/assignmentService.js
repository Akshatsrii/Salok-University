import { apiRequest } from "./api";

// --- Types ---
export interface Assignment {
  id: string | number;
  title: string;
  description?: string;
  dueDate?: string;
  status?: "pending" | "in_progress" | "completed";
  [key: string]: unknown;
}

export interface AssignmentFilters {
  status?: Assignment["status"];
  page?: number;
  limit?: number;
  search?: string;
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
  total?: number;
}

// --- Helpers ---
const buildQueryString = (filters: AssignmentFilters): string => {
  const params = new URLSearchParams();
  Object.entries(filters).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      params.append(key, String(value));
    }
  });
  const query = params.toString();
  return query ? `?${query}` : "";
};

// --- API Functions ---

/**
 * Fetch all assignments, with optional filters.
 * @example getAssignments({ status: "pending", page: 1, limit: 10 })
 */
export const getAssignments = (
  filters: AssignmentFilters = {}
): Promise<ApiResponse<Assignment[]>> => {
  const query = buildQueryString(filters);
  return apiRequest(`/assignments${query}`);
};

/**
 * Fetch a single assignment by ID.
 */
export const getAssignmentById = (
  id: Assignment["id"]
): Promise<ApiResponse<Assignment>> => {
  if (!id) throw new Error("Assignment ID is required.");
  return apiRequest(`/assignments/${id}`);
};

/**
 * Create a new assignment.
 */
export const createAssignment = (
  data: Omit<Assignment, "id">
): Promise<ApiResponse<Assignment>> => {
  if (!data || !data.title) throw new Error("Assignment title is required.");
  return apiRequest("/assignments", "POST", data);
};

/**
 * Update an existing assignment (full replace).
 */
export const updateAssignment = (
  id: Assignment["id"],
  data: Partial<Assignment>
): Promise<ApiResponse<Assignment>> => {
  if (!id) throw new Error("Assignment ID is required.");
  return apiRequest(`/assignments/${id}`, "PUT", data);
};

/**
 * Partially update an assignment.
 */
export const patchAssignment = (
  id: Assignment["id"],
  data: Partial<Assignment>
): Promise<ApiResponse<Assignment>> => {
  if (!id) throw new Error("Assignment ID is required.");
  return apiRequest(`/assignments/${id}`, "PATCH", data);
};

/**
 * Delete an assignment by ID.
 */
export const deleteAssignment = (
  id: Assignment["id"]
): Promise<ApiResponse<null>> => {
  if (!id) throw new Error("Assignment ID is required.");
  return apiRequest(`/assignments/${id}`, "DELETE");
};

/**
 * Bulk delete assignments.
 */
export const bulkDeleteAssignments = (
  ids: Assignment["id"][]
): Promise<ApiResponse<null>> => {
  if (!ids?.length) throw new Error("At least one ID is required.");
  return apiRequest("/assignments/bulk-delete", "POST", { ids });
};