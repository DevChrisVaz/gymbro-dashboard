import { RegisterGYMDto } from "@/features/gyms/application/dto/RegisterGYM.dto";
import { GYMRepository } from "@/features/gyms/domain/repositories/gym.repository";
import { GYMRemoteDataSource } from "../data-sources/gym-remote-data-source";

export class GYMRepositoryImpl implements GYMRepository {
    constructor(private gymRemoteDataSource: GYMRemoteDataSource) { }

    async register(registerGYMDto: RegisterGYMDto): Promise<any> {
        const response = await this.gymRemoteDataSource.register(registerGYMDto);

        switch (response.type) {
            case "Succeeded":
                console.log(response.data);
                return response.data;
            case "Failed":
                throw new Error();
            case "Error":
                throw new Error();
        }
    }
}