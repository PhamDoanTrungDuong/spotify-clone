import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { configureStore } from "@reduxjs/toolkit";
// import methodReducer from "../../features/contact/methodSlice";

export const store = configureStore({
    reducer: {
        // method: methodReducer,
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;