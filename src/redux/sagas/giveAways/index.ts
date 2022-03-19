import API from "../../../api";
import { put, takeLatest, all } from "redux-saga/effects";
import {
	GiveAways,
	fetchGiveAways,
	fetchGiveAwaysSuccess,
	fetchGiveAwaysFailure,
	createGiveAway,
	createGiveAwaySuccess,
	createGiveAwayFailure,
	deleteGiveAway,
	deleteGiveAwaySuccess,
	deleteGiveAwayFailure,
} from "../../actions";
import * as Declerations from "../../../declerations";
import { ExtractActionFromActionCreator } from "../../types";

function* onFetchGiveAways() {
	try {
		const { data } = yield API.get<Declerations.GiveAways.GiveAway[]>(
			"/api/v1/prize_give_aways/"
		);
		yield put(fetchGiveAwaysSuccess(data));
	} catch (error) {
		yield put(fetchGiveAwaysFailure(error.response.data));
	}
}

function* onCreateGiveAway(
	action: ExtractActionFromActionCreator<typeof createGiveAway>
) {
	try {
		const { data } = yield API.post<Declerations.GiveAways.GiveAway>(
			"/api/v1/prize_give_aways/",
			action.payload
		);
		yield put(createGiveAwaySuccess(data));
	} catch (error) {
		yield put(createGiveAwayFailure(error.response.data));
	}
}

function* onDeleteGiveAway(
	action: ExtractActionFromActionCreator<typeof deleteGiveAway>
) {
	try {
		const { data } = yield API.delete<Declerations.GiveAways.GiveAway>(
			`/api/v1/prize_give_aways/${action.payload._id}`
		);
		yield put(deleteGiveAwaySuccess(data));
	} catch (error) {
		yield put(deleteGiveAwayFailure(error.response.data));
	}
}

export default function* giveAways() {
	yield all([
		yield takeLatest(GiveAways.FETCH_GIVEAWAY, onFetchGiveAways),
		yield takeLatest(GiveAways.CREATE_GIVEAWAY, onCreateGiveAway),
		yield takeLatest(GiveAways.DELETE_GIVEAWAY, onDeleteGiveAway),
	]);
}
