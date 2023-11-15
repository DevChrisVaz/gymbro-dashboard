import type { AuthRepository } from "../../domain/repositories/auth.repository";
import { ICredentials } from "../../domain/entities/login.entity";

export class RefreshTokenUseCase {
    constructor(private authRepository: AuthRepository) { }

    async run() {
        let response = await this.authRepository.refreshToken();
        return response;
    }
}