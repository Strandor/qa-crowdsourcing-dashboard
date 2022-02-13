import { Prizes } from "../../actions";
import { Reducer } from "../../types";
import { State } from "./interface";
import { initialState } from "./utils";

// TODO:
const reducer: Reducer<State> = (state = initialState, action) => {
	switch (action.type) {
		case Prizes.FETCH_PRIZES:
			return { ...state, total: { isLoading: true, data: [] } };
		case Prizes.FETCH_PRIZES_SUCCESS:
			return {
				...state,
				total: { isLoading: false, data: action.payload },
			};
		case Prizes.FETCH_PRIZES_FAILURE:
			return {
				...state,
				total: { isLoading: false, data: [], error: action.payload },
			};
		case Prizes.CREATE_PRIZE:
			return {
				...state,
				total: { isLoading: true, data: [...state.total.data] },
			};
		case Prizes.CREATE_PRIZE_SUCCESS:
			return {
				...state,
				total: {
					isLoading: false,
					data: [...state.total.data, action.payload],
				},
			};
		case Prizes.CREATE_PRIZE_FAILURE:
			return {
				...state,
				total: { isLoading: false, data: [...state.total.data] },
			};
		default:
			return state;
	}
};

export default reducer;
