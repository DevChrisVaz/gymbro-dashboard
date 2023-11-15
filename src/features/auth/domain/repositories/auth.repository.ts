import { ICredentials } from "../entities/login.entity";

export interface AuthRepository {
    login(credentials: ICredentials): Promise<string>;
    refreshToken(): Promise<string>;
}