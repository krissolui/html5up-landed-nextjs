import styles from '@/styles/Blockquote.module.css';

interface IBlockquoteProps {
	children: React.ReactNode;
}

const Blockquote = ({ children }: IBlockquoteProps) => {
	return <blockquote className={styles.blockquote}>{children}</blockquote>;
};

export default Blockquote;
