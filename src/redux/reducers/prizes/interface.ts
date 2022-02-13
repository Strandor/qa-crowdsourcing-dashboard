import * as Declerations from "../../../declerations";

export interface State {
	total: {
		isLoading: boolean;
		data: Declerations.Prizes.Prize[];
		error?: Declerations.App.Error;
	};
}
