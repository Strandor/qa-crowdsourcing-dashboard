import { createAction } from "../../helpers";
import * as Declerations from "../../../declerations";

export enum Users {
	FETCH_SIGNUPS = "FETCH_SIGNUPS",
	FETCH_SIGNUPS_SUCCESS = "FETCH_SIGNUPS_SUCCESS",
	FETCH_SIGNUPS_FAILURE = "FETCH_SIGNUPS_FAILURE",
}

export const fetchSignups = () => createAction(Users.FETCH_SIGNUPS);
export const fetchSignupsSuccess = (
	payload: Declerations.Users.UserSignups[]
) => {
	return createAction(Users.FETCH_SIGNUPS_SUCCESS, payload);
};
export const fetchSignupsFailure = (error: Declerations.App.Error) => {
	return createAction(Users.FETCH_SIGNUPS_FAILURE, error);
};
