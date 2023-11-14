import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {User, UserAction} from "entities/User";
import {USER_LOCALSTORAGE_KEY} from "shared/const/localstorage";

interface LoginByUsernameProps {
    username: string;
    password: string;
}

enum LoginErrors {
    INCORRECT_DATA = "",
    SERVER_ERROR = "",

}

const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, {
    rejectValue: string
}>(
    "login/loginByUsername",
    async (authData, thunkAPI) => {
        try {
            const response = await axios.post<User>("http://localhost:8000/login", authData);
            if (!response.data) {
                throw new Error()
            }

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
            thunkAPI.dispatch(UserAction.setAuthData(response.data))

            return response.data; // Assuming the response contains the user data
        } catch (error) {
            console.log(error)
            return thunkAPI.rejectWithValue("error");
        }
    }
);

export {loginByUsername};
