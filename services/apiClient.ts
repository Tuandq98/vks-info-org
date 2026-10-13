/**
 * API Service Client
 * Chuẩn bị sẵn tầng giao tiếp cho việc tích hợp với Spring Boot REST API
 * Nếu chưa cấu hình NEXT_PUBLIC_API_URL hoặc gặp lỗi mạng, hệ thống tự động fallback sử dụng Mock Data.
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '';

export async function apiRequest<T>(
  endpoint: string,
  options?: RequestInit,
  mockFallback?: () => Promise<T> | T
): Promise<T> {
  if (!API_BASE_URL && mockFallback) {
    // Giả lập network latency nhẹ 150-250ms cho chân thực
    await new Promise((resolve) => setTimeout(resolve, 150));
    return mockFallback();
  }

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}: ${response.statusText}`);
    }

    return (await response.json()) as T;
  } catch (error) {
    console.warn(`[API Client] Error calling ${endpoint}, falling back to mock data:`, error);
    if (mockFallback) {
      return mockFallback();
    }
    throw error;
  }
}
