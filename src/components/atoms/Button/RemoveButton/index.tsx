import { Props } from "./interface";
import styles from "./styles.module.scss";

const RemoveButton = ({ children, isLoading, onClick }: Props) => {
	return (
		<button type="submit" className={styles.removeButton} onClick={onClick}>
			{isLoading ? <img src="/icons/three-dots.svg" /> : children}
		</button>
	);
};

export default RemoveButton;
