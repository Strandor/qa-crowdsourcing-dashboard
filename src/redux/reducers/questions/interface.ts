import * as Declerations from "../../../declerations";

export interface State {
	impossible: {
		isLoading: boolean;
		data: Declerations.Questions.Question[];
		error?: Declerations.App.Error;
	};
	archived: {
		isLoading: boolean;
		data: Declerations.Questions.Question[];
		error?: Declerations.App.Error;
	};
}
