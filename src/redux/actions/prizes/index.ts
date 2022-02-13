import { createAction } from "../../helpers";
import * as Declerations from "../../../declerations";

export enum Prizes {
	FETCH_PRIZES = "FETCH_PRIZES",
	FETCH_PRIZES_SUCCESS = "FETCH_PRIZES_SUCCESS",
	FETCH_PRIZES_FAILURE = "FETCH_PRIZES_FAILURE",
}

export const fetchPrizes = () => createAction(Prizes.FETCH_PRIZES);
export const fetchPrizesSuccess = (payload: Declerations.Prizes.Prize[]) => {
	return createAction(Prizes.FETCH_PRIZES_SUCCESS, payload);
};
export const fetchPrizesFailure = (error: Declerations.App.Error) => {
	return createAction(Prizes.FETCH_PRIZES_FAILURE, error);
};
