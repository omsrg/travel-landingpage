import * as React from 'react';

import { AiFillStar } from 'react-icons/ai';
import Button from '../Button';
import Image from 'next/image';

interface IProductCard {
	category: string;
	price: number;
	location: string;
	description: string;
	image: string;
}

export default function ProductCard({
	category,
	price,
	description,
	location,
	image,
}: IProductCard) {
	return (
		<div className='card-product relative w-[300px] h-[400px] rounded-lg overflow-y-hidden mt-24'>
			<Image src={image} alt='' layout='fill' objectFit='cover' />
			<div className='detail-product p-4'>
				<div className='flex justify-between items-center'>
					<h4 className='px-6 py-1 text-base bg-primary-500 rounded-md text-white font-semibold'>
						{category}
					</h4>
					<h4 className='w-16 h-16 bg-secondary-500 rounded-full flex items-center justify-center'>
						${price}
					</h4>
				</div>
				<div className='title-card'>
					<h1 className='text-2xl text-tundora-500'>{location}</h1>
				</div>
				<div className='flex gap-3 items-center text-tundora-500'>
					<div className='star'>
						<AiFillStar className='text-yellow-500' /> 5.0
					</div>
					<p>(1.6k reviewer)</p>
				</div>
				<div className='body-card'>
					<p>{description}</p>
				</div>
				<div className='text-center mt-4'>
					<Button className=' px-10 py-2 rounded-full'>Detail</Button>
				</div>
			</div>
		</div>
	);
}
