import { Auth } from "../../actions";
import { Reducer } from "../../types";
import { State } from "./interface";
import { initialState } from "./utils";

const reducer: Reducer<State> = (state = initialState, action) => {
	switch (action.type) {
		case Auth.AUTHENTICATE:
			return {
				...state,
				authenticated: {
					isLoading: true,
					error: undefined,
					user: undefined,
				},
			};
		case Auth.AUTHENTICATE_SUCCESS:
			return {
				...state,
				authenticated: {
					isLoading: false,
					error: undefined,
					user: action.payload,
				},
			};
		case Auth.AUTHENTICATE_FAILURE:
			return {
				...state,
				authenticated: {
					isLoading: false,
					error: action.payload,
					user: undefined,
				},
			};
		default:
			return state;
	}
};

export default reducer;
