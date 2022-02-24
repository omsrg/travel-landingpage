import * as React from 'react';
import UnstyledLink from '../UnstyledLink';
import { GrClose } from 'react-icons/gr';
import { CgMenuRight } from 'react-icons/cg';
import NavLinks from './NavLinks';
import MobileNavigation from './MobileNavigation';

type HeaderProps = {
	isOpen: boolean;
	mobileNavHandler: () => void;
};

export default function Header({ isOpen, mobileNavHandler }: HeaderProps) {
	return (
		<header className='max-w-screen-2xl w-11/12 mx-auto flex items-center justify-between py-10'>
			<div className=''>
				<UnstyledLink href='/' className=' font-bold '>
					<span className='text-5xl text-secondary-500'>Tour</span>
					<span className='text-3xl text-primary-500'>avel</span>
				</UnstyledLink>
			</div>

			<nav className='md:flex items-center hidden'>
				<ul className='flex items-center '>
					<NavLinks />
				</ul>
			</nav>
			<div className='cursor-pointer text-dark md:hidden' onClick={mobileNavHandler}>
				{isOpen ? <GrClose className='w-8 h-8' /> : <CgMenuRight className='w-8 h-8' />}
			</div>
		</header>
	);
}
