'use client'

import { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { REQUEST_STATUS } from '@/constants'
import { toOffers } from '@/services/sources/offersAdapter'
import { subscribeToOffers } from '@/services/api/offers'
import {
	fetchOffers,
	selectOffers,
	selectOffersLoaded,
	selectOffersError,
	selectOffersStatus
} from '@/store/slices/offersSlice'

export default function useOffers() {
	const dispatch = useDispatch()
	const items = useSelector(selectOffers)
	const status = useSelector(selectOffersStatus)
	const error = useSelector(selectOffersError)
	const loaded = useSelector(selectOffersLoaded)
	const offers = useMemo(() => toOffers(items), [items])

	useEffect(() => {
		if (status === REQUEST_STATUS.idle) dispatch(fetchOffers())
	}, [status, dispatch])

	useEffect(() => {
		return subscribeToOffers(() => dispatch(fetchOffers()))
	}, [dispatch])

	return {
		offers,
		error,
		isLoading: !loaded && (status === REQUEST_STATUS.idle || status === REQUEST_STATUS.loading),
		reload: () => dispatch(fetchOffers())
	}
}
