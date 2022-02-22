import * as React from 'react';
import Section from '../Section';
import SectionHeading from '../section-heading';
import Service from './service';
import ServicesItem from './ServicesItem';

export default function Services() {
	return (
		<Section>
			<div className='container service-wrapper'>
				<div className='text-center'>
					<SectionHeading
						title='what we serve'
						heading='Top Values For You'
						subheading='The best service that will be with you every time'
					/>
				</div>
				<ServicesItem>
					<Service
						title='Lot of Choises'
						desc='Total of more than 450 destinations in various countries in the world become partners
							with us'
					/>
					<Service
						title='Easy Booking'
						desc='There are 3 guides for each destination in the place you visit'
					/>
					<Service
						title='Lot of Choises'
						desc='We provide all services online which can be accessed easily through our website'
					/>
					<Service
						title='Luxury Hotel'
						desc='We also provide lodging near the destination where you are visiting.'
					/>
				</ServicesItem>
			</div>
		</Section>
	);
}
