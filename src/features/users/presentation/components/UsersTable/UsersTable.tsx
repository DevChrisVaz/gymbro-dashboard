import { SimpleTable } from '@/core/components/preline/Tables/SimpleTable';
import { AxiosApiRestClient } from '@/core/data/frameworks/datasources/rest/axios/axios-implementation';
import axiosConfig from '@/core/data/frameworks/datasources/rest/axios/axios.config';
import { FindUsersUseCase } from '@/features/users/application/usecases/find-users-usecase';
import { UserRemoteDataSourceImpl } from '@/features/users/data/data-sources/users-remote-data-source';
import { UserRepositoryImpl } from '@/features/users/data/repositories/user.repository';
import { IUser } from '@/features/users/domain/entities/user.entity';
import React, { useEffect, useState } from 'react';

export type UsersTableProps = {
}

const UsersTable: React.FC<UsersTableProps> = ({ }) => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [users, setUsers] = useState<IUser[]>([]);

	const axiosApiRestClient = new AxiosApiRestClient(axiosConfig)
	const userRemoteDataSource = new UserRemoteDataSourceImpl(axiosApiRestClient);
	const userRepository = new UserRepositoryImpl(userRemoteDataSource);
	const findUsersUseCase = new FindUsersUseCase(userRepository);

	const findUsers = async () => {
		setIsLoading(true);
		setUsers(await findUsersUseCase.run());
		setIsLoading(false);
	}

	useEffect(() => {
		findUsers();
	}, []);

	return (
		<SimpleTable
			columns={[
				{
					id: "firstName",
					name: "Nombre(s)"
				},
				{
					id: "lastName",
					name: "Apellidos"
				},
				{
					id: "status",
					name: "Estado"
				},
				{
					id: "userName",
					name: "Nombre de usuario"
				},
			]}
			rows={users}
			isLoading={isLoading}
		/>
	);
};

export default UsersTable;
