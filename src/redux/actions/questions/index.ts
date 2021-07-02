import { createAction } from "../../helpers";
import * as Declerations from "../../../declerations";

export enum Questions {
	FETCH_IMPOSSIBLE_QUESTIONS = "FETCH_IMPOSSIBLE_QUESTIONS",
	FETCH_IMPOSSIBLE_QUESTIONS_SUCCESS = "FETCH_IMPOSSIBLE_QUESTIONS_SUCCESS",
	FETCH_IMPOSSIBLE_QUESTIONS_FAILURE = "FETCH_IMPOSSIBLE_QUESTIONS_FAILURE",

	FETCH_ARCHIVED_QUESTIONS = "FETCH_ARCHIVED_QUESTIONS",
	FETCH_ARCHIVED_QUESTIONS_SUCCESS = "FETCH_ARCHIVED_QUESTIONS_SUCCESS",
	FETCH_ARCHIVED_QUESTIONS_FAILURE = "FETCH_ARCHIVED_QUESTIONS_FAILURE",

	PATCH_QUESTION = "PATCH_QUESTION",
	PATCH_QUESTION_SUCCESS = "PATCH_QUESTION_SUCCESS",
	PATCH_QUESTION_FAILURE = "PATCH_QUESTION_FAILURE",
}

export const fetchImpossibleQuestions = () =>
	createAction(Questions.FETCH_IMPOSSIBLE_QUESTIONS);
export const fetchImpossibleQuestionsSuccess = (
	payload: Declerations.Questions.Question[]
) => {
	return createAction(Questions.FETCH_IMPOSSIBLE_QUESTIONS_SUCCESS, payload);
};
export const fetchImpossibleQuestionsFailure = (
	payload: Declerations.App.Error
) => createAction(Questions.FETCH_IMPOSSIBLE_QUESTIONS_FAILURE, payload);

export const fetchArchivedQuestions = () =>
	createAction(Questions.FETCH_ARCHIVED_QUESTIONS);
export const fetchArchivedQuestionsSuccess = (
	payload: Declerations.Questions.Question[]
) => {
	return createAction(Questions.FETCH_ARCHIVED_QUESTIONS_SUCCESS, payload);
};
export const fetchArchivedQuestionsFailure = (
	payload: Declerations.App.Error
) => createAction(Questions.FETCH_ARCHIVED_QUESTIONS_FAILURE, payload);

export const patchQuestion = (
	payload: Declerations.Questions.PatchQuestion
) => {
	return createAction(Questions.PATCH_QUESTION, payload);
};

export const patchQuestionSuccess = (
	payload: Declerations.Questions.Question
) => {
	return createAction(Questions.PATCH_QUESTION_SUCCESS, payload);
};

export const patchQuestionFailure = (payload: Declerations.App.Error) => {
	return createAction(Questions.PATCH_QUESTION_FAILURE, payload);
};
