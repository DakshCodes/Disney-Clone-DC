import { configureStore,getDefaultMiddleware} from '@reduxjs/toolkit';
import userReducer from '../freatures/userSlice'
export default configureStore({
    reducer:{
        user:userReducer,
    },
    middleware:getDefaultMiddleware({
        serializableCheck:false,
    }),
});