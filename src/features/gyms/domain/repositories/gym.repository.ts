import { RegisterGYMDto } from "../../application/dto/RegisterGYM.dto";

export interface GYMRepository {
    register(registerGYMDto: RegisterGYMDto): Promise<any>;
}