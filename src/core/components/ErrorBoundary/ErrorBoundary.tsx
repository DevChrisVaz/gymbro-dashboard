import React, { ReactNode, useEffect, useState } from 'react';

export type ErrorBoundaryProps = {
	children: ReactNode;
}

const ErrorBoundary: React.FC<ErrorBoundaryProps> = (props) => {
	const [hasError, setHasError] = useState(false);

	useEffect(() => {
		const errorHandler = (event: ErrorEvent) => {
			console.error('Error capturado:', event.error);
			setHasError(true);
		};

		window.addEventListener('error', errorHandler);

		return () => {
			window.removeEventListener('error', errorHandler);
		};
	}, []);

	if (hasError) {
		return (
			<div className="absolute w-screen h-screen flex items-center justify-center bg-error text-white">
				<h1>¡Ups! Algo salió mal.</h1>
				<p>Por favor, recargue la página o vuelva más tarde.</p>
			</div>
		);
	}

	return props.children;
};

export default ErrorBoundary;
