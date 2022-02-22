import Section from '@/components/Section';
import * as React from 'react';

export default function BannerSecond() {
	return (
		<Section>
			<div className='my-10 bg-primary-500 px-36 py-12 flex justify-between rounded-lg'>
				<div className='text-dark flex flex-col'>
					<h1 className='heading'>ARE YOU NEW MEMBER FOR THIS TRIP ? </h1>
					<p className='text-lg my-4'>Let&apos;s register now and get cashback</p>

					<h3 className='text-2xl px-8 py-2 my-4 w-56 text-center bg-primary-400 rounded-md'>
						UP TO 20%
					</h3>
				</div>
				<div className='flex items-center'>
					<button className='px-8 py-4 text-xl uppercase bg-secondary-500 text-white font-semibold rounded-full'>
						register
					</button>
				</div>
			</div>
		</Section>
	);
}
