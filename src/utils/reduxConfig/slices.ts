import { createSlice } from "@reduxjs/toolkit";


export interface UserMetaInto {
    email: string;
    uid: string;
    displayName: string;
    phoneNumber: string;
    photoURL: string;
}



const initialState: UserMetaInto | null
    = null

export const userSlice = createSlice({
    name: 'user-slice',
    initialState,
    reducers: {
        addUser: (_state, action) => {
            return action.payload

        },
        removeUser: () => {
            return null;
        }
    }
})

export const { addUser, removeUser } = userSlice.actions
