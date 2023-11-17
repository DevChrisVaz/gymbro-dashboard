import { ChevronsBreadcrumb } from '@/core/components/preline/Breadcrumbs/ChevronsBreadcrumb';
import { Button } from '@/core/components/ui/Button';
import { FindBranchByIdUseCase } from '@/features/branches/application/usecases/find-branch-by-id-usecase';
import { IBranch } from '@/features/branches/domain/entities/branch.entity';
import { PlansTable } from '@/features/plans/presentation/components/PlansTable';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { container } from "@/config/dependencies";
import { BranchContextProvider } from '../../contexts/branch-context';

export type BranchProps = {
}

const Branch: React.FC<BranchProps> = ({ }) => {
	const [branch, setBranch] = useState<IBranch>({
		name: "",
		email: "",
		phone: "",
		uuid: ""
	});

	const { id: branchId } = useParams();
	const navigate = useNavigate();

	const findBranchByIdUseCase = container.resolve<FindBranchByIdUseCase>("FindBranchByIdUseCase");

	const findBranchById = async () => {
		setBranch(await findBranchByIdUseCase.run(branchId ?? ""));
	}

	useEffect(() => {
		findBranchById();
	}, []);

	return (
		<BranchContextProvider value={branch}>
			<ChevronsBreadcrumb
				breadcrumbs={[
					{
						pageName: "Dashboard",
						path: "/"
					},
					{
						pageName: "Sucursales",
						path: "/branches"
					}
				]}
				currentPage={branch?.name ?? "Cargando..."}
			/>
			<div className="rounded-xl shadow-lg drop-shadow-xl border-stroke bg-dark-gray px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
				<div className="mb-6 text-xl font-semibold text-black dark:text-white flex justify-between">
					<div></div>
					<Button onClick={() => navigate("create-plan")} className="bg-gradient text-white rounded-full">Nuevo +</Button>
				</div>
				<PlansTable branchId={branchId ?? ""} />
			</div>
		</BranchContextProvider>
	);
};

export default Branch;
