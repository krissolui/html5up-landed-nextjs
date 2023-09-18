import styles from '@/styles/Banner.module.css';
import classNames from 'classnames';
import Image, { StaticImageData } from 'next/image';

interface IBannerProps {
	src: StaticImageData | string;
}

const Banner = ({ src }: IBannerProps) => {
	return (
		<section className={styles.banner} id="banner">
			<div className={styles.content}>
				<header>
					<h2>The future has landed</h2>
					<p>
						And there are no hoverboards or flying cars.
						<br />
						Just apps. Lots of mother flipping apps.
					</p>
				</header>
				<span className={styles.image}>
					<Image src={src} alt="banner image" />
				</span>
			</div>
			<a
				href="#one"
				className={classNames('scrolly', styles['goto-next'])}
			>
				Next
			</a>
		</section>
	);
};

export default Banner;
