import API from "../../../api";
import { put, takeLatest, all } from "redux-saga/effects";
import {
	Auth,
	authenticateSuccess,
	authenticatedFailure,
	authenticate,
} from "../../actions";
import * as Declerations from "../../../declerations";
import { ExtractActionFromActionCreator } from "../../types";
import Router from "next/router";

function* onAuthenticate(
	action: ExtractActionFromActionCreator<typeof authenticate>
) {
	try {
		const { data } = yield API.post<Declerations.Auth.AuthenticatedUser>(
			"/api/auth/authenticate",
			action.payload
		);

		if (data.type !== "admin") throw Error("You are not logged in as admin");

		yield put(authenticateSuccess(data));
	} catch (error) {
		yield put(
			authenticatedFailure(
				error.response?.data ?? {
					message: error.message,
				}
			)
		);
	}
}

function* onAuthenticateSuccess() {
	yield Router.push("/dashboard/users");
}

export default function* auth() {
	yield all([
		yield takeLatest(Auth.AUTHENTICATE, onAuthenticate),
		yield takeLatest(Auth.AUTHENTICATE_SUCCESS, onAuthenticateSuccess),
	]);
}
