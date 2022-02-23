import * as React from 'react';
import Header from '@/components/Header/index';
import Footer from '../Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Header />
			<main className='max-w-screen-2xl mx-auto w-11/12'>{children}</main>
			<Footer />
		</>
	);
}
