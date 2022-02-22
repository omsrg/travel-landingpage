import * as React from 'react';
import Section from '@/components/Section';
import { FaCheckSquare } from 'react-icons/fa';
import Image from 'next/image';
import FormInput from './form-input/form-input';
import Input from './form-input/input';

export default function Hero() {
	return (
		<Section>
			<div className='grid grid-cols-12 gap-4 py-8'>
				<div className='col-span-6'>
					<h1 className='text-5xl text-secondary-500'>
						Make Your Trip Memorable Book With Tour
						<span className='text-3xl text-primary-500'>avel</span>
					</h1>
					<p className='my-6 text-lg font-opensans text-tundora-500'>
						We have partners with several destinations that you might feel at home there, we will
						guide you with our best service.
					</p>

					<div className='flex items-center space-x-20 mb-16'>
						<div className='flex items-center space-x-2'>
							<FaCheckSquare className='text-secondary-500' />
							<p className=''>Plan your trip</p>
						</div>
						<div className='flex items-center space-x-2'>
							<FaCheckSquare className='text-secondary-500' />
							<p>Fly with us</p>
						</div>
					</div>

					<FormInput>
						<Input />
					</FormInput>

					<p className='text-[#ababab] text-sm text-center mt-4'>
						Popular search : Kuta beach, Raja Ampat Beach, Borobudur temple
					</p>
				</div>

				<div className='col-span-6'>
					f
					<Image src='/img/hero-tavel.png' alt='' objectFit='contain' width={860} height={715} />
				</div>
			</div>
		</Section>
	);
}
