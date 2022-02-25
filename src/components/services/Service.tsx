import * as React from 'react';
import { HiArrowRight } from 'react-icons/hi';

interface IService {
	title: string;
	desc: string;
	icon?: any;
}

export default function Service({ title, desc, icon }: IService) {
	return (
		<div className='box-service text-center max-w-[300px] relative p-6 py-8'>
			<i className='bx bx-globe'></i>
			<h3 className='text-3xl'>{title}</h3>
			<p className='text-base font-opensans mt-2'>{desc}</p>

			<div className='btn-detail text-dark font-semibold'>
				<a href='#' className='mr-2'>
					Learn More
				</a>
				<HiArrowRight className='w-5 h-5' />
			</div>
		</div>
	);
}
