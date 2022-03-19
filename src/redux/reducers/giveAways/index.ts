// import { Questions } from "../../actions";
import { GiveAways } from "../../actions";
import { Reducer } from "../../types";
import { State } from "./interface";
import { initialState } from "./utils";

const reducer: Reducer<State> = (state = initialState, action) => {
	switch (action.type) {
		case GiveAways.FETCH_GIVEAWAY:
			return { ...state, total: { isLoading: true, data: [] } };
		case GiveAways.FETCH_GIVEAWAY_SUCCESS:
			return {
				...state,
				total: {
					isLoading: false,
					data: action.payload.sort((a, b) => {
						let x = new Date(a.time);
						let y = new Date(b.time);
						return x.getTime() - y.getTime();
					}),
				},
			};
		case GiveAways.FETCH_GIVEAWAY_FAILURE:
			return {
				...state,
				total: { isLoading: false, data: [], error: action.payload },
			};

		case GiveAways.CREATE_GIVEAWAY:
			return {
				...state,
				total: { data: [...state.total.data], isLoading: true },
			};
		case GiveAways.CREATE_GIVEAWAY_SUCCESS:
			return {
				...state,
				total: {
					isLoading: false,
					data: [...state.total.data, action.payload].sort((a, b) => {
						let x = new Date(a.time);
						let y = new Date(b.time);
						return x.getTime() - y.getTime();
					}),
				},
			};
		case GiveAways.CREATE_GIVEAWAY_FAILURE:
			return {
				...state,
				total: {
					isLoading: false,
					data: [...state.total.data],
					error: action.payload,
				},
			};

		case GiveAways.DELETE_GIVEAWAY:
			return {
				...state,
				total: { data: [...state.total.data], isLoading: true },
			};
		case GiveAways.DELETE_GIVEAWAY_SUCCESS:
			const filteredOutDeleted = state.total.data.filter(
				(ga) => ga._id != action.payload._id
			);
			return {
				...state,
				total: {
					isLoading: false,
					data: [...filteredOutDeleted],
				},
			};

		case GiveAways.DELETE_GIVEAWAY_FAILURE:
			return {
				...state,
				total: {
					isLoading: false,
					data: [...state.total.data],
					error: action.payload,
				},
			};
		default:
			return state;
	}
};

export default reducer;
