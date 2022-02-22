import * as React from 'react';
import Header from '@/components/header/index';
import Footer from '../footer';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Header />
			<main className='max-w-screen-2xl mx-auto w-11/12'>{children}</main>
			<Footer />
		</>
	);
}
