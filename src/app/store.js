import { configureStore } from "@reduxjs/toolkit"
import cakeReducer  from "../feature/cake/cakeSlice"
import iceCreamReducer from "../feature/ice-cream/iceCreamSlice"
import userReducer from "../feature/user/userSlice"
import { fetchUser } from "../feature/user/userSlice"

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        iceCream: iceCreamReducer,
        user: userReducer
    }
})

export default store