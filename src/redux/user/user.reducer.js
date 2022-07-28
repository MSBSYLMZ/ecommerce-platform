import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        currentUser: null,
        users: [],
        hiddenAuthPopup: true
    },
    reducers: {
        toggleAuthPopup(state){
            state.hiddenAuthPopup = !state.hiddenAuthPopup;
        },
        createUser(state,action) {
            state.users.push(action.payload)
        },
        updateCurrentUser(state, action) {
            state.currentUser = action.payload
        },
        removeCurrentUser(state, action){
            state.currentUser = null;
        }
    }
});


const { actions,  reducer:  userReducer } = userSlice;

export const { toggleAuthPopup, createUser, updateCurrentUser, removeCurrentUser } = actions;

export  default userReducer;