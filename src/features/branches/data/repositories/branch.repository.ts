import { inject, injectable } from "tsyringe";
import { CreateBranchDto } from "../../application/dto/create-branch.dto";
import { IBranch } from "../../domain/entities/branch.entity";
import { BranchRepository } from "../../domain/repositories/branch.repository";
import type { BranchRemoteDataSource } from "../data-sources/branch-remote-data-source";

@injectable()
export class BranchRepositoryImpl implements BranchRepository {
    constructor(
        @inject("BranchRemoteDataSource") private branchRemoteDataSource: BranchRemoteDataSource
    ) { }

    async create(createBranchDto: CreateBranchDto): Promise<void> {
        const response = await this.branchRemoteDataSource.create(createBranchDto);

        switch (response.type) {
            case "Succeeded":
                return response.data;
            case "Failed":
                throw new Error();
            case "Error":
                throw new Error();
            default:
                throw new Error();
        }
    }

    async find(): Promise<IBranch[]> {
        const response = await this.branchRemoteDataSource.find();

        switch (response.type) {
            case "Succeeded":
                return response.data;
            case "Failed":
                throw new Error();
            case "Error":
                throw new Error();
            default:
                throw new Error();
        }
    }

    async findById(branchId: string): Promise<IBranch> {
        const response = await this.branchRemoteDataSource.findById(branchId);

        switch (response.type) {
            case "Succeeded":
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