import { State } from "./interface";

export const initialState: State = {
	impossible: {
		data: [],
		error: undefined,
		isLoading: false,
	},
	archived: {
		data: [],
		error: undefined,
		isLoading: false,
	},
};
