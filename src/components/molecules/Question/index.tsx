import { useCallback, useEffect, useRef, useState } from "react";
import * as Atoms from "../../atoms";
import { Props } from "./interface";
import styles from "./styles.module.scss";

const Question = ({ question, onTextChange, onAccept, onDelete }: Props) => {
	const [value, setValue] = useState(question.text);
	const [isEditing, setIsEditing] = useState(false);
	const ref = useRef<HTMLInputElement>();

	const onSubmit = useCallback(() => {
		setIsEditing(false);

		if (value !== question.text) onTextChange(value);
	}, [value]);

	useEffect(() => {
		ref.current.focus();
	}, [isEditing]);

	return (
		<div className={styles.outer}>
			<div onClick={() => setIsEditing(true)} className={styles.input_wrapper}>
				<input
					ref={ref}
					value={value}
					onChange={(event) => {
						setValue(event.target.value);
					}}
					onClick={() => setIsEditing(true)}
					disabled={!isEditing}
					onBlur={onSubmit}
				/>
			</div>
			<div className={styles.button_wrapper}>
				<Atoms.Buttons.FilledIconButton
					backgroundColor="red"
					src="/icons/close_white_24dp.svg"
					onClick={onDelete}
				/>
				<Atoms.Buttons.FilledIconButton
					backgroundColor="green"
					src="/icons/done_white_24dp.svg"
					onClick={onAccept}
				/>
			</div>
		</div>
	);
};

export default Question;
