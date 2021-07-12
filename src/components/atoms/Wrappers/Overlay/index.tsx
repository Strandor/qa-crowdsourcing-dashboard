import { useEffect } from "react";
import { Props } from "./interface";
import styles from "./styles.module.scss";

const Overlay = ({ children, isVisible, onClose }: Props) => {
	if (!isVisible) return <></>;

	const onEscape = (event: KeyboardEvent) => {
		if (event.keyCode == 27) onClose();
	};

	useEffect(() => {
		document.addEventListener("keydown", onEscape, false);

		return () => document.removeEventListener("keydown", onEscape, false);
	}, []);

	return (
		<div className={styles.outer}>
			<div className={styles.inner}>
				<div className={styles.header}>
					<img
						src="/icons/close_black_24dp.svg"
						className={styles.close}
						onClick={onClose}
					/>
				</div>
				{children}
			</div>
		</div>
	);
};

export default Overlay;
