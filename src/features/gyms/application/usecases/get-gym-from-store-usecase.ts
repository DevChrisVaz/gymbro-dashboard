import { inject, injectable } from "tsyringe";
import { IGYM } from "../../domain/entities/gym.entity";
import type { GYMRepository } from "../../domain/repositories/gym.repository";

@injectable()
export class GetGYMFromStoreUseCase {
    constructor(
        @inject("GYMRepository") private gymRepository: GYMRepository
    ) { }

    run(): IGYM | null {
        return this.gymRepository.getGYMFromStore();
    }
}