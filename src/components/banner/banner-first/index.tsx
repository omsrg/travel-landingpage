import * as React from 'react';
import Button from '../../Button';
import Section from '../../Section';

export default function BannerFirst() {
	return (
		<Section>
			<div className='my-52 bg-secondary-500 px-36 py-12 flex justify-between rounded-lg'>
				<div className='text-white flex flex-col items-center'>
					<h1 className=''>SPECIAL OFFER</h1>
					<h3 className='font-opensans text-2xl px-8 py-1 my-4 font-medium bg-secondary-400 rounded-md'>
						Family Weeked Package
					</h3>
					<p className='font-opensans text-lg'>Off up to 30%</p>
				</div>
				<div className='flex items-center'>
					<Button className='px-8 py-4 text-xl font-semibold rounded-full'>Book Now</Button>
				</div>
			</div>
		</Section>
	);
}
