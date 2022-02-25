import * as React from 'react';
import { BsFillCalendarFill } from 'react-icons/bs';

export default function InputDate() {
	return (
		<div className='flex w flex-col tems-center'>
			<p className='mb-1 text-tundora-400'>Date</p>
			<input type='date' className='px-2 py- w-full font-bold rounded-md focus:ring-0 border-0' />
		</div>
	);
}
