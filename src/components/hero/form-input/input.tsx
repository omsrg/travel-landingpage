import * as React from 'react';
import InputDate from './input-date';
import InputLocation from './input-location';
import Button from '@/components/Button';
import { BsSearch } from 'react-icons/bs';

export default function Input() {
	return (
		<div>
			<form onSubmit={(e) => e.preventDefault()}>
				<div className='relative w-[640px] h-[110px] mt-16 flex justify-center items-center'>
					{/* eslint-disable-next-line @next/next/no-img-element */}
					<img src='/img/form.png' alt='form-background' className='absolute' />
					<div className='absolute bg-secondary-500 px-10 py-3 rounded-full -top-7'>
						<h3 className='text-base text-white'>Get the schedule</h3>
					</div>
					<div className='flex justify-around w-full px-6'>
						<InputLocation />
						<InputDate />
						<Button className='w-16 h-16 rounded-full z-10 flex justify-center items-center'>
							<BsSearch className='w-5 h-5' />
						</Button>
					</div>
				</div>
			</form>
		</div>
	);
}
