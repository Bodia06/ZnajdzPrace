import { api } from './client'

export const loginRequest = (payload) => api('/auth/login', { method: 'POST', body: payload })

export const registerRequest = (payload) => api('/auth/register', { method: 'POST', body: payload })
