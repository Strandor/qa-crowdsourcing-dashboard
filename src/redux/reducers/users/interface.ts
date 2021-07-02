import * as Declerations from "../../../declerations";

export interface State {
	signups: {
		isLoading: boolean;
		data: Declerations.Users.UserSignups[];
		error?: Declerations.App.Error;
	};
}
