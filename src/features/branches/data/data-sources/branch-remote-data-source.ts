import { APIResult, type ApiRestClient, HttpMethod } from "@/core/data/contracts/datasources/api-rest-client";
import { CreateBranchDto } from "../../application/dto/create-branch.dto";
import { IBranch } from "../../domain/entities/branch.entity";
import { inject, injectable } from "tsyringe";
import { IUser } from "@/features/users/domain/entities/user.entity";

export interface BranchRemoteDataSource {
    create(createBranchDto: CreateBranchDto): Promise<APIResult<void>>;
    find(): Promise<APIResult<IBranch[]>>;
    findById(branchId: string): Promise<APIResult<IBranch>>;
    findUsers(branchId: string): Promise<APIResult<IUser[]>>;
}

@injectable()
export class BranchRemoteDataSourceImpl implements BranchRemoteDataSource {
    constructor(
        @inject("ApiRestClient") private apiRestClient: ApiRestClient
    ) { }

    create(createBranchDto: CreateBranchDto): Promise<APIResult<void>> {
        return this.apiRestClient.call(
            HttpMethod.POST,
            "/branches",
            {
                body: createBranchDto
            }
        )
    }

    find(): Promise<APIResult<IBranch[]>> {
        return this.apiRestClient.call(
            HttpMethod.GET,
            "/branches/gym",
            {}
        )
    }

    findById(branchId: string): Promise<APIResult<IBranch>> {
        return this.apiRestClient.call(
            HttpMethod.GET,
            "/branches/" + branchId,
            {}
        );
    }

    findUsers(branchId: string): Promise<APIResult<IUser[]>> {
        return this.apiRestClient.call(
            HttpMethod.GET,
            "/branches/" + branchId + "/users",
            {}
        );
    }

}