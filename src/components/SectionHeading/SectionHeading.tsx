import * as React from 'react';

interface ISectionHeading {
	title: string;
	heading: string;
	subheading?: string;
}

export default function SectionHeading({ title, heading, subheading }: ISectionHeading) {
	return (
		<>
			<h2 className='text-xl text-primary-500 uppercase'>{title}</h2>
			<h1 className='text-tundora-500 my-3'>{heading}</h1>
			<p className='text-xl text-tundora-500 font-opensans'>{subheading}</p>
		</>
	);
}
