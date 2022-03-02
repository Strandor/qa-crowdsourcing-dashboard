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
		case Prizes.UPDATE_PRIZE:
			return {
				...state,
				total: { isLoading: true, data: [...state.total.data] },
			};
		case Prizes.UPDATE_PRIZE_SUCCESS:
			return {
				...state,
				total: {
					isLoading: false,
					data: [
						action.payload,
						...state.total.data.filter(
							(prize) => prize._id != action.payload._id
						),
					],
				},
			};
		case Prizes.UPDATE_PRIZE_FAILURE:
			return {
				...state,
				total: { isLoading: false, data: [...state.total.data] },
			};

		case Prizes.DELETE_PRIZE:
			return {
				...state,
				total: { isLoading: true, data: [...state.total.data] },
			};
		case Prizes.DELETE_PRIZE_SUCCESS:
			return {
				...state,
				total: {
					isLoading: false,
					data: [
						...state.total.data.filter(
							(prize) => prize._id != action.payload._id
						),
					],
				},
			};
		case Prizes.DELETE_PRIZE_FAILURE:
			return {
				...state,
				total: { isLoading: false, data: [...state.total.data] },
			};

		default:
			return state;
	}
};

export default reducer;
