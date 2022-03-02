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
	updatePrizeCategory,
	updatePrizeCategorySuccess,
	updatePrizeCategoryFailure,
	deletePrizeCategory,
	deletePrizeCategorySuccess,
	deletePrizeCategoryFailure,
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

function* onUpdatePrizeCategory(
	action: ExtractActionFromActionCreator<typeof updatePrizeCategory>
) {
	try {
		const { data } = yield API.patch<Declerations.Prizes.PrizeCategory>(
			`/api/v1/prizes/prizeCategory/${action.payload._id}`,
			action.payload
		);
		yield put(updatePrizeCategorySuccess(data));
	} catch (error) {
		yield put(updatePrizeCategoryFailure(error.response.data));
	}
}

function* onDeletePrizeCategory(
	action: ExtractActionFromActionCreator<typeof deletePrizeCategory>
) {
	try {
		const { data } = yield API.delete<Declerations.Prizes.PrizeCategory>(
			`/api/v1/prizes/prizeCategory/${action.payload._id}`
		);
		yield put(deletePrizeCategorySuccess(data));
	} catch (error) {
		yield put(deletePrizeCategoryFailure(error.response.data));
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
		yield takeLatest(
			PrizeCategories.UPDATE_PRIZECATEGORY,
			onUpdatePrizeCategory
		),
		yield takeLatest(
			PrizeCategories.DELETE_PRIZECATEGORY,
			onDeletePrizeCategory
		),
	]);
}
