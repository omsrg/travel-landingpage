import Image from 'next/image';
import * as React from 'react';
import Section from '../Section';
import SectionHeading from '../SectionHeading';
import StatisticNumber from './StatisticNumber';

export default function Statistic() {
	return (
		<Section>
			<div className='grid grid-cols-12 gap-8'>
				<div className='col-span-5' data-aos='fade-right'>
					<Image src='/img/statistik.png' alt='' width={705} height={726} objectFit='contain' />
				</div>

				<div className='col-start-7 col-span-5' data-aos='fade-left'>
					<SectionHeading
						title='our performance'
						heading='Most people are satisfied with our service'
						subheading='We always provide the best service to customers, we will direct you from ordering
						tickets to the journey'
					/>

					<div className='flex justify-center gap-8 mt-8'>
						<StatisticNumber value='20' label='Years Experience' />
						<StatisticNumber value='300++' label='Destination Collaboration' />
						<StatisticNumber value='2k++' label='Customers Happy' />
					</div>
				</div>
			</div>
		</Section>
	);
}
