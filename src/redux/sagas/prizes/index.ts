import API from "../../../api";
import { put, takeLatest, all } from "redux-saga/effects";
import {
	Prizes,
	createPrizeFailure,
	createPrizeSuccess,
	fetchPrizesFailure,
	fetchPrizesSuccess,
	createPrize,
	updatePrize,
	updatePrizeSuccess,
	updatePrizeFailure,
	deletePrize,
	deletePrizeSuccess,
	deletePrizeFailure,
} from "../../actions";
import * as Declerations from "../../../declerations";
import { ExtractActionFromActionCreator } from "../../types";

function* onFetchPrizes() {
	try {
		const { data } = yield API.get<Declerations.Prizes.Prize[]>(
			"/api/v1/prizes/prize/"
		);
		yield put(fetchPrizesSuccess(data));
	} catch (error) {
		yield put(fetchPrizesFailure(error.response.data));
	}
}

function* onCreatePrize(
	action: ExtractActionFromActionCreator<typeof createPrize>
) {
	try {
		const { data } = yield API.post<Declerations.Prizes.Prize>(
			"/api/v1/prizes/prize",
			action.payload
		);
		yield put(createPrizeSuccess(data));
	} catch (error) {
		yield put(createPrizeFailure(error.response.data));
	}
}

function* onModifyPrize(
	action: ExtractActionFromActionCreator<typeof updatePrize>
) {
	try {
		const { data } = yield API.patch<Declerations.Prizes.Prize>(
			`/api/v1/prizes/prize/${action.payload._id}`,
			action.payload
		);
		yield put(updatePrizeSuccess(data));
	} catch (error) {
		yield put(updatePrizeFailure(error.response.data));
	}
}

function* onDeletePrize(
	action: ExtractActionFromActionCreator<typeof deletePrize>
) {
	try {
		const { data } = yield API.delete<Declerations.Prizes.Prize>(
			`/api/v1/prizes/prize/${action.payload._id}`
		);
		yield put(deletePrizeSuccess(data));
	} catch (error) {
		yield put(deletePrizeFailure(error.response.data));
	}
}

export default function* prizes() {
	yield all([
		yield takeLatest(Prizes.FETCH_PRIZES, onFetchPrizes),
		yield takeLatest(Prizes.CREATE_PRIZE, onCreatePrize),
		yield takeLatest(Prizes.UPDATE_PRIZE, onModifyPrize),
		yield takeLatest(Prizes.DELETE_PRIZE, onDeletePrize),
	]);
}
