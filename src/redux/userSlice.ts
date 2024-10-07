import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
    name: string,
    email: string,
    password: string
    isLogging : boolean
}

let initialState : UserState = {
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
        },
        doLogin(_state, data){
            const updated = {
                name: 'Kelly',
                email: '',
                password: '',
                isLogging : true
            }
            initialState = updated
            console.log("Payload", initialState)
         
            console.log("Payload atualizado", updated)
        }
    }
})

export const {showName, doLogin} = userSlice.actions;
export default userSlice.reducer