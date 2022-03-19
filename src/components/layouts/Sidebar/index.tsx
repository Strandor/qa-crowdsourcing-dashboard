import { Props } from "./interface";
import styles from "./styles.module.scss";
import * as Atoms from "../../atoms";

export default ({ children }: Props) => {
	return (
		<div className={styles.outer}>
			<div className={styles.sidebar}>
				<Atoms.Buttons.IconButton
					src="/icons/people_black_24dp.svg"
					href="/dashboard/users"
				/>
				<Atoms.Buttons.IconButton
					src="/icons/quiz_black_24dp.svg"
					href="/dashboard/questions"
				/>
				<Atoms.Buttons.IconButton
					src="/icons/question_answer_black_24dp.svg"
					href="/dashboard/answers"
				/>
				<Atoms.Buttons.IconButton
					src="/icons/emoji_events_black_24dp.svg"
					href="/dashboard/prizes"
				/>
				<Atoms.Buttons.IconButton
					src="/icons/AnnouncementOutlined.svg"
					href="/dashboard/announcement"
				/>
			</div>
			<div className={styles.content}>{children}</div>
		</div>
	);
};
