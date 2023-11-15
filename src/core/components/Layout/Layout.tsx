import React, { useEffect } from 'react';
import { Sidebar } from '../Sidebar';
import { SidebarItemType } from '../Sidebar/Sidebar.d';
import { AiFillDollarCircle, AiFillHome, AiFillInfoCircle, AiFillMail, AiFillShop, AiOutlineTeam } from 'react-icons/ai';
import { BsFillPersonVcardFill } from 'react-icons/bs';
import { IoBarbell } from 'react-icons/io5';
import { MdCardMembership } from 'react-icons/md';
import { Navbar } from '../Navbar';
import { LinkType, NavSize } from '../Navbar/Navbar.d';
import { ToastProvider } from '../Toast';
import { Outlet, useNavigate } from "react-router-dom";
import { AuthLocalDataSourceImpl } from '../../../features/auth/data/data-sources/auth-local-data-source';

export type LayoutProps = {
}

const Layout: React.FC<LayoutProps> = () => {

	const sidebarLinks: SidebarItemType[] = [
		{
			label: 'Home',
			url: '/',
			icon: <AiFillHome className="text-primary text-[24px]" />,
		},
		{
			label: 'Mi Gimnasio',
			url: '/',
			icon: <IoBarbell className="text-primary text-[24px]" />,
			isOpen: false,
			items: [
				{
					label: 'Información',
					url: '/info',
					icon: <AiFillInfoCircle className="text-primary text-[24px]" />,
				},
				{
					label: 'Contacto',
					url: '/contact',
					icon: <AiFillMail className="text-primary text-[24px]" />,
				},
			],
		},
		{
			label: 'Usuarios',
			url: '/users',
			icon: <BsFillPersonVcardFill className="text-primary text-[24px]" />,
		},
		{
			label: 'Planes',
			url: '/plans',
			icon: <AiFillDollarCircle className="text-primary text-[24px]" />,
		},
		{
			label: 'Clientes',
			url: '/customers',
			icon: <AiOutlineTeam className="text-primary text-[24px]" />,
		},
		{
			label: 'Suscripciones',
			url: '/suscriptions',
			icon: <MdCardMembership className="text-primary text-[24px]" />,
		},
		{
			label: 'Sucursales',
			url: '/branches',
			icon: <AiFillShop className="text-primary text-[24px]" />,
		},
	];

	const navbarLinks: LinkType[] = [
		{
			label: "Home",
			url: "/"
		},
		{
			label: "Solutions",
			url: "/solutions"
		},
		{
			label: "Resources",
			url: "/resources"
		},
		{
			label: "Developers",
			url: "/developers"
		},
		{
			label: "Pricing",
			// url: "/pricing",
			dropdown: [
				{
					label: "Pricing",
					url: "/pricing"
				}
			]
		}
	]


	const navigate = useNavigate();

	useEffect(() => {
		const authLocalDataSource = new AuthLocalDataSourceImpl();
		if (!authLocalDataSource.getToken()) {
			navigate("/login");
		}
	}, []);

	return (
		<div className="w-screen h-screen flex overflow-hidden">
			<ToastProvider>
				<Sidebar links={sidebarLinks} />
				<div className="w-full h-full overflow-auto">
					<Navbar searchBar className="" size={NavSize.medium} items={navbarLinks}>
					</Navbar>
					<section className="dark:bg-dark bg-light text-dark-green p-4 m-14 mt-2">
						<Outlet />
					</section>
				</div>
			</ToastProvider>
		</div>
	);
};

export default Layout;