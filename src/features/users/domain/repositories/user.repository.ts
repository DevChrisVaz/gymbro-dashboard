import { IUser } from "../entities/user.entity";

export interface UserRepository {
    findUsers(): Promise<IUser[]>;
}