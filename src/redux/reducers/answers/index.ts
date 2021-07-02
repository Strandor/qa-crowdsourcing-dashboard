import { Answers } from "../../actions";
import { Reducer } from "../../types";
import { State } from "./interface";
import { initialState } from "./utils";

const reducer: Reducer<State> = (state = initialState, action) => {
	switch (action.type) {
		case Answers.FETCH_ANSWER:
			return {
				...state,
				total: {
					isLoading: true,
					data: [],
				},
			};
		case Answers.FETCH_ANSWER_SUCCESS:
			return {
				...state,
				total: {
					isLoading: false,
					data: action.payload,
				},
			};
		case Answers.FETCH_ANSWER_FAILURE:
			return {
				...state,
				total: {
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
