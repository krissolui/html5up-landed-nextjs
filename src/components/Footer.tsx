import styles from '@/styles/Footer.module.css';
import classNames from 'classnames';
import Icon from './Icon';
import Link from 'next/link';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<ul className={styles.icons}>
				<li>
					<Icon
						label="Twitter"
						icon="fa-twitter"
						href="#"
						alt={true}
						brands={true}
					/>
				</li>
				<li>
					<Icon
						label="Facebook"
						icon="fa-facebook-f"
						href="#"
						alt={true}
						brands={true}
					/>
				</li>
				<li>
					<Icon
						label="LinkedIn"
						icon="fa-linkedin-in"
						href="#"
						alt={true}
						brands={true}
					/>
				</li>
				<li>
					<Icon
						label="Instagram"
						icon="fa-instagram"
						href="#"
						alt={true}
						brands={true}
					/>
				</li>
				<li>
					<Icon
						label="GitHub"
						icon="fa-github"
						href="#"
						alt={true}
						brands={true}
					/>
				</li>
				<li>
					<Icon
						label="Email"
						icon="fa-envelope"
						href="#"
						alt={true}
						solid={true}
					/>
				</li>
			</ul>
			<ul className={styles.copyright}>
				<li>&copy; Untitled. All rights reserved.</li>
				<li>
					Design: <Link href="http://html5up.net">HTML5 UP</Link>
				</li>
			</ul>
		</footer>
	);
};

export default Footer;
