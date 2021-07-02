import { Questions } from "../../actions";
import { Reducer } from "../../types";
import { State } from "./interface";
import { initialState } from "./utils";

const reducer: Reducer<State> = (state = initialState, action) => {
	switch (action.type) {
		case Questions.PATCH_QUESTION:
			console.log(action);
			return {
				...state,
				impossible: {
					...state.impossible,
					data: state.impossible.data.filter(
						(d) => d._id !== action.payload._id
					),
				},
				archived: {
					...state.archived,
					data: state.archived.data.filter((d) => d._id !== action.payload._id),
				},
			};
		case Questions.FETCH_IMPOSSIBLE_QUESTIONS:
			return {
				...state,
				impossible: {
					isLoading: true,
					error: undefined,
					data: [],
				},
			};
		case Questions.FETCH_IMPOSSIBLE_QUESTIONS_SUCCESS:
			return {
				...state,
				impossible: {
					isLoading: false,
					error: undefined,
					data: action.payload,
				},
			};
		case Questions.FETCH_IMPOSSIBLE_QUESTIONS_FAILURE:
			return {
				...state,
				impossible: {
					isLoading: false,
					error: action.payload,
					data: [],
				},
			};
		case Questions.FETCH_ARCHIVED_QUESTIONS:
			return {
				...state,
				archived: {
					isLoading: true,
					error: undefined,
					data: [],
				},
			};
		case Questions.FETCH_ARCHIVED_QUESTIONS_SUCCESS:
			return {
				...state,
				archived: {
					isLoading: false,
					error: undefined,
					data: action.payload,
				},
			};
		case Questions.FETCH_ARCHIVED_QUESTIONS_FAILURE:
			return {
				...state,
				archived: {
					isLoading: false,
					error: action.payload,
					data: [],
				},
			};
		default:
			return state;
	}
};

export default reducer;
