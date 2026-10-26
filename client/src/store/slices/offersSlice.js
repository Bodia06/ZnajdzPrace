import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { REQUEST_STATUS } from '@/constants'
import { getOffers } from '@/services/api/offers'

export const fetchOffers = createAsyncThunk('offers/fetchAll', async (_, { rejectWithValue }) => {
	try {
		return await getOffers()
	} catch (error) {
		return rejectWithValue(error.message)
	}
})

const offersSlice = createSlice({
	name: 'offers',
	initialState: {
		items: [],
		status: REQUEST_STATUS.idle,
		error: null,
		loaded: false,
		requestId: null
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchOffers.pending, (state, { meta }) => {
				state.status = REQUEST_STATUS.loading
				state.error = null
				state.requestId = meta.requestId
			})
			.addCase(fetchOffers.fulfilled, (state, { payload, meta }) => {
				if (state.requestId !== meta.requestId) return
				state.status = REQUEST_STATUS.succeeded
				state.loaded = true
				state.items = payload
			})
			.addCase(fetchOffers.rejected, (state, { payload, error, meta }) => {
				if (state.requestId !== meta.requestId) return
				state.status = REQUEST_STATUS.failed
				state.error = payload ?? error.message
			})
	}
})

export const selectOffers = (state) => state.offers.items
export const selectOffersLoaded = (state) => state.offers.loaded
export const selectOffersStatus = (state) => state.offers.status
export const selectOffersError = (state) => state.offers.error

export default offersSlice.reducer
