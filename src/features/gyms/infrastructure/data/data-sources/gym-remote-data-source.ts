import { APIResult, ApiRestClient, HttpMethod } from "@/core/data/contracts/datasources/api-rest-client";
import { RegisterGYMDto } from "@/features/gyms/application/dto/RegisterGYM.dto";

export interface GYMRemoteDataSource {
    register(registerGYMDto: RegisterGYMDto): Promise<APIResult>;
}

export class GYMRemoteDataSourceImpl implements GYMRemoteDataSource {
    constructor(private apiRestClient: ApiRestClient) { }

    register(registerGYMDto: RegisterGYMDto): Promise<APIResult> {
        return this.apiRestClient.call(
            HttpMethod.POST,
            "/gyms",
            {
                body: registerGYMDto
            }
        )
    }
}