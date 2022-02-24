import * as React from 'react';

export default function InputLocation() {
	return (
		<div className='flex flex-col tems-center mb-4 sm:mb-0 mr-8'>
			<p className=' mb-1 text-tundora-400'>Location</p>
			<select className='appearance-none py- font-bold rounded-md focus:ring-0 border-0'>
				<option value=''>Jakarta, indonesia</option>
				<option value=''>Bali, indonesia</option>
				<option value=''>Yogyakarta, indonesia</option>
			</select>
		</div>
	);
}
