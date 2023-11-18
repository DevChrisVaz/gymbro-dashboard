import { container } from "tsyringe";
import { ApiRestClient } from "@/core/data/contracts/datasources/api-rest-client";
import { AxiosApiRestClient } from "@/core/data/frameworks/datasources/rest/axios/axios-implementation";
import { UserRemoteDataSource, UserRemoteDataSourceImpl } from "@/features/users/data/data-sources/users-remote-data-source";
import { UserRepository } from "@/features/users/domain/repositories/user.repository";
import { UserRepositoryImpl } from "@/features/users/data/repositories/user.repository";
import { FindUsersUseCase } from "@/features/users/application/usecases/find-users-usecase";
import { AxiosInstance } from "axios";
import { AuthRemoteDataSource, AuthRemoteDataSourceImpl } from "@/features/auth/data/data-sources/auth-remote-data-source";
import { AuthLocalDataSource, AuthLocalDataSourceImpl } from "@/features/auth/data/data-sources/auth-local-data-source";
import { AuthRepository } from "@/features/auth/domain/repositories/auth.repository";
import { AuthRepositoryImpl } from "@/features/auth/data/repositories/auth.repository";
import { LoginUseCase } from "@/features/auth/application/usecases/login-usecase";
import { LogoutUseCase } from "@/features/auth/application/usecases/logout-usecase";
import { RefreshTokenUseCase } from "@/features/auth/application/usecases/refresh-token-usecase";
import { GetLoggedUserUseCase } from "@/features/auth/application/usecases/get-logged-user-usecase";
import { CreateBranchUseCase } from "@/features/branches/application/usecases/create-branch-usecase";
import { FindBranchByIdUseCase } from "@/features/branches/application/usecases/find-branch-by-id-usecase";
import { FindBranchesUseCase } from "@/features/branches/application/usecases/find-branches-usecase";
import { BranchRemoteDataSource, BranchRemoteDataSourceImpl } from "@/features/branches/data/data-sources/branch-remote-data-source";
import { BranchRepository } from "@/features/branches/domain/repositories/branch.repository";
import { BranchRepositoryImpl } from "@/features/branches/data/repositories/branch.repository";
import { CreatePlanUseCase } from "@/features/plans/application/usecases/create-plan-usecase";
import { FindPlansUseCase } from "@/features/plans/application/usecases/find-plans-usecase";
import { FindBranchPlansUseCase } from "@/features/plans/application/usecases/find-branch-plans-usecase";
import { PlanRemoteDataSource, PlanRemoteDataSourceImpl } from "@/features/plans/data/data-sources/plan-remote-data-source";
import { PlanRepository } from "@/features/plans/domain/repositories/plan.repository";
import { PlanRepositoryImpl } from "@/features/plans/data/repositories/plan.repository";
import axiosInstance from "@/core/data/frameworks/datasources/rest/axios/axios.config";
import { GYMRemoteDataSource, GYMRemoteDataSourceImpl } from "@/features/gyms/data/data-sources/gym-remote-data-source";
import { GYMRepository } from "@/features/gyms/domain/repositories/gym.repository";
import { GYMRepositoryImpl } from "@/features/gyms/data/repositories/gym.repository";
import { FindUserGymUseCase } from "@/features/gyms/application/usecases/find-user-gym-usecase";

//#region Other Dependencies 

container.register<AxiosInstance>("AxiosInstance", {
    useValue: axiosInstance
});

container.register<ApiRestClient>("ApiRestClient", {
    useClass: AxiosApiRestClient
});

//#endregion

//#region Auth Dependencies 

container.register<AuthRemoteDataSource>("AuthRemoteDataSource", {
    useClass: AuthRemoteDataSourceImpl
});

container.register<AuthLocalDataSource>("AuthLocalDataSource", {
    useClass: AuthLocalDataSourceImpl
});

container.register<AuthRepository>("AuthRepository", {
    useClass: AuthRepositoryImpl
});

container.register<LoginUseCase>("LoginUseCase", {
    useClass: LoginUseCase
});

container.register<LogoutUseCase>("LogoutUseCase", {
    useClass: LogoutUseCase
});

container.register<RefreshTokenUseCase>("RefreshTokenUseCase", {
    useClass: RefreshTokenUseCase
});

container.register<GetLoggedUserUseCase>("GetLoggedUserUseCase", {
    useClass: GetLoggedUserUseCase
});

//#endregion

//#region User Dependencies 

container.register<UserRemoteDataSource>("UserRemoteDataSource", {
    useClass: UserRemoteDataSourceImpl
});

// container.register<UserLocalDataSource>("UserLocalDataSource", {
//     useClass: UserLocalDataSourceImpl
// });

container.register<UserRepository>("UserRepository", {
    useClass: UserRepositoryImpl
});

container.register<FindUsersUseCase>("FindUsersUseCase", {
    useClass: FindUsersUseCase
});

//#endregion

//#region Branch Dependencies 

container.register<BranchRemoteDataSource>("BranchRemoteDataSource", {
    useClass: BranchRemoteDataSourceImpl
});

container.register<BranchRepository>("BranchRepository", {
    useClass: BranchRepositoryImpl
})

container.register<CreateBranchUseCase>("CreateBranchUseCase", {
    useClass: CreateBranchUseCase
});

container.register<FindBranchByIdUseCase>("FindBranchByIdUseCase", {
    useClass: FindBranchByIdUseCase
});

container.register<FindBranchesUseCase>("FindBranchesUseCase", {
    useClass: FindBranchesUseCase
});

//#endregion

//#region Plans Dependencies 

container.register<PlanRemoteDataSource>("PlanRemoteDataSource", {
    useClass: PlanRemoteDataSourceImpl
});

container.register<PlanRepository>("PlanRepository", {
    useClass: PlanRepositoryImpl
});

container.register<CreatePlanUseCase>("CreatePlanUseCase", {
    useClass: CreatePlanUseCase
});

container.register<FindPlansUseCase>("FindPlansUseCase", {
    useClass: FindPlansUseCase
});

container.register<FindBranchPlansUseCase>("FindBranchPlansUseCase", {
    useClass: FindBranchPlansUseCase
});

//#endregion

//#region GYM Dependencies

container.register<GYMRemoteDataSource>("GYMRemoteDataSource", {
    useClass: GYMRemoteDataSourceImpl
});

// container.register<GYMLocalDataSource>("GYMLocalDataSource", {
//     useClass: GYMLocalDataSourceImpl
// });

container.register<GYMRepository>("GYMRepository", {
    useClass: GYMRepositoryImpl
});

container.register<FindUserGymUseCase>("FindUserGymUseCase", {
    useClass: FindUserGymUseCase
});

// container.register<null>("", {
//     useValue: null
// });

//#endregion

export { container };