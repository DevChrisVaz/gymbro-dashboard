// import { autoInjectable } from "tsyringe";
import { ICredentials } from "../../domain/entities/login.entity";
import { AuthRepository } from "../../domain/repositories/auth.repository";
import type { AuthLocalDataSource } from "../data-sources/auth-local-data-source";
import type { AuthRemoteDataSource } from "../data-sources/auth-remote-data-source";

// @autoInjectable()
export class AuthRepositoryImpl implements AuthRepository {
    constructor(
        private authRemoteDataSource: AuthRemoteDataSource,
        private authLocalDataSource: AuthLocalDataSource
    ) { }

    async login(credentials: ICredentials): Promise<string> {
        const response = await this.authRemoteDataSource.login(credentials);

        switch (response.type) {
            case "Succeeded":
                this.authLocalDataSource.saveToken(response.data.token);
                return response.data.token;
            case "Failed":
                throw new Error();
            case "Error":
                throw new Error();
            default:
                throw new Error();
        }
    }

    async refreshToken(): Promise<string> {
        const response = await this.authRemoteDataSource.refreshToken();

        switch (response.type) {
            case "Succeeded":
                this.authLocalDataSource.saveToken(response.data.token);
                return response.data.token;
            case "Failed":
                throw new Error();
            case "Error":
                throw new Error();
            default:
                throw new Error();
        }
    }
}