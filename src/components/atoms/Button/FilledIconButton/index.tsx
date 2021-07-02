import { Props } from "./interface";
import styles from "./styles.module.scss";

const FilledIconButton = ({ backgroundColor, src, onClick }: Props) => {
	return (
		<div
			className={styles.outer}
			style={{ backgroundColor }}
			onClick={() => onClick()}
		>
			<img src={src} className={styles.icon} />
		</div>
	);
};

export default FilledIconButton;
