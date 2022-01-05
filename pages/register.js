/* eslint-disable @next/next/no-img-element */
import React from 'react';

const Register = () => {
	return (
		<div className='h-full pt-4 bg-gray-200 md:bg-gradient-to-r from-s_color2 to-s_color1'>
			<div className='container grid items-center justify-center h-full px-4 space-y-8 md:h-screen md:grid-cols-2'>
				{/* Typography */}
				<div className='space-y-6 '>
					<div className='space-y-6 text-center'>
						<h1 className='h1'>Your cash made digital.</h1>
						<h1 className='h1'>Pay, send, receive.</h1>
					</div>
					<div className='grid items-center w-full grid-cols-5 p-6 mx-auto rounded-md sm:7/12 md:w-9/12 bg-r_card_color'>
						<div className='col-span-2 '>
							<img src='./images/promo-banner-icon.svg' alt='Icon' />
						</div>
						<div className='col-span-3 '>
							<p className='text-xl font-semibold text-white'>
								Join millions who already use Skrill to safely pay online and
								send money anywhere in the world.
							</p>
						</div>
					</div>
				</div>
				{/* Form Section */}
				<div className='w-full mx-auto '>
					<form className='max-w-lg px-8 pt-6 pb-8 mx-auto mb-4 bg-white rounded shadow-md space-y-7 '>
						<div>
							<h1 className='text-2xl font-semibold text-center text-gray-700'>
								Register
							</h1>
							<p className='mt-3 text-center'>
								Already have an account? <span>Log in</span>{' '}
							</p>
						</div>

						<div className='flex items-center justify-between space-x-5'>
							{/* Fist Name */}
							<div className='relative flex flex-col px-4 py-2 bg-gray-200 border-b border-gray-700 rounded-t-md'>
								<input
									className='w-full px-2 py-1 mr-3 leading-tight text-gray-700 bg-transparent border-none appearance-none peer focus:outline-none'
									type='text'
									placeholder='First Name'
									aria-label='Full name'
								/>
							</div>

							{/* Last Name */}
							<div className='flex items-center py-2 bg-gray-200 border-b border-gray-400 rounded-t-md'>
								<input
									className='w-full px-2 py-1 mr-3 leading-tight bg-transparent border-none appearance-none focus:outline-none'
									type='text'
									placeholder='Last Name'
									aria-label='Full name'
								/>
							</div>
						</div>

						{/* Country */}
						<div className='grid items-center justify-between grid-cols-4 space-x-4'>
							<div className='flex items-center col-span-3 py-2 bg-gray-200 border-b border-gray-700 rounded-t-md'>
								<input
									className='w-full px-2 py-1 mr-3 leading-tight text-gray-700 bg-transparent border-none appearance-none focus:outline-none'
									type='text'
									placeholder='Country'
									aria-label='Full name'
								/>
							</div>
							<div className='flex items-center col-span-1 py-2 bg-gray-200 border-b border-gray-700 rounded-t-md'>
								<input
									className='w-full px-2 py-1 mr-3 leading-tight text-gray-700 bg-transparent border-none appearance-none focus:outline-none'
									type='text'
									placeholder='Last Name'
									aria-label='Full name'
								/>
							</div>
						</div>

						{/* Email */}
						<div className='flex items-center justify-between space-x-4'>
							<div className='flex items-center col-span-3 py-2 bg-gray-200 border-b border-gray-700 rounded-t-md'>
								<input
									className='w-full px-2 py-1 mr-3 leading-tight text-gray-700 bg-transparent border-none appearance-none focus:outline-none'
									type='text'
									placeholder='Email'
									aria-label='Full name'
								/>
							</div>
							<div className='flex items-center col-span-1 py-2 bg-gray-200 border-b border-gray-700 rounded-t-md'>
								<input
									className='w-full px-2 py-1 mr-3 leading-tight text-gray-700 bg-transparent border-none appearance-none focus:outline-none'
									type='text'
									placeholder='Phone Number'
									aria-label='Full name'
								/>
							</div>
						</div>

						{/* Password */}
						<div className='flex items-center justify-between space-x-4 '>
							<div className='flex items-center col-span-3 py-2 bg-gray-200 border-b border-gray-700 rounded-t-md'>
								<input
									className='w-full px-2 py-1 mr-3 leading-tight text-gray-700 bg-transparent border-none appearance-none focus:outline-none'
									type='text'
									placeholder='Password'
									aria-label='Full name'
								/>
							</div>
							<div className='flex items-center col-span-1 py-2 bg-gray-200 border-b border-gray-700 rounded-t-md'>
								<input
									className='w-full px-2 py-1 mr-3 leading-tight text-gray-700 bg-transparent border-none appearance-none focus:outline-none'
									type='text'
									placeholder='Confirm Password'
									aria-label='Full name'
								/>
							</div>
						</div>

						{/* Submit */}
						<button className='w-full px-8 py-2 text-xl font-medium text-white rounded bg-gradient-to-r from-my_color1 to-my_color2'>
							Register
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Register;
