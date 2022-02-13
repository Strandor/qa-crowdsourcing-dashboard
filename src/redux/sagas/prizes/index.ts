import API from "../../../api";
import { put, takeLatest, all } from "redux-saga/effects";
import { fetchPrizesFailure, fetchPrizesSuccess, Prizes } from "../../actions";
import * as Declerations from "../../../declerations";

// function* onFetchPrizes() {
// 	try {
// 		const { data } = yield API.get<Declerations.Prizes.Prize[]>(
// 			"/api/v1/prizes"
// 		);
// 		yield put(fetchPrizesSuccess(data));
// 	} catch (error) {
// 		yield put(fetchPrizesFailure(error.response.data));
// 	}
// }

// export default function* prizes() {
// 	yield all([yield takeLatest(Prizes.FETCH_PRIZES, onFetchPrizes)]);
// }
