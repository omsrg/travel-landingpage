import * as React from 'react';

export default function TestimoniSection({ children }: { children: React.ReactNode }) {
	return <div className='flex overflow-y-auto'>{children}</div>;
}
