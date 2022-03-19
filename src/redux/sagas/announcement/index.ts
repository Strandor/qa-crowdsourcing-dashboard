import API from "../../../api";
import { put, takeLatest, all } from "redux-saga/effects";
import {
	Announcements,
	sendEmail,
	sendEmailSuccess,
	sendEmailFailure,
	sendNotification,
	sendNotificationSuccess,
	sendNotificationFailure,
} from "../../actions";
import * as Declerations from "../../../declerations";
import { ExtractActionFromActionCreator } from "../../types";

function* onSendEmail(
	action: ExtractActionFromActionCreator<typeof sendEmail>
) {
	try {
		const { data } = yield API.post<Declerations.Announcements.Announcement>(
			"/api/announcements/email",
			action.payload
		);

		yield put(sendEmailSuccess(data));
	} catch (error) {
		yield put(sendEmailFailure(error.response.data));
	}
}

export default function* announcements() {
	yield all([yield takeLatest(Announcements.SEND_EMAIL, onSendEmail)]);
}
