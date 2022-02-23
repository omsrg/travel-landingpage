import * as React from 'react';

export default function ProductsItems({ children }: { children: React.ReactNode }) {
	return <div className='flex justify-center flex-wrap gap-8'>{children}</div>;
}
