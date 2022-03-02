import { createAction } from "../../helpers";
import * as Declerations from "../../../declerations";

export enum Prizes {
	FETCH_PRIZES = "FETCH_PRIZES",
	FETCH_PRIZES_SUCCESS = "FETCH_PRIZES_SUCCESS",
	FETCH_PRIZES_FAILURE = "FETCH_PRIZES_FAILURE",
	CREATE_PRIZE = "CREATE_PRIZE",
	CREATE_PRIZE_SUCCESS = "CREATE_PRIZE_SUCCESS",
	CREATE_PRIZE_FAILURE = "CREATE_PRIZE_FAILURE",
	UPDATE_PRIZE = "UPDATE_PRIZE",
	UPDATE_PRIZE_SUCCESS = "UPDATE_PRIZE_SUCCESS",
	UPDATE_PRIZE_FAILURE = "UPDATE_PRIZE_FAILURE",
	DELETE_PRIZE = "DELETE_PRIZE",
	DELETE_PRIZE_SUCCESS = "DELETE_PRIZE_SUCCESS",
	DELETE_PRIZE_FAILURE = "DELETE_PRIZE_FAILURE",
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

export const updatePrize = (payload: Declerations.Prizes.Prize) => {
	return createAction(Prizes.UPDATE_PRIZE, payload);
};

export const updatePrizeSuccess = (payload: Declerations.Prizes.Prize) => {
	return createAction(Prizes.UPDATE_PRIZE_SUCCESS, payload);
};

export const updatePrizeFailure = (error: Declerations.App.Error) => {
	return createAction(Prizes.UPDATE_PRIZE_FAILURE, error);
};

export const deletePrize = (payload: Declerations.Prizes.Prize) => {
	return createAction(Prizes.DELETE_PRIZE, payload);
};

export const deletePrizeSuccess = (payload: Declerations.Prizes.Prize) => {
	return createAction(Prizes.DELETE_PRIZE_SUCCESS, payload);
};

export const deletePrizeFailure = (error: Declerations.App.Error) => {
	return createAction(Prizes.DELETE_PRIZE_FAILURE, error);
};
