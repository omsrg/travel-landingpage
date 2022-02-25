import * as React from 'react';
import Section from '../Section';
import SectionHeading from '../SectionHeading/SectionHeading';
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
			<div className='md:grid md:grid-cols-12 md:gap-6 my-20 md:y-32'>
				<div className='  md:col-span-5' data-aos='fade-right'>
					<SectionHeading
						title='what they said ?'
						heading='What customers say about their experience with us'
						subheading='They say what they feel, most of them say they are very satisfied, especially satisfied
					because they are always guided and directed to between destinations so that they are not
					confused, and also the provision of comfortable lodging does not have to pay a lot to get
					it all'
					/>
				</div>

				<div className='md:col-start-7 md:col-span-6 mt-10'>
					{/* <TestimoniSection> */}
					<Swiper
						modules={[Autoplay, Pagination, Navigation]}
						spaceBetween={50}
						centeredSlides={true}
						// loop={true}
						// navigation={true}
						autoplay={{
							delay: 4000,
							disableOnInteraction: false,
						}}
						pagination={{
							clickable: true,
						}}
						// breakpoints={{
						// 	// when window width is >= 640px
						// 	640: {
						// 		width: 640,
						// 		slidesPerView: 1,
						// 	},
						// 	// when window width is >= 768px
						// 	768: {
						// 		width: 768,
						// 		slidesPerView: 1,
						// 	},
						// }}
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
					{/* </TestimoniSection> */}
				</div>
			</div>
		</Section>
	);
}
