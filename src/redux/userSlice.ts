import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
    name: string,
    email: string,
    password: string
    isLogging : boolean
}

const initialState : UserState = {
    name: '',
    email: '',
    password: '',
    isLogging : false
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        showName:(state) =>{
            console.log('Do state', state)
        }
    }
})

export const {showName} = userSlice.actions;
export default userSlice.reducer