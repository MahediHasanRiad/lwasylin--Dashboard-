import { configureStore } from '@reduxjs/toolkit'
import overviewReducer from '../feature/overview/redux/overview.slice'
import authReducer from '../feature/auth/redux/auth.slice'



export const store = configureStore({
  reducer: {
    auth: authReducer,
    overview: overviewReducer
  }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch