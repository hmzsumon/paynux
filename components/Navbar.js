/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import { FaUser, FaQuestion } from 'react-icons/fa';
import { AiOutlineMenu } from 'react-icons/ai';
import {
	MdOutlineMenuOpen,
	MdClose,
	MdAppRegistration,
	MdOutlineLogin,
} from 'react-icons/md';

const Navbar = () => {
	const [isOpen, setIsOpen] = React.useState(false);
	console.log(isOpen);
	return (
		<>
			<nav className='fixed inset-x-0 top-0 flex flex-wrap items-center justify-between p-3 px-6 bg-white shadow-lg'>
				<div className='flex items-center justify-start space-x-6 md:space-x-6 '>
					<MdOutlineMenuOpen
						className='text-3xl cursor-pointer md:hidden'
						onClick={() => setIsOpen(!isOpen)}
					/>
					<Link href='/'>
						<a className='inline-flex items-center p-2 mr-4 '>
							<img src='./pynux_logo.png' alt='logo' className='w-40 ' />
						</a>
					</Link>
				</div>

				{/* <div className='space-x-4 md:hidden'>
					<Link href='/'>
						<a className='text-xl font-medium text-my_color2'>Login</a>
					</Link>
					<Link href='/'>
						<a className='text-xl font-medium text-my_color2'>Register</a>
					</Link>
				</div> */}

				<div className='items-center hidden space-x-6 md:flex'>
					<h1 className='text-xl font-bold cursor-pointer text-my_color2 opacity-70'>
						Business
					</h1>
					<div className='flex items-center'>
						<FaQuestion className='p-1 text-2xl rounded-full text-my_color2 ring-2 ring-my_color1' />
						<Link href='/login'>
							<a className='inline-flex items-center p-2 text-xl font-medium text-my_color2'>
								Help
							</a>
						</Link>
					</div>
					<div className='flex items-center'>
						<FaUser className='p-1 text-2xl rounded-full text-my_color2 ring-2 ring-my_color1' />
						<Link href='/login'>
							<a className='inline-flex items-center p-2 text-xl font-medium text-my_color2'>
								Login
							</a>
						</Link>
					</div>

					<Link href='/register'>
						<a className='px-8 py-1 text-xl font-medium text-white rounded bg-gradient-to-r from-my_color1 to-my_color2'>
							Register
						</a>
					</Link>

					<AiOutlineMenu className='text-3xl' />
				</div>
				{/* <AiOutlineMenu className='text-3xl cursor-pointer md:hidden' /> */}
			</nav>
			{/* Mobile Menu */}
			<div
				className={`bg-gradient-to-r from-my_color1 to-my_color2 inset-y-0 md:hidden transition duration-300 ease-in-out absolute top-0 w-9/12 ${
					isOpen ? 'translate-x-0' : '-translate-x-full'
				}`}
			>
				<div className='flex items-center justify-between px-4 py-2 border-b-2 border-gray-400'>
					<Link href='/'>
						<a className='inline-flex items-center p-2 mr-4 '>
							<img src='./pynux_logo.png' alt='logo' className=' w-36' />
						</a>
					</Link>

					<MdClose
						className='text-3xl font-bold text-red-500 transition duration-300 ease-in-out cursor-pointer hover:scale-125'
						onClick={() => setIsOpen(!isOpen)}
					/>
				</div>

				<div className='pl-2 '>
					<div className='flex items-center space-x-2'>
						<MdOutlineLogin />
						<Link href='/'>
							<a className='text-xl font-medium text-white'>Login</a>
						</Link>
					</div>
					<div className='flex items-center space-x-2'>
						<MdAppRegistration />
						<Link href='/register'>
							<a className='text-xl font-medium text-white'>Register</a>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
