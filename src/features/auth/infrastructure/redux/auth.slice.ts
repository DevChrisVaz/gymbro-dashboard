import { RootState } from "@/core/data/frameworks/datasources/local/redux/store";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type Status = "INITIAL" | "LOADING" | "SUCCEEDED" | "FAILED";

type AuthState = {
    token: string | null;
    status: Status;
    error: string | null | undefined;
}

const initialState: AuthState = {
    token: null,
    status: 'INITIAL',
    error: null
};

// export const login = createAsyncThunk("auth/users", async (payload: { userName: string, password: string }) => {
//     const loginUseCase = new LoginUseCase(new AuthRepositoryImpl(new AuthRemoteDataSourceImpl(new AxiosApiRestClient(axiosConfig))));
//     const response = await loginUseCase.run(payload.userName, payload.password);
//     return response;
// });

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setToken: (state: AuthState, action: PayloadAction<string>) => {
            state.token = action.payload;
        },
        rmToken: (state: AuthState) => {
            state.token = null
        }
    },
    // extraReducers(builder) {
        // builder
        //     .addCase(
        //         login.pending, (state) => {
        //             state.status = "LOADING";
        //         }
        //     )
        //     .addCase(
        //         login.fulfilled, (state, action) => {
        //             state.status = "SUCCEEDED";
        //             state.token = action.payload;
        //         }
        //     )
        //     .addCase(
        //         login.rejected, (state, action) => {
        //             state.status = "FAILED";
        //             state.error = action.error.message;
        //         }
        //     )
    // }
});

export const {
    setToken,
    rmToken
} = authSlice.actions;

export const selectToken = (state: RootState) => state.auth.token;

export default authSlice.reducer;