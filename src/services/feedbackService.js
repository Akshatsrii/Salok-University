import { apiRequest } from "./api";

// --- Types ---
export type FeedbackStatus = "pending" | "reviewed" | "resolved" | "dismissed";
export type FeedbackCategory = "bug" | "feature_request" | "general" | "performance" | "ui_ux";
export type FeedbackSentiment = "positive" | "neutral" | "negative";
export type FeedbackSortBy = "createdAt" | "updatedAt" | "rating" | "status";
export type SortOrder = "asc" | "desc";

export interface Feedback {
  id: string | number;
  title: string;
  message: string;
  category: FeedbackCategory;
  status: FeedbackStatus;
  sentiment?: FeedbackSentiment;
  rating?: number; // 1–5
  tags?: string[];
  attachments?: string[]; // URLs
  userId?: string | number;
  createdAt?: string;
  updatedAt?: string;
  [key: string]: unknown;
}

export interface FeedbackFilters {
  status?: FeedbackStatus;
  category?: FeedbackCategory;
  sentiment?: FeedbackSentiment;
  rating?: number;
  userId?: string | number;
  search?: string;
  tags?: string[];
  startDate?: string;
  endDate?: string;
  sortBy?: FeedbackSortBy;
  order?: SortOrder;
  page?: number;
  limit?: number;
}

export interface FeedbackStats {
  total: number;
  byStatus: Record<FeedbackStatus, number>;
  byCategory: Record<FeedbackCategory, number>;
  bySentiment: Record<FeedbackSentiment, number>;
  averageRating: number;
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
const buildQueryString = (filters: FeedbackFilters): string => {
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

const validateRating = (rating: number): void => {
  if (rating < 1 || rating > 5 || !Number.isInteger(rating)) {
    throw new Error("Rating must be an integer between 1 and 5.");
  }
};

const validateFeedbackPayload = (
  data: Partial<Pick<Feedback, "title" | "message" | "rating">>
): void => {
  if (data.title !== undefined && !data.title.trim()) {
    throw new Error("Feedback title cannot be empty.");
  }
  if (data.message !== undefined && !data.message.trim()) {
    throw new Error("Feedback message cannot be empty.");
  }
  if (data.rating !== undefined) {
    validateRating(data.rating);
  }
};

// --- API Functions ---

/**
 * Fetch all feedback entries with optional filters and pagination.
 * @example getFeedbacks({ status: "pending", category: "bug", page: 1, limit: 20 })
 */
export const getFeedbacks = (
  filters: FeedbackFilters = {}
): Promise<PaginatedResponse<Feedback>> => {
  const query = buildQueryString(filters);
  return apiRequest(`/feedback${query}`);
};

/**
 * Fetch a single feedback entry by ID.
 */
export const getFeedbackById = (
  id: Feedback["id"]
): Promise<ApiResponse<Feedback>> => {
  if (!id) throw new Error("Feedback ID is required.");
  return apiRequest(`/feedback/${id}`);
};

/**
 * Submit new feedback.
 * @example createFeedback({ title: "Bug Report", message: "...", category: "bug", rating: 2 })
 */
export const createFeedback = (
  data: Omit<Feedback, "id" | "status" | "createdAt" | "updatedAt">
): Promise<ApiResponse<Feedback>> => {
  if (!data?.title?.trim()) throw new Error("Feedback title is required.");
  if (!data?.message?.trim()) throw new Error("Feedback message is required.");
  if (!data?.category) throw new Error("Feedback category is required.");
  if (data.rating !== undefined) validateRating(data.rating);

  return apiRequest("/feedback", "POST", {
    ...data,
    title: data.title.trim(),
    message: data.message.trim(),
  });
};

/**
 * Update an existing feedback entry (full replace).
 */
export const updateFeedback = (
  id: Feedback["id"],
  data: Partial<Omit<Feedback, "id" | "createdAt">>
): Promise<ApiResponse<Feedback>> => {
  if (!id) throw new Error("Feedback ID is required.");
  validateFeedbackPayload(data);
  return apiRequest(`/feedback/${id}`, "PUT", data);
};

/**
 * Partially update a feedback entry.
 */
export const patchFeedback = (
  id: Feedback["id"],
  data: Partial<Omit<Feedback, "id" | "createdAt">>
): Promise<ApiResponse<Feedback>> => {
  if (!id) throw new Error("Feedback ID is required.");
  validateFeedbackPayload(data);
  return apiRequest(`/feedback/${id}`, "PATCH", data);
};

/**
 * Update only the status of a feedback entry.
 */
export const updateFeedbackStatus = (
  id: Feedback["id"],
  status: FeedbackStatus
): Promise<ApiResponse<Feedback>> => {
  if (!id) throw new Error("Feedback ID is required.");
  if (!status) throw new Error("Status is required.");
  return apiRequest(`/feedback/${id}/status`, "PATCH", { status });
};

/**
 * Delete a feedback entry by ID.
 */
export const deleteFeedback = (
  id: Feedback["id"]
): Promise<ApiResponse<null>> => {
  if (!id) throw new Error("Feedback ID is required.");
  return apiRequest(`/feedback/${id}`, "DELETE");
};

/**
 * Bulk delete feedback entries by IDs.
 */
export const bulkDeleteFeedbacks = (
  ids: Feedback["id"][]
): Promise<ApiResponse<null>> => {
  if (!ids?.length) throw new Error("At least one feedback ID is required.");
  return apiRequest("/feedback/bulk-delete", "POST", { ids });
};

/**
 * Bulk update status for multiple feedback entries.
 */
export const bulkUpdateFeedbackStatus = (
  ids: Feedback["id"][],
  status: FeedbackStatus
): Promise<ApiResponse<null>> => {
  if (!ids?.length) throw new Error("At least one feedback ID is required.");
  if (!status) throw new Error("Status is required.");
  return apiRequest("/feedback/bulk-status", "PATCH", { ids, status });
};

/**
 * Fetch aggregated feedback statistics.
 */
export const getFeedbackStats = (): Promise<ApiResponse<FeedbackStats>> =>
  apiRequest("/feedback/stats");

/**
 * Submit a reply to a specific feedback entry.
 */
export const replyToFeedback = (
  id: Feedback["id"],
  message: string
): Promise<ApiResponse<Feedback>> => {
  if (!id) throw new Error("Feedback ID is required.");
  if (!message?.trim()) throw new Error("Reply message cannot be empty.");
  return apiRequest(`/feedback/${id}/reply`, "POST", { message: message.trim() });
};

/**
 * Export feedback entries as CSV or JSON.
 * @example exportFeedbacks("csv", { status: "resolved" })
 */
export const exportFeedbacks = (
  format: "csv" | "json" = "csv",
  filters: FeedbackFilters = {}
): Promise<Blob> => {
  const query = buildQueryString({ ...filters, format });
  return apiRequest(`/feedback/export${query}`);
};