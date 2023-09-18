import '@/styles/dropotron.css';
import styles from '@/styles/Header.module.css';
import classNames from 'classnames';
import Link from 'next/link';
import Button from './Button';

interface IHeaderProps {
	landing?: boolean;
}

const Header = ({ landing }: IHeaderProps) => {
	const headerClasses = landing
		? classNames(styles.header, styles.landing)
		: styles.header;

	return (
		<header className={headerClasses}>
			<h1 className={styles.logo} id="logo">
				<Link href="/">Landed</Link>
			</h1>
			<nav className={styles.nav} id="nav">
				<ul className={styles.tabs}>
					<li className={styles.tab}>
						<Link href="/">Home</Link>
					</li>
					<li className={classNames(styles.tab, 'opener')}>
						<Link href="#">Layouts</Link>
						<ul className={styles.tabs}>
							<li>
								<Link href="/left-sidebar">Left Sidebar</Link>
							</li>
							<li>
								<Link href="/right-sidebar">Right Sidebar</Link>
							</li>
							<li>
								<Link href="/no-sidebar">No Sidebar</Link>
							</li>
							<li>
								<Link href="#">Submenu</Link>
								<ul className={styles.tabs}>
									<li>
										<Link href="#">Option 1</Link>
									</li>
									<li>
										<Link href="#">Option 2</Link>
									</li>
									<li>
										<Link href="#">Option 3</Link>
									</li>
									<li>
										<Link href="#">Option 4</Link>
									</li>
								</ul>
							</li>
						</ul>
					</li>
					<li className={styles.tab}>
						<Link href="/elements">Elements</Link>
					</li>
					<li className={styles.tab}>
						<Button
							href="#"
							text="Sign Up"
							primary={true}
							className={styles.button}
						/>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
