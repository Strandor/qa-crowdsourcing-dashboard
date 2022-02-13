import API from "../../../api";
import { put, takeLatest, all } from "redux-saga/effects";
import * as Declerations from "../../../declerations";
import {
	PrizeCategories,
	fetchPrizeCategoriesFailure,
	fetchPrizeCategoriesSuccess,
	createPrizeCategory,
	createPrizeCategorySuccess,
	createPrizeCategoryFailure,
} from "../../actions";
import { ExtractActionFromActionCreator } from "../../types";

function* onFetchPrizeCategories() {
	try {
		const { data } = yield API.get<Declerations.Prizes.PrizeCategory[]>(
			"/api/v1/prizes"
		);
		yield put(fetchPrizeCategoriesSuccess(data));
	} catch (error) {
		yield put(fetchPrizeCategoriesFailure(error.response.data));
	}
}

function* onCreatePrizeCategory(
	action: ExtractActionFromActionCreator<typeof createPrizeCategory>
) {
	try {
		const { data } = yield API.post<Declerations.Prizes.PrizeCategory>(
			"/api/v1/prizes/prizeCategory",
			action.payload
		);
		yield put(createPrizeCategorySuccess(data));
	} catch (error) {
		yield put(createPrizeCategoryFailure(error.response.data));
	}
}

export default function* prizeCategories() {
	yield all([
		yield takeLatest(
			PrizeCategories.FETCH_PRIZECATEGORIES,
			onFetchPrizeCategories
		),
		yield takeLatest(
			PrizeCategories.CREATE_PRIZECATEGORY,
			onCreatePrizeCategory
		),
	]);
}
