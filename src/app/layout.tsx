import Footer from '@/components/Footer';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import classNames from 'classnames';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Landed by HTML5 UP',
	viewport: 'width=device-width, initial-scale=1, user-scalable=no',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={classNames(inter.className, 'is-preload')}>
				{children}
				<Footer />
			</body>
			<Script src="/scripts/jquery.min.js"></Script>
			<Script src="/scripts/jquery.scrolly.min.js"></Script>
			<Script src="/scripts/jquery.dropotron.min.js"></Script>
			<Script src="/scripts/jquery.scrollex.min.js"></Script>
			<Script src="/scripts/browser.min.js"></Script>
			<Script src="/scripts/breakpoints.min.js"></Script>
			<Script src="/scripts/util.js"></Script>
			<Script src="/scripts/main.js"></Script>
		</html>
	);
}
