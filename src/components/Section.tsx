import * as React from 'react';

export default function Section({ children }: { children: React.ReactNode }) {
	return <div className='max-w-screen-xl'>{children}</div>;
}
