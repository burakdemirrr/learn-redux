import { createSlice } from '@reduxjs/toolkit';

const initialstatevalue={name:"",age:0,email:""};

export const userSlice = createSlice({
    name: "user",
    initialState: { value: initialstatevalue },
    reducers: {
        login: (state, action) => {
            state.value = action.payload
        },

        logout:(state)=>{
            state.value = initialstatevalue;
        }
    },
})
export default userSlice.reducer;

export const {login,logout}=userSlice.actions;