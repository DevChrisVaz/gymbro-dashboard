import React, { useEffect, useState } from 'react';
import { AccountDropdown } from '@/core/components/preline/Dropdown/AccountDropdown';
import { SearchBar } from '@/core/components/ui/SearchBar';
import { Outlet, useParams } from 'react-router-dom';
import { BranchSidebar } from '../BranchSidebar';
import { IBranch } from '@/features/branches/domain/entities/branch.entity';
import { container } from "@/config/dependencies";
import { FindBranchByIdUseCase } from '@/features/branches/application/usecases/find-branch-by-id-usecase';
import { BranchContextProvider } from '../../contexts/branch-context';

export type BranchLayoutProps = {
}

const BranchLayout: React.FC<BranchLayoutProps> = ({ }) => {
	const [branch, setBranch] = useState<IBranch>({
		name: "",
		email: "",
		phone: "",
		uuid: ""
	});

	const { id: branchId } = useParams();

	const findBranchByIdUseCase = container.resolve<FindBranchByIdUseCase>("FindBranchByIdUseCase");

	const findBranchById = async () => {
		setBranch(await findBranchByIdUseCase.run(branchId ?? ""));
	}

	useEffect(() => {
		findBranchById();
	}, []);

	return (
		<BranchContextProvider value={branch}>
			<div className="w-screen h-screen flex overflow-hidden">
				<BranchSidebar />
				<div className="w-full h-full overflow-auto">
					<nav className="bg-light dark:bg-dark flex justify-between items-center py-2 md:px-6 lg:px-10 xl:px-6 px-3 shadow-md">
						<SearchBar />
						<AccountDropdown />
					</nav>
					<section className="text-dark-green p-4 m-5 mt-0">
						<Outlet />
					</section>
				</div>
			</div>
		</BranchContextProvider>
	);
};

export default BranchLayout;