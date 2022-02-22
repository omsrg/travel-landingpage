import * as React from 'react';
import { BsFillCalendarFill } from 'react-icons/bs';

export default function InputDate() {
	const today = new Date();
	const date = today.setDate(today.getDate());
	const defaultValue = new Date(date).toISOString().split('T')[0];
	return (
		<div className='relative flex items-center space-x-4'>
			{/* <BsFillCalendarFill className='w-6 h-6 text-secondary-500' /> */}
			<div className='date'>
				<p className='mb-1 text-tundora-400'>Date</p>
				<input
					type='date'
					defaultValue={defaultValue}
					className='px-2 py-1 w-max font-bold rounded-md focus:ring-0 border-0'
				/>
			</div>
		</div>
	);
}
