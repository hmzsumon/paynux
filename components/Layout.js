import Head from 'next/head';
import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
	return (
		<>
			<Head>
				<title>Paynux</title>
				<meta
					name='description'
					content='Paynux is a platform for businesses to manage their finances.'
				/>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
				<meta property='og:image' content='./pynux_logo.png' />
			</Head>
			<Navbar />
			{children}
		</>
	);
};

export default Layout;
