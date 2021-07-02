import API from "../../../api";
import { put, takeLatest, all, fork } from "redux-saga/effects";
import { fetchSignupsFailure, fetchSignupsSuccess, Users } from "../../actions";
import * as Declerations from "../../../declerations";

function* onFetchSignups() {
	try {
		const { data } = yield API.get<Declerations.Users.UserSignups[]>(
			"/api/charts/users_per_day"
		);

		yield put(fetchSignupsSuccess(data));
	} catch (error) {
		yield put(fetchSignupsFailure(error.response.data));
	}
}

export default function* users() {
	yield all([yield takeLatest(Users.FETCH_SIGNUPS, onFetchSignups)]);
}
