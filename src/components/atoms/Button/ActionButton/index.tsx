import { Props } from "./interface";
import styles from "./styles.module.scss";

const ActionButton = ({ children, isLoading, onClick }: Props) => {
	return (
		<button type="submit" className={styles.button} onClick={onClick}>
			{isLoading ? <img src="/icons/three-dots.svg" /> : children}
		</button>
	);
};

export default ActionButton;
