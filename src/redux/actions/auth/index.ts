import { createAction } from "../../helpers";
import * as Declerations from "../../../declerations";

export enum Auth {
	AUTHENTICATE = "AUTHENTICATE",
	AUTHENTICATE_SUCCESS = "AUTHENTICATE_SUCCESS",
	AUTHENTICATE_FAILURE = "AUTHENTICATE_FAILURE",
}

export const authenticate = (payload: Declerations.Auth.Authenticate) => {
	return createAction(Auth.AUTHENTICATE, payload);
};
export const authenticateSuccess = (
	payload: Declerations.Auth.AuthenticatedUser
) => {
	return createAction(Auth.AUTHENTICATE_SUCCESS, payload);
};
export const authenticatedFailure = (payload: Declerations.App.Error) =>
	createAction(Auth.AUTHENTICATE_FAILURE, payload);
