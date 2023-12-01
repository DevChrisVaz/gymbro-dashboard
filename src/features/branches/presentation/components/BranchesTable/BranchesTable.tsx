import { SimpleTable } from '@/core/components/preline/Tables/SimpleTable';
import { FindBranchesUseCase } from '@/features/branches/application/usecases/find-branches-usecase';
import { IBranch } from '@/features/branches/domain/entities/branch.entity';
import React, { useEffect, useState } from 'react';
import { container } from "@/config/dependencies";

export type BranchesTableProps = {
}

const BranchesTable: React.FC<BranchesTableProps> = ({ }) => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [branches, setBranches] = useState<IBranch[]>([]);

	const findBranchesUseCase = container.resolve<FindBranchesUseCase>("FindBranchesUseCase");

	const findBranches = async () => {
		setIsLoading(true);
		setBranches(await findBranchesUseCase.run());
		setIsLoading(false);
	}

	useEffect(() => {
		findBranches();
	}, []);

	return (
		<SimpleTable
			columns={[
				{
					id: "name",
					name: "Sucursal"
				},
				{
					id: "phone",
					name: "Teléfono"
				},
				{
					id: "email",
					name: "Correo"
				}
			]}
			linked
			rows={branches}
			isLoading={isLoading}
		/>
	);
};

export default BranchesTable;
