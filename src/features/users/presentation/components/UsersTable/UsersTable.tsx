import { SimpleTable } from '@/core/components/preline/Tables/SimpleTable';
import { IUser } from '@/features/users/domain/entities/user.entity';
import { container } from "@/config/dependencies";
import React, { useEffect, useState } from 'react';
import { FindUsersUseCase } from '@/features/users/application/usecases/find-users-usecase';

export type UsersTableProps = {
}

const UsersTable: React.FC<UsersTableProps> = ({ }) => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [users, setUsers] = useState<IUser[]>([]);

	const findUsersUseCase = container.resolve<FindUsersUseCase>("FindUsersUseCase");

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
