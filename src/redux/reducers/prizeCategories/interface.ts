import * as Declerations from "../../../declerations";

export interface State {
	total: {
		isLoading: boolean;
		data: Declerations.Prizes.PrizeCategory[];
		error?: Declerations.App.Error;
	};
}
