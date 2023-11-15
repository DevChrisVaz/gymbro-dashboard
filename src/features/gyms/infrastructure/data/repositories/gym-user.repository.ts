import { GYMUserRepository } from "@/features/gyms/domain/repositories/gym-user.repository";
import { GYMUserRemoteDataSource } from "../data-sources/gym-user-remote-data-source";

export class GYMUserRepositoryImpl implements GYMUserRepository {
    constructor(private gymUserRemoteDataSource: GYMUserRemoteDataSource) { }

    async getUsers(): Promise<any> {
        // const response = await this.gymUserRemoteDataSource.getUsers();

        // switch (response.type) {
        //     case "Succeeded":
        //         console.log(response.data);
        //         return response.data;
        //     case "Failed":
        //         throw new Error();
        //     case "Error":
        //         throw new Error();
        // }
    }
}