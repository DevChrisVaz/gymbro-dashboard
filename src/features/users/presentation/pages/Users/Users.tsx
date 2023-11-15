import Breadcrumb from '@/core/components/Breadcrumbs/Breadcrumb';
import { Button } from '@/core/components/ui/Button';
import { SearchBar } from '@/core/components/ui/SearchBar';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { UsersTable } from '../../components/UsersTable';

export type UsersProps = {
}

const Users: React.FC<UsersProps> = ({ }) => {

	const navigate = useNavigate();

	return (
		<>
			<Breadcrumb pageName={'Usuarios'} />
			<div className="rounded-xl shadow-lg drop-shadow-xl border-stroke bg-dark-gray px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
				<div className="mb-6 text-xl font-semibold text-black dark:text-white flex justify-between">
					<SearchBar />
					<Button onClick={() => navigate("/dashboard/plans/newplan")} className="bg-gradient text-white rounded-full">Nuevo +</Button>
				</div>
				<UsersTable />
			</div>
		</>
	);
};

export default Users;
