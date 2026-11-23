'use client'

import { useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import { makeStore } from '@/store'
import { fetchSession } from '@/store/slices/authSlice'

export default function StoreProvider({ children }) {
	const [store] = useState(makeStore)

	useEffect(() => {
		store.dispatch(fetchSession())
	}, [store])

	return <Provider store={store}>{children}</Provider>
}
