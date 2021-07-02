import { createAction } from "../../helpers";
import * as Declerations from "../../../declerations";

export enum Answers {
	FETCH_ANSWER = "FETCH_ANSWER",
	FETCH_ANSWER_SUCCESS = "FETCH_ANSWER_SUCCESS",
	FETCH_ANSWER_FAILURE = "FETCH_ANSWER_FAILURE",
}

export const fetchAnswers = () => createAction(Answers.FETCH_ANSWER);
export const fetchAnswersSucess = (
	payload: Declerations.Answers.AnswerPerDay[]
) => {
	return createAction(Answers.FETCH_ANSWER_SUCCESS, payload);
};
export const fetchAnswersFailure = (payload: Declerations.App.Error) =>
	createAction(Answers.FETCH_ANSWER_FAILURE, payload);
