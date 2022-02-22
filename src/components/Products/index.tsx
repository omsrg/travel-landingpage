import * as React from 'react';
import Section from '../Section';
import ProductCard from './ProductCard';
import ProductsItems from './ProductsItems';

export default function Products() {
	return (
		<Section>
			<div className='mt-20'>
				<div className='flex justify-between items-center'>
					<div className='title-produk' data-aos='fade-right'>
						<h2 className='text-xl text-primary-500 uppercase'>TOP DESTINATION</h2>
						<h1 className='text-5xl text-tundora-500 my-3'>Explore Top Destination</h1>
					</div>
					<div className='toggle-slider' data-aos='fade-left'>
						<i className='bx bxs-chevron-left-circle'></i>
						<i className='bx bxs-chevron-right-circle'></i>
					</div>
				</div>

				<ProductsItems>
					<ProductCard
						category='Beach'
						price={300}
						location='Kuta, Indonesia'
						description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta adipisci qui
								nesciunt totam vel nihil id est corporis voluptatum sunt.'
					/>

					<ProductCard
						category='Building'
						price={250}
						location='Bangkok, Thailand'
						description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta adipisci qui
								nesciunt totam vel nihil id est corporis voluptatum sunt.'
					/>

					<ProductCard
						category='Beach'
						price={300}
						location='Yogyakarta, Indonesia'
						description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta adipisci qui
								nesciunt totam vel nihil id est corporis voluptatum sunt.'
					/>
				</ProductsItems>
			</div>
		</Section>
	);
}
