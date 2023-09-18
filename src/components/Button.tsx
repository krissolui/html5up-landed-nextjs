import styles from '@/styles/Button.module.css';
import classNames from 'classnames';
import Link from 'next/link';

interface IButtonProps {
	href: string;
	text: string;
	primary?: boolean;
	small?: boolean;
	large?: boolean;
	fit?: boolean;
	disabled?: boolean;
	icon?: string;
	className?: string;
}

const Button = ({
	href,
	text,
	primary,
	small,
	large,
	fit,
	disabled,
	icon,
	className = '',
}: IButtonProps) => {
	let classnames = classNames(styles.button, className);
	if (primary) classnames = classNames(classnames, styles.primary);
	if (small) classnames = classNames(classnames, styles.small);
	if (large) classnames = classNames(classnames, styles.large);
	if (fit) classnames = classNames(classnames, styles.fit);
	if (disabled) classnames = classNames(classnames, styles.disabled);
	if (icon && icon != '')
		classnames = classNames(classnames, styles.icon, icon, styles.solid);

	return disabled ? (
		<span className={classnames}>{text}</span>
	) : (
		<Link href={href} className={classnames}>
			{text}
		</Link>
	);
};

export default Button;
