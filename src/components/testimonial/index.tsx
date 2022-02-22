import * as React from 'react';
import Section from '../Section';
import SectionHeading from '../section-heading';
import TestimoniSection from './testimoni-section';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import Image from 'next/image';

export default function Testimonial() {
	return (
		<Section>
			<div className='grid grid-cols-12 gap-6 py-40'>
				<div className='col-span-5' data-aos='fade-right'>
					<SectionHeading
						title='what they said ?'
						heading='What customers say about their experience with us'
						subheading='They say what they feel, most of them say they are very satisfied, especially satisfied
					because they are always guided and directed to between destinations so that they are not
					confused, and also the provision of comfortable lodging does not have to pay a lot to get
					it all'
					/>
				</div>

				<div className='col-start-7 col-span-6' data-aos='fade-left '>
					<TestimoniSection>
						<div className='bg-white font-opensans px-8 py-6 text-center rounded-lg'>
							<Image src='/img/testi.png' alt='' width={80} height={80} objectFit='contain' />
							<div className='relative'>
								<FaQuoteLeft className='w-4 h-4 absolute top-0' />
								<p className='p-4 text-tundora-500'>
									I am very helpful with this trouravel, because we can easily get it all without
									having to prepare it from afar, and also the price is affordable, highly
									recommended.
								</p>
								<FaQuoteRight className='w-4 h-4 absolute bottom-0 right-0' />
							</div>
							<p className='font-semibold text-tundora-500'>by tinyleopard720</p>
							<p className='text-primary-500'>Traveller</p>
						</div>
					</TestimoniSection>
				</div>
			</div>
		</Section>
	);
}
