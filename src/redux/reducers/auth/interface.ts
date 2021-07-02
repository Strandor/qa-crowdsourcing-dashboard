import * as Declerations from "../../../declerations";

export interface State {
	authenticated: {
		isLoading: boolean;
		error?: Declerations.App.Error;
		user?: Declerations.Auth.AuthenticatedUser;
	};
}
