/** Lightweight API client wrapper using fetch */
export interface ApiClientOptions {
  baseUrl?: string
  headers?: Record<string, string>
}

export class ApiClient {
  private baseUrl: string
  private defaultHeaders: Record<string, string>

  constructor({ baseUrl = '', headers = {} }: ApiClientOptions = {}) {
    this.baseUrl = baseUrl.replace(/\/$/, '')
    this.defaultHeaders = headers
  }

  async get<T>(path: string, init: RequestInit = {}): Promise<T> {
    const res = await fetch(this.baseUrl + path, {
      ...init,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...this.defaultHeaders,
        ...(init.headers || {}),
      },
    })
    if (!res.ok) throw new Error(`GET ${path} failed: ${res.status}`)
    return res.json() as Promise<T>
  }

  async post<T>(path: string, body?: unknown, init: RequestInit = {}): Promise<T> {
    const res = await fetch(this.baseUrl + path, {
      ...init,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...this.defaultHeaders,
        ...(init.headers || {}),
      },
      body: body != null ? JSON.stringify(body) : undefined,
    })
    if (!res.ok) throw new Error(`POST ${path} failed: ${res.status}`)
    return res.json() as Promise<T>
  }
}

export const apiClient = new ApiClient({
  baseUrl: import.meta.env.VITE_API_BASE_URL || '',
})

