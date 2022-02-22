import * as React from 'react';
import Button from '../Button';
import UnstyledLink from '../UnstyledLink';

export default function Header() {
	return (
		<header className='max-w-screen-2xl w-11/12 mx-auto flex items-center justify-between py-10'>
			<div className=''>
				<UnstyledLink href='/' className=' font-semibold '>
					<span className='text-5xl text-secondary-500'>Tour</span>
					<span className='text-3xl text-primary-500'>avel</span>
				</UnstyledLink>
			</div>

			<nav className='flex items-center'>
				<ul className='flex items-center '>
					{links.map(({ href, label }) => (
						<li
							key={`${href}${label}`}
							className='px-7 text-secondary-500 font-medium hover:text-primary-500'
						>
							<UnstyledLink href={href}>{label}</UnstyledLink>
						</li>
					))}
				</ul>
				<div className='pl-7'>
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
