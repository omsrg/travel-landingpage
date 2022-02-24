import * as React from 'react';
import NavLinks from './NavLinks';

export default function MobileNavigation({ closeMenu }: { closeMenu: () => void }) {
	return (
		<nav className='absolute top-0 flex flex-col w-3/4 h-screen items-center bg-white md:hidden z-50'>
			<ul className='space-y-6 p-6 text-center' onClick={closeMenu}>
				<NavLinks />
			</ul>
		</nav>
	);
}
