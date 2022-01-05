import Head from 'next/head';
import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
	return (
		<>
			<Head>
				<title>Paynux</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			</Head>
			<Navbar />
			{children}
		</>
	);
};

export default Layout;
