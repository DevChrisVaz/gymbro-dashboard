import { UserRepository } from "../../domain/repositories/user.repository";

export class FindUsersUseCase {
    constructor(private userRepository: UserRepository) { }

    async run() {
        let response = await this.userRepository.findUsers();
        return response;
    }
}