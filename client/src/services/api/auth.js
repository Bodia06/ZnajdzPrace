import { api } from './client'

const authApi = (path, options) => api(`/api/auth${path}`, { baseUrl: '', ...options })

export const loginRequest = (payload) => authApi('/login', { method: 'POST', body: payload })

export const registerRequest = (payload) => authApi('/register', { method: 'POST', body: payload })

export const sessionRequest = () => authApi('/session')

export const logoutRequest = () => authApi('/logout', { method: 'POST' })
