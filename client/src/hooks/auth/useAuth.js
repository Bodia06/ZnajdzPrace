'use client'

import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout, selectAuthReady, selectUser } from '@/store/slices/authSlice'

export default function useAuth() {
	const dispatch = useDispatch()
	const user = useSelector(selectUser)
	const ready = useSelector(selectAuthReady)
	const signOut = useCallback(() => dispatch(logout()), [dispatch])

	return { user, ready, signOut }
}
