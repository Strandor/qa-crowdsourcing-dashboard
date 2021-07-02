import API from "../../../api";
import { put, takeLatest, all } from "redux-saga/effects";
import {
	Questions,
	fetchImpossibleQuestionsSuccess,
	fetchArchivedQuestionsFailure,
	fetchImpossibleQuestionsFailure,
	fetchArchivedQuestionsSuccess,
	patchQuestion,
	patchQuestionSuccess,
	patchQuestionFailure,
} from "../../actions";
import * as Declerations from "../../../declerations";
import { ExtractActionFromActionCreator } from "../../types";

function* onFetchImpossibleQuestions() {
	try {
		const { data } = yield API.get<Declerations.Questions.Question[]>(
			"/api/v1/questions?isImpossible=true&isDisqualified=false"
		);

		yield put(fetchImpossibleQuestionsSuccess(data));
	} catch (error) {
		yield put(fetchImpossibleQuestionsFailure(error.response.data));
	}
}

function* onFetchArchivedQuestions() {
	try {
		const { data } = yield API.get<Declerations.Questions.Question[]>(
			"/api/v1/questions?archived=true&isDisqualified=false"
		);

		yield put(fetchArchivedQuestionsSuccess(data));
	} catch (error) {
		yield put(fetchArchivedQuestionsFailure(error.response.data));
	}
}

function* onPatchQuestion(
	action: ExtractActionFromActionCreator<typeof patchQuestion>
) {
	try {
		const { data } = yield API.patch<Declerations.Questions.Question[]>(
			`/api/v1/questions/${action.payload._id}`,
			action.payload
		);
		yield put(patchQuestionSuccess(data));
	} catch (error) {
		yield put(patchQuestionFailure(error.response.data));
	}
}

export default function* questions() {
	yield all([
		yield takeLatest(
			Questions.FETCH_IMPOSSIBLE_QUESTIONS,
			onFetchImpossibleQuestions
		),
		yield takeLatest(
			Questions.FETCH_ARCHIVED_QUESTIONS,
			onFetchArchivedQuestions
		),
		yield takeLatest(Questions.PATCH_QUESTION, onPatchQuestion),
	]);
}
