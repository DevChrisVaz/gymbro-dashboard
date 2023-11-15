import { IUser } from "../../domain/entities/user.entity";
import { UserRepository } from "../../domain/repositories/user.repository";
import { UserRemoteDataSource } from "../data-sources/users-remote-data-source";

export class UserRepositoryImpl implements UserRepository {
    constructor(
        private userRemoteDataSource: UserRemoteDataSource,
        // private userLocalDataSource: AuthLocalDataSource
    ) { }

    async findUsers(): Promise<IUser[]> {
        const response = await this.userRemoteDataSource.findUsers();

        switch (response.type) {
            case "Succeeded":
                // this.authLocalDataSource.saveToken(response.data.token);
                return response.data;
            case "Failed":
                throw new Error();
            case "Error":
                throw new Error();
            default:
                throw new Error();
        }
    }
}