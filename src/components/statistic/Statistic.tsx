import Image from 'next/image';
import * as React from 'react';
import Section from '../Section';
import SectionHeading from '../SectionHeading/SectionHeading';
import StatisticNumber from './StatisticNumber';

export default function Statistic() {
	return (
		<Section>
			<div className='grid md:grid-cols-12 md:gap-8'>
				<div className='col-span-5 hidden md:block' data-aos='fade-right'>
					<Image src='/img/statistik.png' alt='' width={705} height={726} objectFit='contain' />
				</div>

				<div
					className='md:col-start-7 md:col-span-6 xl:col-start-7 xl:col-span-5'
					data-aos='fade-left'
				>
					<SectionHeading
						title='our performance'
						heading='Most people are satisfied with our service'
						subheading='We always provide the best service to customers, we will direct you from ordering
						tickets to the journey'
					/>

					<div className='flex flex-wrap justify-center gap-8 mt-8'>
						<StatisticNumber value='20' label='Years Experience' />
						<StatisticNumber value='300++' label='Destination Collaboration' />
						<StatisticNumber value='2k++' label='Customers Happy' />
					</div>
				</div>
			</div>
		</Section>
	);
}
