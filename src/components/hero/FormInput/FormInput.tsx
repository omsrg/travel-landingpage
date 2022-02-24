import * as React from 'react';
import Button from '@/components/Button';
import { BsSearch } from 'react-icons/bs';

export default function FormInput({ children }: { children: React.ReactNode }) {
	return (
		<div className='relative mt-16 flex justify-center items-center bg-secondary-500 p-4 rounded-full'>
			<div className='absolute bg-secondary-500 px-10 py-3 rounded-full -top-7'>
				<h3 className='text-base text-white'>Get the schedule</h3>
			</div>
			<div className='mt-4 w-full flex justify-between items-center'>
				<div className='flex sm:flex-1 flex-wrap sm:flex-row sm:justify-cente items-cente '>
					{children}
				</div>

				<div className='w-20 flex justify-center'>
					<Button className='ml- p-4 w-12 h-12 sm:w-16 sm:h-16 rounded-full z-10 flex justify-center items-center'>
						<BsSearch className='w-5 h-5' />
					</Button>
				</div>
			</div>
		</div>
	);
}
