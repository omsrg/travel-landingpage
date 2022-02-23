import * as React from 'react';
import Section from '../Section';
import SectionHeading from '../SectionHeading';
import TestimoniSection from './TestimoniSection';
import TestimoniCard from './TestimoniCard';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

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
						<Swiper
							modules={[Autoplay, Pagination, Navigation]}
							spaceBetween={30}
							slidesPerView={1}
							loop={true}
							navigation={true}
							autoplay={{
								delay: 4000,
								disableOnInteraction: false,
							}}
							pagination={{
								clickable: true,
							}}
						>
							<SwiperSlide>
								<TestimoniCard name='Lindsey' job='Traveller' image='/img/person-1.jpg' />
							</SwiperSlide>
							<SwiperSlide>
								<TestimoniCard name='Anitha' job='Influencer' image='/img/person-2.jpg' />
							</SwiperSlide>
							<SwiperSlide>
								<TestimoniCard
									name='Jonathan Larry'
									job='Product Manager'
									image='/img/person-3.jpg'
								/>
							</SwiperSlide>
							<SwiperSlide>
								<TestimoniCard
									name='Oliver Braithwaite'
									job='Photographer'
									image='/img/person-4.jpg'
								/>
							</SwiperSlide>
							<SwiperSlide>
								<TestimoniCard name='Jelitha Amira' job='Traveller' image='/img/person-5.jpg' />
							</SwiperSlide>
						</Swiper>
					</TestimoniSection>
				</div>
			</div>
		</Section>
	);
}
