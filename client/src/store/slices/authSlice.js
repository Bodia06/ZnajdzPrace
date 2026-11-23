import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { HTTP_STATUS, REQUEST_STATUS } from '@/constants'
import { logoutRequest, sessionRequest } from '@/services/api/auth'

export const fetchSession = createAsyncThunk(
	'auth/fetchSession',
	async (_, { rejectWithValue }) => {
		try {
			return await sessionRequest()
		} catch (error) {
			if (error.status === HTTP_STATUS.unauthorized) return null
			return rejectWithValue(error.message)
		}
	},
	{ condition: (_, { getState }) => getState().auth.status !== REQUEST_STATUS.loading }
)

export const logout = createAsyncThunk('auth/logout', async (_, { rejectWithValue }) => {
	try {
		await logoutRequest()
	} catch (error) {
		return rejectWithValue(error.message)
	}
})

const authSlice = createSlice({
	name: 'auth',
	initialState: { user: null, status: REQUEST_STATUS.idle },
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchSession.pending, (state) => {
				state.status = REQUEST_STATUS.loading
			})
			.addCase(fetchSession.fulfilled, (state, { payload }) => {
				state.status = REQUEST_STATUS.succeeded
				state.user = payload
			})
			.addCase(fetchSession.rejected, (state) => {
				state.status = REQUEST_STATUS.failed
				state.user = null
			})
			.addCase(logout.fulfilled, (state) => {
				state.user = null
			})
	}
})

export const selectUser = (state) => state.auth.user
export const selectAuthReady = (state) =>
	state.auth.status === REQUEST_STATUS.succeeded || state.auth.status === REQUEST_STATUS.failed

export default authSlice.reducer
