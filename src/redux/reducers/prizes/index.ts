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
		default:
			return state;
	}
};

export default reducer;
