import React, { useEffect } from 'react';
import { LoginForm } from '../../components/LoginForm';
import { useNavigate } from 'react-router-dom';
import { AuthLocalDataSourceImpl } from '@/features/auth/data/data-sources/auth-local-data-source';

export type LoginProps = {
}

const Login: React.FC<LoginProps> = ({ }) => {
	const navigate = useNavigate();

	useEffect(() => {
		const authLocalDataSource = new AuthLocalDataSourceImpl();
		if (authLocalDataSource.getToken()) {
			navigate("/dashboard");
		}
	}, []);


	return (
		<section className="dark:bg-dark bg-light min-h-screen flex items-center justify-center">
			<LoginForm />
		</section>
	);
};

export default Login;