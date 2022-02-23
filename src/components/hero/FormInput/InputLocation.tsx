import * as React from 'react';
import { MdLocationOn } from 'react-icons/md';

export default function InputLocation() {
	return (
		<div className='relative flex items-center space-x-2 mr-8'>
			<div className='location'>
				<p className='text-base mb-1 text-tundora-400'>Location</p>
				<select className='appearance-none px-2 py-1 font-bold rounded-md focus:ring-0 border-0'>
					<option value=''>Jakarta, indonesia</option>
					<option value=''>Bali, indonesia</option>
					<option value=''>Yogyakarta, indonesia</option>
				</select>
			</div>
		</div>
	);
}
