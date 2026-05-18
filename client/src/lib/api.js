const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "") || "http://localhost:5001";

export const buildApiUrl = (path) => {
  if (!path.startsWith("/")) {
    throw new Error(`API path must start with "/": ${path}`);
  }

  return `${API_BASE_URL}${path}`;
};

export { API_BASE_URL };
