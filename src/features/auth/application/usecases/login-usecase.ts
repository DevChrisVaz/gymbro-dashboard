import type { AuthRepository } from "../../domain/repositories/auth.repository";
import { ICredentials } from "../../domain/entities/login.entity";
// import { autoInjectable } from "tsyringe";

// @autoInjectable()
export class LoginUseCase {
    constructor(private authRepository: AuthRepository) { }

    async run(credentials: ICredentials) {
        let response = await this.authRepository.login(credentials);
        return response;
    }
}