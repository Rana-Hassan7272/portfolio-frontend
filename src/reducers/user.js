import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    loading: true,
};

export const userReducer = createReducer(initialState, (builder) => {
    builder
        .addCase("GET_USER_REQUEST", (state) => {
            state.loading = true;
        })
        .addCase("GET_USER_SUCCESS", (state, action) => {
            state.loading = false;
            state.user = action.payload;
        })
        .addCase("GET_USER_FAILURE", (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase("CLEAR_ERROR", (state) => {
            state.error = null;
        })
});



export const loginReducer = createReducer({}, (builder) => {
    builder
        .addCase("GET_LOGIN_REQUEST", (state) => {
            state.loading = true;
            state.isAuthenticated=false;
        })
        .addCase("GET_LOGIN_SUCCESS", (state, action) => {
            state.loading = false;
            state.message = action.payload;
            state.isAuthenticated=true;
        })
        .addCase("GET_LOGIN_FAILURE", (state, action) => {
            state.loading = false;
            state.isAuthenticated=false;
            state.error = action.payload;
        })
        .addCase("GET_LOGOUT_REQUEST", (state) => {
            state.loading = true;
            state.isAuthenticated=true;
        })
        .addCase("GET_LOGOUT_SUCCESS", (state, action) => {
            state.loading = false;
            state.message = action.payload;
            state.isAuthenticated=false;
            state.user=null;
        })
        .addCase("GET_LOGOUT_FAILURE", (state, action) => {
            state.loading = false;
            state.isAuthenticated=true;
            state.error = action.payload;
        })
        .addCase("LOAD_USER_REQUEST", (state) => {
            state.loading = true;
            state.isAuthenticated=false;
        })
        .addCase("LOAD_USER_SUCCESS", (state, action) => {
            state.loading = false;
            state.user = action.payload;
            state.isAuthenticated=true;
        })
        .addCase("LOAD_USER_FAILURE", (state, action) => {
            state.loading = false;
            state.isAuthenticated=false;
            state.error = action.payload;
        })
        .addCase("CLEAR_ERROR", (state) => {
            state.error = null;
        })
        .addCase("CLEAR_MESSAGE", (state) => {
            state.message = null;
        })
});

export const updateReducer = createReducer({}, (builder) => {
    builder
        .addCase("UPDATE_USER_REQUEST", (state) => {
            state.loading = true;
        })
        .addCase("UPDATE_USER_SUCCESS", (state, action) => {
            state.loading = false;
            state.message = action.payload;
        })
        .addCase("UPDATE_USER_FAILURE", (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase("ADD_TIMELINE_REQUEST", (state) => {
            state.loading = true;
        })
        .addCase("ADD_TIMELINE_SUCCESS", (state, action) => {
            state.loading = false;
            state.message = action.payload;
        })
        .addCase("ADD_TIMELINE_FAILURE", (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase("DELETE_TIMELINE_REQUEST", (state) => {
            state.loading = true;
        })
        .addCase("DELETE_TIMELINE_SUCCESS", (state, action) => {
            state.loading = false;
            state.message = action.payload;
        })
        .addCase("DELETE_TIMELINE_FAILURE", (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase("ADD_PROJECT_REQUEST", (state) => {
            state.loading = true;
        })
        .addCase("ADD_PROJECT_SUCCESS", (state, action) => {
            state.loading = false;
            state.message = action.payload;
        })
        .addCase("ADD_PROJECT_FAILURE", (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase("DELETE_PROJECT_REQUEST", (state) => {
            state.loading = true;
        })
        .addCase("DELETE_PROJECT_SUCCESS", (state, action) => {
            state.loading = false;
            state.message = action.payload;
        })
        .addCase("DELETE_PROJECT_FAILURE", (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase("CONTACT_USER_REQUEST", (state) => {
            state.loading = true;
        })
        .addCase("CONTACT_USER_SUCCESS", (state, action) => {
            state.loading = false;
            state.message = action.payload;
        })
        .addCase("CONTACT_USER_FAILURE", (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase("CLEAR_ERROR", (state) => {
            state.error = null;
        })
        .addCase("CLEAR_MESSAGE", (state) => {
            state.message = null;
        })
});
