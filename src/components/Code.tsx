import styles from '@/styles/Code.module.css';

interface ICodeProps {
	text: string;
	pre?: boolean;
}

const Code = ({ text, pre }: ICodeProps) => {
	const code = <code className={styles.code}>{text}</code>;
	return pre ? <pre className={styles.pre}>{code}</pre> : code;
};

export default Code;
