import * as React from 'react';
import Image from 'next/image';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

type CardProps = {
	name: string;
	job: string;
	image: string;
};

export default function TestimoniCard({ name, job, image }: CardProps) {
	return (
		<div className='bg-white font-opensans p-8 pt-6 pb-10 text-center rounded-xl'>
			{/* <div className='bg-pink-500 w-28 h-28 text-center rounded-full'> */}
			<Image
				src={image}
				alt=''
				width={100}
				height={100}
				objectFit='cover'
				className='rounded-full'
			/>
			{/* </div> */}
			<div className='relative'>
				<FaQuoteLeft className='w-4 h-4 absolute top-0' />
				<p className='p-4 text-tundora-500'>
					I am very helpful with this trouravel, because we can easily get it all without having to
					prepare it from afar, and also the price is affordable, highly recommended.
				</p>
				<FaQuoteRight className='w-4 h-4 absolute bottom-0 right-0' />
			</div>
			<p className='font-semibold text-tundora-500'>by {name}</p>
			<p className='text-primary-500'>{job}</p>
		</div>
	);
}
