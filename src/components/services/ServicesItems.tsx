import * as React from 'react';

export default function ServicesItems({ children }: { children: React.ReactNode }) {
	return (
		<div
			className='bg-secondary-500 mt-10 text-white flex flex-wrap justify-center gap-2 rounded-tl-3xl rounded-tr-3xl '
			data-aos='fade-up'
		>
			{children}
		</div>
	);
}
