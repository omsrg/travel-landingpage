import * as React from 'react';

type ButtonProps = {
	children: React.ReactNode;
	className?: string;
};

export default function Button({ children, className, ...rest }: ButtonProps) {
	return (
		<button {...rest} className={`bg-primary-500 text-white ${className}`}>
			{children}
		</button>
	);
}
