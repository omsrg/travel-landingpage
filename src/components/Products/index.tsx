import * as React from 'react';
import Section from '../Section';
import SectionHeading from '../section-heading';
import ProductCard from './ProductCard';
import ProductsItems from './ProductsItems';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

export default function Products() {
	return (
		<Section>
			<div className='mt-20'>
				<div className='flex justify-between items-center'>
					<div className='title-produk' data-aos='fade-right'>
						<SectionHeading title='Top destination' heading='Explore Top Destination' />
					</div>
					<div className='toggle-slider' data-aos='fade-left'>
						<i className='bx bxs-chevron-left-circle'></i>
						<i className='bx bxs-chevron-right-circle'></i>
					</div>
				</div>

				<ProductsItems>
					<Swiper
						modules={[Autoplay, Pagination]}
						spaceBetween={30}
						slidesPerView={4}
						loop={true}
						// slidesPerGroup={3}
						// loopFillGroupWithBlank={true}
						autoplay={{
							delay: 3000,
							disableOnInteraction: false,
						}}
						pagination={{
							clickable: true,
						}}
					>
						<SwiperSlide>
							<ProductCard
								category='Beach'
								price={100}
								location='Kuta, Indonesia'
								description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta adipisci qui
								nesciunt totam vel nihil id est corporis voluptatum sunt.'
							/>
						</SwiperSlide>

						<SwiperSlide>
							<ProductCard
								category='Building'
								price={250}
								location='Bangkok, Thailand'
								description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta adipisci qui
								nesciunt totam vel nihil id est corporis voluptatum sunt.'
							/>
						</SwiperSlide>

						<SwiperSlide>
							<ProductCard
								category='Beach'
								price={300}
								location='Yogyakarta, Indonesia'
								description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta adipisci qui
								nesciunt totam vel nihil id est corporis voluptatum sunt.'
							/>
						</SwiperSlide>
						<SwiperSlide>
							<ProductCard
								category='Beach'
								price={400}
								location='Yogyakarta, Indonesia'
								description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta adipisci qui
								nesciunt totam vel nihil id est corporis voluptatum sunt.'
							/>
						</SwiperSlide>
						<SwiperSlide>
							<ProductCard
								category='Beach'
								price={500}
								location='Yogyakarta, Indonesia'
								description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta adipisci qui
								nesciunt totam vel nihil id est corporis voluptatum sunt.'
							/>
						</SwiperSlide>
						<SwiperSlide>
							<ProductCard
								category='Beach'
								price={600}
								location='Yogyakarta, Indonesia'
								description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta adipisci qui
								nesciunt totam vel nihil id est corporis voluptatum sunt.'
							/>
						</SwiperSlide>
						<SwiperSlide>
							<ProductCard
								category='Beach'
								price={700}
								location='Yogyakarta, Indonesia'
								description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta adipisci qui
								nesciunt totam vel nihil id est corporis voluptatum sunt.'
							/>
						</SwiperSlide>
					</Swiper>
				</ProductsItems>
			</div>
		</Section>
	);
}
