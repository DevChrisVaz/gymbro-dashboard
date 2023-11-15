import { store } from "@/core/data/frameworks/datasources/local/redux/store";
import { rmToken, setToken } from "../../infrastructure/redux/auth.slice";
// import { autoInjectable } from "tsyringe";

export interface AuthLocalDataSource {
    saveToken(token: string): void;
    getToken(): string | null;
    removeToken(): void;
}

// @autoInjectable()
export class AuthLocalDataSourceImpl implements AuthLocalDataSource {
    saveToken(token: string) {
        store.dispatch(setToken(token));
    }

    getToken(): string | null {
        const currentState = store.getState();
        return currentState.auth.token;
    }

    removeToken(): void {
        store.dispatch(rmToken());
    }
}