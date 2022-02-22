import * as React from 'react';
import { AiFillInstagram, AiOutlineWhatsApp, AiFillTwitterCircle } from 'react-icons/ai';
import { BsFacebook, BsFillSuitHeartFill } from 'react-icons/bs';
import Button from '../Button';
import UnstyledLink from '../UnstyledLink';
import FooterColumn from './footer-column';

export default function Footer() {
	return (
		<footer className='max-w-screen-2xl w-11/12 mx-auto mt-40 mb-20' id='footer'>
			<div className='grid grid-cols-12 text-black'>
				<div className='col-span-4'>
					<h1 className='text-5xl text-secondary-500'>
						Tour<span className='text-3xl text-primary-500'>avel.</span>
					</h1>
					<p className='my-2 font-semibold'>
						The best service to customers is our top priority in building a business
					</p>
					<div className='flex space-x-4 my-8 text-secondary-500'>
						<AiFillInstagram className='w-10 h-10' />
						<AiOutlineWhatsApp className='w-10 h-10' />
						<BsFacebook className='w-9 h-9' />
						<AiFillTwitterCircle className='w-10 h-10' />
					</div>

					<div className='text-black font-opensans'>
						<p className='font-semibold'>
							Ompi T Siregar &copy; {new Date().getFullYear()}.<p>Made with ❤️ by Ompi.</p>
						</p>
						<p className='py-2 text-sm'>Designed by Mardha Mardiya</p>
					</div>
				</div>

				<div className=' col-start-6 col-span-7 flex space-x-12'>
					<FooterColumn groupTitle='About'>
						<UnstyledLink href='#'>About us</UnstyledLink>
						<UnstyledLink href='#'>Features</UnstyledLink>
						<UnstyledLink href='#'>News</UnstyledLink>
						<UnstyledLink href='#'>Menu</UnstyledLink>
					</FooterColumn>

					<FooterColumn groupTitle='Company'>
						<UnstyledLink href='#'>Why Touravel ?</UnstyledLink>
						<UnstyledLink href='#'>Partners with us</UnstyledLink>
						<UnstyledLink href='#'>FAQ</UnstyledLink>
						<UnstyledLink href='#'>Blogs</UnstyledLink>
					</FooterColumn>

					<FooterColumn groupTitle='Support'>
						<UnstyledLink href='#'>Account</UnstyledLink>
						<UnstyledLink href='#'>Support Center</UnstyledLink>
						<UnstyledLink href='#'>Feedback</UnstyledLink>
						<UnstyledLink href='#'>Contact Us</UnstyledLink>
						<UnstyledLink href='#'>Accessbility</UnstyledLink>
					</FooterColumn>

					<FooterColumn groupTitle='Get in touch' className='grow'>
						<p>Questions or Feedback</p>
						<div className='relative flex items-center w-full'>
							<input
								type='text'
								placeholder='Type your email'
								className='w-full border-none focus:ring-0 rounded-md p-2 py-3'
							/>
							<Button className='px-4 py-2 bg-primary-500 rounded-md absolute right-2'>
								Submit
							</Button>
						</div>
					</FooterColumn>
				</div>
			</div>
		</footer>
	);
}
