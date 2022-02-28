import { createAction } from "../../helpers";
import * as Declerations from "../../../declerations";

export enum Prizes {
	FETCH_PRIZES = "FETCH_PRIZES",
	FETCH_PRIZES_SUCCESS = "FETCH_PRIZES_SUCCESS",
	FETCH_PRIZES_FAILURE = "FETCH_PRIZES_FAILURE",
	CREATE_PRIZE = "CREATE_PRIZE",
	CREATE_PRIZE_SUCCESS = "CREATE_PRIZE_SUCCESS",
	CREATE_PRIZE_FAILURE = "CREATE_PRIZE_FAILURE",
	MODIFY_PRIZE = "MODIFY_PRIZE",
	MODIFY_PRIZE_SUCCESS = "MODIFY_PRIZE_SUCCESS",
	MODIFY_PRIZE_FAILURE = "MODIFY_PRIZE_FAILURE",
}

export const fetchPrizes = () => createAction(Prizes.FETCH_PRIZES);
export const fetchPrizesSuccess = (payload: Declerations.Prizes.Prize[]) => {
	return createAction(Prizes.FETCH_PRIZES_SUCCESS, payload);
};
export const fetchPrizesFailure = (error: Declerations.App.Error) => {
	return createAction(Prizes.FETCH_PRIZES_FAILURE, error);
};

export const createPrize = (payload: Declerations.Prizes.Prize) => {
	return createAction(Prizes.CREATE_PRIZE, payload);
};

export const createPrizeSuccess = (payload: Declerations.Prizes.Prize) => {
	return createAction(Prizes.CREATE_PRIZE_SUCCESS, payload);
};

export const createPrizeFailure = (error: Declerations.App.Error) => {
	return createAction(Prizes.CREATE_PRIZE_FAILURE, error);
};

export const modifyPrize = (payload: Declerations.Prizes.Prize) => {
	return createAction(Prizes.MODIFY_PRIZE, payload);
};

export const modifyPrizeSuccess = (payload: Declerations.Prizes.Prize) => {
	return createAction(Prizes.MODIFY_PRIZE_SUCCESS, payload);
};

export const modifyPrizeFailure = (error: Declerations.App.Error) => {
	return createAction(Prizes.MODIFY_PRIZE_FAILURE, error);
};
