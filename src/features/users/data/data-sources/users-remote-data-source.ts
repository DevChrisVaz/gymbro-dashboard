import { HttpMethod, type APIResult, type ApiRestClient } from "@/core/data/contracts/datasources/api-rest-client";
import { IUser } from "../../domain/entities/user.entity";
import { inject, injectable } from "tsyringe";

export interface UserRemoteDataSource {
    findUsers(): Promise<APIResult<IUser[]>>;
}

@injectable()
export class UserRemoteDataSourceImpl implements UserRemoteDataSource {
    constructor(@inject("ApiRestClient") private apiRestClient: ApiRestClient) { }

    findUsers(): Promise<APIResult<IUser[]>> {
        return this.apiRestClient.call(
            HttpMethod.GET,
            "/users",
            {}
            // {
            //     body: { userName, password }
            // }
        )
    }
}