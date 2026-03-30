/**
 * API Client Utility
 * Handles all API requests using environment variables
 */

import env from './env.js'

class APIClient {
  constructor() {
    this.baseURL = env.apiBaseUrl
    this.timeout = env.apiTimeout
  }

  /**
   * Make API request
   * @param {string} endpoint - API endpoint
   * @param {object} options - Fetch options
   * @returns {Promise} Response data
   */
  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`

    const config = {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    }

    // Add auth token if available
    const token = localStorage.getItem('authToken')
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }

    try {
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), this.timeout)

      const response = await fetch(url, { ...config, signal: controller.signal })

      clearTimeout(timeoutId)

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`)
      }

      return await response.json()
    } catch (error) {
      console.error('API Error:', error)
      throw error
    }
  }

  /**
   * GET request
   */
  get(endpoint, options = {}) {
    return this.request(endpoint, { ...options, method: 'GET' })
  }

  /**
   * POST request
   */
  post(endpoint, data, options = {}) {
    return this.request(endpoint, {
      ...options,
      method: 'POST',
      body: JSON.stringify(data),
    })
  }

  /**
   * PUT request
   */
  put(endpoint, data, options = {}) {
    return this.request(endpoint, {
      ...options,
      method: 'PUT',
      body: JSON.stringify(data),
    })
  }

  /**
   * DELETE request
   */
  delete(endpoint, options = {}) {
    return this.request(endpoint, { ...options, method: 'DELETE' })
  }

  /**
   * PATCH request
   */
  patch(endpoint, data, options = {}) {
    return this.request(endpoint, {
      ...options,
      method: 'PATCH',
      body: JSON.stringify(data),
    })
  }
}

export const apiClient = new APIClient()

/**
 * API Endpoints - Member Management
 */
export const memberAPI = {
  // Get all members
  getAll: () => apiClient.get('/members'),

  // Get single member
  getOne: (id) => apiClient.get(`/members/${id}`),

  // Create new member
  create: (data) => apiClient.post('/members', data),

  // Update member
  update: (id, data) => apiClient.put(`/members/${id}`, data),

  // Delete member
  delete: (id) => apiClient.delete(`/members/${id}`),

  // Search members
  search: (query) => apiClient.get(`/members/search?q=${query}`),
}

/**
 * API Endpoints - Classes
 */
export const classesAPI = {
  getAll: () => apiClient.get('/classes'),
  getOne: (id) => apiClient.get(`/classes/${id}`),
  create: (data) => apiClient.post('/classes', data),
  update: (id, data) => apiClient.put(`/classes/${id}`, data),
  delete: (id) => apiClient.delete(`/classes/${id}`),
  enroll: (classId, memberId) =>
    apiClient.post(`/classes/${classId}/enroll`, { memberId }),
}

/**
 * API Endpoints - Trainers
 */
export const trainersAPI = {
  getAll: () => apiClient.get('/trainers'),
  getOne: (id) => apiClient.get(`/trainers/${id}`),
  create: (data) => apiClient.post('/trainers', data),
  update: (id, data) => apiClient.put(`/trainers/${id}`, data),
  delete: (id) => apiClient.delete(`/trainers/${id}`),
}

/**
 * API Endpoints - Memberships
 */
export const membershipsAPI = {
  getAll: () => apiClient.get('/memberships'),
  getOne: (id) => apiClient.get(`/memberships/${id}`),
  create: (data) => apiClient.post('/memberships', data),
  update: (id, data) => apiClient.put(`/memberships/${id}`, data),
  delete: (id) => apiClient.delete(`/memberships/${id}`),
}

/**
 * API Endpoints - Payments
 */
export const paymentsAPI = {
  getAll: () => apiClient.get('/payments'),
  getOne: (id) => apiClient.get(`/payments/${id}`),
  create: (data) => apiClient.post('/payments', data),
  getByMember: (memberId) => apiClient.get(`/payments/member/${memberId}`),
}

/**
 * API Endpoints - Authentication
 */
export const authAPI = {
  login: (credentials) => apiClient.post('/auth/login', credentials),
  register: (data) => apiClient.post('/auth/register', data),
  logout: () => apiClient.post('/auth/logout', {}),
  refreshToken: () => apiClient.post('/auth/refresh', {}),
  profile: () => apiClient.get('/auth/profile'),
  updateProfile: (data) => apiClient.put('/auth/profile', data),
}

/**
 * API Endpoints - Workouts
 */
export const workoutsAPI = {
  getAll: () => apiClient.get('/workouts'),
  getOne: (id) => apiClient.get(`/workouts/${id}`),
  create: (data) => apiClient.post('/workouts', data),
  update: (id, data) => apiClient.put(`/workouts/${id}`, data),
  delete: (id) => apiClient.delete(`/workouts/${id}`),
  logWorkout: (data) => apiClient.post('/workouts/log', data),
}

/**
 * API Endpoints - Nutrition
 */
export const nutritionAPI = {
  getPlans: () => apiClient.get('/nutrition/plans'),
  getPlan: (id) => apiClient.get(`/nutrition/plans/${id}`),
  createPlan: (data) => apiClient.post('/nutrition/plans', data),
  logMeal: (data) => apiClient.post('/nutrition/meals', data),
  getMeals: () => apiClient.get('/nutrition/meals'),
}

/**
 * API Endpoints - Reports
 */
export const reportsAPI = {
  getMemberReport: (memberId) =>
    apiClient.get(`/reports/member/${memberId}`),
  getClassReport: (classId) =>
    apiClient.get(`/reports/class/${classId}`),
  getFinancialReport: (startDate, endDate) =>
    apiClient.get(`/reports/financial?start=${startDate}&end=${endDate}`),
}

export default apiClient
