import { Props } from "./interface";
import styles from "./styles.module.scss";

const AnnouncementButton = ({ children, isLoading, onClick, email }: Props) => {
	return (
		<button
			type="submit"
			className={email ? styles.email : styles.notificaion}
			onClick={onClick}
		>
			{isLoading ? <img src="/icons/three-dots.svg" /> : children}
		</button>
	);
};

export default AnnouncementButton;
