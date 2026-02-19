import { BASE_URL } from "../utils/constants";

/**
 * Makes an authenticated API request.
 *
 * @param {string} endpoint - API endpoint (e.g. "/users")
 * @param {string} [method="GET"] - HTTP method
 * @param {object} [body] - Request payload (for POST/PUT/PATCH)
 * @param {object} [customHeaders={}] - Optional extra headers
 * @returns {Promise<any>} Parsed JSON response
 * @throws {ApiError} On non-2xx responses or network failure
 */

class ApiError extends Error {
  constructor(message, status, data) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.data = data;
  }
}

export const apiRequest = async (
  endpoint,
  method = "GET",
  body = null,
  customHeaders = {}
) => {
  const token = localStorage.getItem("token");

  const headers = {
    "Content-Type": "application/json",
    ...(token && { Authorization: `Bearer ${token}` }),
    ...customHeaders,
  };

  const config = {
    method,
    headers,
    ...(body && { body: JSON.stringify(body) }),
  };

  let response;

  try {
    response = await fetch(`${BASE_URL}${endpoint}`, config); // ✅ Fixed syntax
  } catch (networkError) {
    throw new ApiError("Network error. Please check your connection.", 0, null);
  }

  // Parse response body safely
  let data;
  const contentType = response.headers.get("Content-Type") || "";
  try {
    data = contentType.includes("application/json")
      ? await response.json()
      : await response.text();
  } catch {
    data = null;
  }

  if (!response.ok) {
    throw new ApiError(
      data?.message || `Request failed with status ${response.status}`,
      response.status,
      data
    );
  }

  return data;
};