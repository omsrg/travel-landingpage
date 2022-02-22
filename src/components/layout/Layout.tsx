import * as React from 'react';
import Header from '@/components/header/index';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Header />
			<main className='max-w-screen-2xl mx-auto'>{children}</main>
			{/* <Footer /> */}
		</>
	);
}
