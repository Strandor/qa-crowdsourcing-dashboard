// import { Questions } from "../../actions";
import { PrizeCategories } from "../../actions";
import { Reducer } from "../../types";
import { State } from "./interface";
import { initialState } from "./utils";

// TODO:
const reducer: Reducer<State> = (state = initialState, action) => {
	switch (action.type) {
		case PrizeCategories.FETCH_PRIZECATEGORIES:
			return { ...state, total: { isLoading: true, data: [] } };
		case PrizeCategories.FETCH_PRIZECATEGORIES_SUCCESS:
			return {
				...state,
				total: { isLoading: false, data: action.payload },
			};
		case PrizeCategories.FETCH_PRIZECATEGORIES_FAILURE:
			return {
				...state,
				total: { isLoading: false, data: [], error: action.payload },
			};

		case PrizeCategories.CREATE_PRIZECATEGORY:
			return {
				...state,
				total: { data: [...state.total.data], isLoading: true },
			};
		case PrizeCategories.CREATE_PRIZECATEGORY_SUCCESS:
			return {
				...state,
				total: {
					isLoading: false,
					data: [...state.total.data, action.payload],
				},
			};
		case PrizeCategories.CREATE_PRIZECATEGORY_FAILURE:
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
