import styles from '@/styles/Icon.module.css';
import classNames from 'classnames';
import Link from 'next/link';

interface IIconProps {
	label?: string;
	icon: string;
	href?: string;
	alt?: boolean;
	brands?: boolean;
	solid?: boolean;
	major?: boolean;
}

const Icon = ({ label, icon, href, alt, brands, solid, major }: IIconProps) => {
	let classnames = classNames(styles.icon, icon);
	if (alt) classnames = classNames(classnames, styles.alt);
	if (brands) classnames = classNames(classnames, styles.brands);
	if (solid) classnames = classNames(classnames, styles.solid);
	if (major) classnames = classNames(classnames, styles.major);

	if (!href) return <span className={classnames} />;
	return (
		<Link href={href} className={classnames}>
			<span className={styles.label}>{label ?? ''}</span>
		</Link>
	);
};

export default Icon;
