import { CreateBranchDto } from "../../application/dto/create-branch.dto";
import { IBranch } from "../entities/branch.entity";

export interface BranchRepository {
    create(createBranchDto: CreateBranchDto): Promise<void>;
    find(): Promise<IBranch[]>;
    findById(branchId: string): Promise<IBranch>;
}