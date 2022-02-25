import * as React from 'react';
import Footer from '../Footer';
import Header from '../Header/Header';
import MobileNavigation from '../Header/MobileNavigation';

export default function Layout({ children }: { children: React.ReactNode }) {
	const [isOpen, setIsOpen] = React.useState<boolean>(false);

	const mobileNavHandler = () => {
		setIsOpen((prevState) => !prevState);
	};

	return (
		<>
			<Header isOpen={isOpen} mobileNavHandler={mobileNavHandler} />
			{isOpen && <MobileNavigation closeMenu={mobileNavHandler} />}
			<main className='max-w-screen-2xl mx-auto w-11/12'>{children}</main>
			<Footer />
		</>
	);
}
