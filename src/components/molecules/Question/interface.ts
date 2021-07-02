import * as Declerations from "../../../declerations";

export interface Props {
	onTextChange: (text: string) => void;
	onDelete: () => void;
	onAccept: () => void;
	question: Declerations.Questions.Question;
}
