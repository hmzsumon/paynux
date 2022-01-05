import Head from 'next/head';
import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
	return (
		<>
			<Head>
				<title>Paynux</title>
				<meta
					property='og:image'
					content='https://i.ibb.co/bP1ymdx/pynux-logo.png'
				/>
				<meta
					name='description'
					content='Paynux is a platform for businesses to manage their finances.'
				/>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			</Head>
			<Navbar />
			{children}
		</>
	);
};

export default Layout;
