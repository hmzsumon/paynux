/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import React from 'react';

const Login = () => {
	return (
		<div className='h-screen pt-4 bg-gray-200 md:h-full md:bg-gradient-to-r from-s_color2 to-s_color1'>
			<div className='container flex items-center justify-center h-full px-4 space-y-8 md:h-screen '>
				{/* Form Section */}
				<div className='w-full mx-auto '>
					<form className='max-w-lg px-8 pt-6 pb-8 mx-auto mb-4 space-y-10 bg-white rounded-lg shadow-md '>
						<div>
							<h1 className='text-2xl font-semibold text-center text-gray-700'>
								Log in to your Paynux account
							</h1>
							<p className='mt-3 text-center'>
								Don't have an account? <span>Register</span>{' '}
							</p>
						</div>

						{/* Email */}

						<div className='flex items-center col-span-3 py-2 bg-gray-200 border-b border-gray-700 rounded-t-md'>
							<input
								className='w-full px-2 py-1 mr-3 leading-tight text-gray-700 bg-transparent border-none appearance-none focus:outline-none'
								type='text'
								placeholder='Email'
								aria-label='Full name'
							/>
						</div>

						{/* Password */}

						<div className='flex items-center py-2 bg-gray-200 border-b border-gray-700 c rounded-t-md'>
							<input
								className='w-full px-2 py-1 mr-3 leading-tight text-gray-700 bg-transparent border-none appearance-none focus:outline-none'
								type='text'
								placeholder='Password'
								aria-label='Full name'
							/>
						</div>

						{/* Submit */}
						<button className='w-full px-8 py-2 text-xl font-medium text-white rounded bg-gradient-to-r from-my_color1 to-my_color2'>
							Register
						</button>
						<p className='font-semibold text-center text-my_color2'>
							<Link href='/'>
								<a>Forgot your password?</a>
							</Link>
						</p>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
