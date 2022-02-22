import * as React from 'react';

export default function ProductsItems({ children }: { children: React.ReactNode }) {
	return <div className='flex flex-wrap gap-8'>{children}</div>;
}
