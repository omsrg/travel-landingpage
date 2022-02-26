import * as React from 'react';

interface IFooterLink {
	groupTitle: string;
	children: React.ReactNode;
	className?: string;
}

export default function FooterColumn({ groupTitle, children, className }: IFooterLink) {
	return (
		<div className={`col-span-3 mb-6 ${className}`}>
			<h3 className='mb-4'>{groupTitle}</h3>
			<div className='flex flex-col space-y-2'>{children}</div>
		</div>
	);
}
