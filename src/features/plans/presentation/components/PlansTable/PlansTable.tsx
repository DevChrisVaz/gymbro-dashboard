import { SimpleTable } from '@/core/components/preline/Tables/SimpleTable';
import { FindBranchPlansUseCase } from '@/features/plans/application/usecases/find-branch-plans-usecase';
import { IPlan } from '@/features/plans/domain/entities/plan.entity';
import React, { useEffect, useState } from 'react';
import { container } from "@/config/dependencies";

export type PlansTableProps = {
	branchId: string;
}

const PlansTable: React.FC<PlansTableProps> = (props) => {

	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [plans, setPlans] = useState<IPlan[]>([]);

	const findPlansUseCase = container.resolve<FindBranchPlansUseCase>("FindBranchPlansUseCase");

	const findPlans = async () => {
		setIsLoading(true);
		setPlans(await findPlansUseCase.run(props.branchId));
		setIsLoading(false);
	}

	useEffect(() => {
		findPlans();
	}, [props.branchId]);

	return (
		<SimpleTable
			columns={[
				{
					id: "title",
					name: "Plan"
				},
				{
					id: "description",
					name: "Descripción"
				},
				{
					id: "duration",
					name: "Duración"
				},
				{
					id: "price",
					name: "Precio"
				},
				{
					id: "status",
					name: "Estado"
				},
			]}
			rows={plans}
			isLoading={isLoading}
		/>
	);
};

export default PlansTable;
