import { createAction } from "../../helpers";
import * as Declerations from "../../../declerations";

export enum GiveAways {
	CREATE_GIVEAWAY = "CREATE_GIVEAWAY",
	CREATE_GIVEAWAY_SUCCESS = "CREATE_GIVEAWAY_SUCCESS",
	CREATE_GIVEAWAY_FAILURE = "CREATE_GIVEAWAY_FAILURE",
	FETCH_GIVEAWAY = "FETCH_GIVEAWAY",
	FETCH_GIVEAWAY_SUCCESS = "FETCH_GIVEAWAY_SUCCESS",
	FETCH_GIVEAWAY_FAILURE = "FETCH_GIVEAWAY_FAILURE",
	DELETE_GIVEAWAY = "DELETE_GIVEAWAY",
	DELETE_GIVEAWAY_SUCCESS = "DELETE_GIVEAWAY_SUCCESS",
	DELETE_GIVEAWAY_FAILURE = "DELETE_GIVEAWAY_FAILURE",
}

export const createGiveAway = (payload: Declerations.GiveAways.GiveAway) => {
	return createAction(GiveAways.CREATE_GIVEAWAY, payload);
};
export const createGiveAwaySuccess = (
	payload: Declerations.GiveAways.GiveAway
) => {
	return createAction(GiveAways.CREATE_GIVEAWAY_SUCCESS, payload);
};
export const createGiveAwayFailure = (payload: Declerations.App.Error) =>
	createAction(GiveAways.CREATE_GIVEAWAY_FAILURE, payload);

export const fetchGiveAways = () => {
	return createAction(GiveAways.FETCH_GIVEAWAY);
};

export const fetchGiveAwaysSuccess = (
	payload: Declerations.GiveAways.GiveAway[]
) => {
	return createAction(GiveAways.FETCH_GIVEAWAY_SUCCESS, payload);
};

export const fetchGiveAwaysFailure = (payload: Declerations.App.Error) =>
	createAction(GiveAways.FETCH_GIVEAWAY_FAILURE, payload);

export const deleteGiveAway = (payload: Declerations.GiveAways.GiveAway) => {
	return createAction(GiveAways.DELETE_GIVEAWAY, payload);
};

export const deleteGiveAwaySuccess = (
	payload: Declerations.GiveAways.GiveAway
) => {
	return createAction(GiveAways.DELETE_GIVEAWAY_SUCCESS, payload);
};

export const deleteGiveAwayFailure = (payload: Declerations.App.Error) =>
	createAction(GiveAways.DELETE_GIVEAWAY_FAILURE, payload);
