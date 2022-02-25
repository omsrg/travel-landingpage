import * as React from 'react';
import Section from '../Section';
import SectionHeading from '../SectionHeading';
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
			<div className='mt-20' id='pricing'>
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
						spaceBetween={5}
						slidesPerView={1}
						centeredSlides={true}
						loop={true}
						autoplay={{
							delay: 3000,
							disableOnInteraction: false,
						}}
						pagination={{
							clickable: true,
						}}
						breakpoints={{
							640: {
								slidesPerView: 2,
								spaceBetween: 30,
							},

							1024: {
								slidesPerView: 4,
								spaceBetween: 30,
							},
						}}
					>
						{ProductCards.map((item, idx) => (
							<SwiperSlide key={idx}>
								<ProductCard
									category={item.category}
									price={item.price}
									location={item.location}
									image={item.image}
									description={item.description}
								/>
							</SwiperSlide>
						))}
					</Swiper>
				</ProductsItems>
			</div>
		</Section>
	);
}

const ProductCards = [
	{
		category: 'beach',
		price: 299,
		location: 'Kuta, Indonesia',
		image: '/img/kuta.jpg',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta adipisci qui	nesciunt totam vel nihil id est corporis voluptatum sunt.',
	},
	{
		category: 'beach',
		price: 499,
		location: 'Raja Ampat, Indonesia',
		image: '/img/raja-ampat.jpg',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta adipisci qui	nesciunt totam vel nihil id est corporis voluptatum sunt.',
	},
	{
		category: 'building',
		price: 299,
		location: 'Yogyakarta, Indonesia',
		image: '/img/borobudur.jpg',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta adipisci qui	nesciunt totam vel nihil id est corporis voluptatum sunt.',
	},
	{
		category: 'snow',
		price: 699,
		location: 'Zermatt, Swiss',
		image: '/img/zermat-swiss.jpg',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta adipisci qui	nesciunt totam vel nihil id est corporis voluptatum sunt.',
	},
	{
		category: 'beach',
		price: 399,
		location: 'Lombok, Indonesia',
		image: '/img/lombok.jpg',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta adipisci qui	nesciunt totam vel nihil id est corporis voluptatum sunt.',
	},
];
