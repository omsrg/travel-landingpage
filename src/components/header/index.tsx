import * as React from 'react';
import Button from '../Button';
import UnstyledLink from '../UnstyledLink';
import { useRouter } from 'next/router';

export default function Header() {
	const router = useRouter();
	const arrOfRoute = router.route.split('/');
	const baseRoute = '/' + arrOfRoute[1];

	return (
		<header className='max-w-screen-2xl w-11/12 mx-auto flex items-center justify-between py-10'>
			<div className=''>
				<UnstyledLink href='/' className=' font-bold '>
					<span className='text-5xl text-secondary-500'>Tour</span>
					<span className='text-3xl text-primary-500'>avel</span>
				</UnstyledLink>
			</div>

			<nav className='flex items-center'>
				<ul className='flex items-center '>
					{links.map(({ href, label }) => (
						<li
							key={`${href}${label}`}
							// className='px-5 text-secondary-500 font-bold hover:text-primary-500'
							className={`px-5  font-bold hover:text-primary-500 ${
								baseRoute === href ? 'text-primary-500' : 'text-secondary-500'
							}`}
						>
							<UnstyledLink href={href}>{label}</UnstyledLink>
						</li>
					))}
				</ul>
				<div className='pl-5'>
					<Button className='px-6 py-4 rounded-full text-lg font-bold'>Member area</Button>
				</div>
			</nav>
		</header>
	);
}

const links = [
	{ href: '/', label: 'Home' },
	{ href: '#services', label: 'Services' },
	{ href: '#pricing', label: 'Pricing' },
	{ href: '#about', label: 'About us' },
	{ href: '#contact', label: 'Contact' },
];
