import * as React from 'react';
import UnstyledLink from '../UnstyledLink';
import { useRouter } from 'next/router';
import Button from '../Button';

export default function NavLinks() {
	const router = useRouter();
	const arrOfRoute = router.route.split('/');
	const baseRoute = '/' + arrOfRoute[1];

	return (
		<>
			{links.map(({ href, label }) => (
				<li
					key={`${href}${label}`}
					// className='px-5 text-secondary-500 font-bold hover:text-primary-500'
					className={`px-3 lg:px-5 font-bold hover:text-primary-500 ${
						baseRoute === href ? 'text-primary-500' : 'text-secondary-500'
					}`}
				>
					<UnstyledLink href={href}>{label}</UnstyledLink>
				</li>
			))}

			<div className='pl-3 lg:pl-5'>
				<Button className='px-3 py-2  lg:px-6 lg:py-4 rounded-full text-sm lg:text-lg font-bold'>
					Member area
				</Button>
			</div>
		</>
	);
}

const links = [
	{ href: '/', label: 'Home' },
	{ href: '#services', label: 'Services' },
	{ href: '#pricing', label: 'Pricing' },
	{ href: '#about', label: 'About us' },
	{ href: '#contact', label: 'Contact' },
];
