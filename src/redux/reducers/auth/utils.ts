import { State } from "./interface";

export const initialState: State = {
	authenticated: {
		isLoading: false,
		error: undefined,
		user: undefined,
	},
};
