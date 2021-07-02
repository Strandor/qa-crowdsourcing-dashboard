import API from "../../../api";
import { put, takeLatest, all } from "redux-saga/effects";
import {
	Answers,
	fetchAnswersFailure,
	fetchAnswersSucess,
} from "../../actions";
import * as Declerations from "../../../declerations";

function* onFetchAnswers() {
	try {
		const { data } = yield API.get<Declerations.Answers.AnswerPerDay[]>(
			"/api/charts/answers_per_day"
		);

		yield put(fetchAnswersSucess(data));
	} catch (error) {
		yield put(fetchAnswersFailure(error.response.data));
	}
}

export default function* answers() {
	yield all([yield takeLatest(Answers.FETCH_ANSWER, onFetchAnswers)]);
}
