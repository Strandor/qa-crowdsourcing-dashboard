import { Props } from "./interface";
import styles from "./styles.module.scss";

const Loading = ({ isLoading, children, error }: Props) => {
	if (isLoading)
		return <img src="/icons/three-dots.svg" className={styles.loading} />;

	if (error)
		return (
			<div className={styles.error}>
				<img
					src="/icons/error_outline_white_24dp.svg"
					className={styles.error_icon}
				/>
				<p>{error.message}</p>
			</div>
		);

	return children;
};

export default Loading;
