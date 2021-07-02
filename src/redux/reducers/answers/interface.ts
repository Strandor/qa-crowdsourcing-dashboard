import * as Declerations from "../../../declerations";

export interface State {
	total: {
		isLoading: boolean;
		data: Declerations.Answers.AnswerPerDay[];
		error?: Declerations.App.Error;
	};
}
