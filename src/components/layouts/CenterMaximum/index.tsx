import { Props } from "./interface";
import styles from "./styles.module.scss";

const CenterMaximum = ({ children }: Props) => {
	return (
		<div className={styles.outer}>
			<div className={styles.inner}>{children}</div>
		</div>
	);
};

export default CenterMaximum;
