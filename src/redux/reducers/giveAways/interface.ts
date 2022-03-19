import * as Declerations from "../../../declerations";

export interface State {
	total: {
		isLoading: boolean;
		data: Declerations.GiveAways.GiveAway[];
		error?: Declerations.App.Error;
	};
}
