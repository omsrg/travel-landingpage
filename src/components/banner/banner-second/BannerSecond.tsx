import Section from '@/components/Section';
import * as React from 'react';

export default function BannerSecond() {
	return (
		<Section>
			<div className='my-10 bg-primary-500 p-4 md:p-8 lg:p-12 xl:px-36 xl:py-12 flex flex-col sm:flex-row justify-between rounded-lg'>
				<div className='text-dark flex flex-col'>
					<h1 className='heading'>ARE YOU NEW MEMBER FOR THIS TRIP ? </h1>
					<p className='text-lg my-4'>Let&apos;s register now and get cashback</p>

					<h3 className='text-2xl px-8 py-2 md:my-4 w-56 text-center bg-primary-400 rounded-md'>
						UP TO 20%
					</h3>
				</div>
				<div className='flex justify-center items-center mt-6 sm:mt-0'>
					<button className='px-8 py-4 text-xl uppercase bg-secondary-500 text-white font-semibold rounded-full'>
						register
					</button>
				</div>
			</div>
		</Section>
	);
}
