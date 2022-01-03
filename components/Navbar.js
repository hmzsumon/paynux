/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import { FaUser, FaQuestion } from 'react-icons/fa';
import { AiOutlineMenu, AiOutlineMenuFold } from 'react-icons/ai';
import { MdOutlineMenuOpen, MdClose } from 'react-icons/md';

const Navbar = () => {
	const [isOpen, setIsOpen] = React.useState(false);
	console.log(isOpen);
	return (
		<>
			<nav className='fixed top-0  inset-x-0  flex items-center flex-wrap bg-white shadow-lg p-3  justify-between px-6'>
				<div className='flex items-center justify-start space-x-6  md:space-x-6 '>
					<MdOutlineMenuOpen
						className='text-3xl md:hidden cursor-pointer'
						onClick={() => setIsOpen(!isOpen)}
					/>
					<Link href='/'>
						<a className='inline-flex items-center p-2 mr-4 '>
							<img src='./pynux_logo.png' alt='logo' className=' w-40 ' />
						</a>
					</Link>
				</div>

				{/* <div className=' space-x-4 md:hidden'>
					<Link href='/'>
						<a className='text-xl font-medium text-my_color2'>Login</a>
					</Link>
					<Link href='/'>
						<a className='text-xl font-medium text-my_color2'>Register</a>
					</Link>
				</div> */}

				<div className='hidden md:flex items-center space-x-6'>
					<h1 className='text-xl font-bold text-my_color2 opacity-70 cursor-pointer'>
						Business
					</h1>
					<div className='flex items-center'>
						<FaQuestion className='text-my_color2  ring-2 rounded-full p-1 text-2xl ring-my_color1' />
						<Link href='/login'>
							<a className='inline-flex items-center p-2 text-my_color2 text-xl font-medium'>
								Help
							</a>
						</Link>
					</div>
					<div className='flex items-center'>
						<FaUser className='text-my_color2  ring-2 rounded-full p-1 text-2xl ring-my_color1' />
						<Link href='/login'>
							<a className='inline-flex items-center p-2 text-my_color2 text-xl font-medium'>
								Login
							</a>
						</Link>
					</div>
					<button className='bg-gradient-to-r from-my_color1 to-my_color2 py-1 px-8 text-white text-xl font-medium rounded'>
						Register
					</button>
					<AiOutlineMenu className='text-3xl' />
				</div>
				{/* <AiOutlineMenu className='text-3xl md:hidden cursor-pointer' /> */}
			</nav>
			{/* Mobile Menu */}
			<div
				className={`bg-gray-200  inset-y-0 md:hidden transition duration-300 ease-in-out absolute top-0 w-7/12 ${
					isOpen ? 'translate-x-0' : '-translate-x-full'
				}`}
			>
				<div className='flex items-center justify-around border-gray-400 border-b-2 px-4 py-2'>
					<Link href='/'>
						<a className='inline-flex items-center p-2 mr-4 '>
							<img src='./pynux_logo.png' alt='logo' className=' w-40 ' />
						</a>
					</Link>

					<MdClose
						className='text-2xl text-my_color2 font-bold ring-2 rounded-full p-1 cursor-pointer '
						onClick={() => setIsOpen(!isOpen)}
					/>
				</div>
			</div>
		</>
	);
};

export default Navbar;
