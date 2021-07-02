import { Users } from "../../actions";
import { Reducer } from "../../types";
import { State } from "./interface";
import { initialState } from "./utils";

const reducer: Reducer<State> = (state = initialState, action) => {
	switch (action.type) {
		case Users.FETCH_SIGNUPS:
			return {
				...state,
				signups: {
					isLoading: true,
					data: [],
				},
			};
		case Users.FETCH_SIGNUPS_SUCCESS:
			return {
				...state,
				signups: {
					isLoading: false,
					data: action.payload,
				},
			};
		case Users.FETCH_SIGNUPS_FAILURE:
			return {
				...state,
				signups: {
					isLoading: false,
					data: [],
					error: action.payload,
				},
			};
		default:
			return state;
	}
};

export default reducer;
