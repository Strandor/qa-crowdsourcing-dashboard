import { createAction } from "../../helpers";
import * as Declerations from "../../../declerations";

export enum Announcements {
	SEND_EMAIL = "SEND_EMAIL",
	SEND_EMAIL_SUCCESS = "SEND_EMAIL_SUCCESS",
	SEND_EMAIL_FAILURE = "SEND_EMAIL_FAILURE",
	SEND_NOTIFICATION = "SEND_NOTIFICATION",
	SEND_NOTIFICATION_SUCCESS = "SEND_NOTIFICATION_SUCCESS",
	SEND_NOTIFICATION_FAILURE = "SEND_NOTIFICATION_FAILURE",
}

// Send email announcement
export const sendEmail = (payload: Declerations.Announcements.Announcement) =>
	createAction(Announcements.SEND_EMAIL, payload);
export const sendEmailSuccess = (
	payload: Declerations.Announcements.Announcement
) => {
	return createAction(Announcements.SEND_EMAIL_SUCCESS, payload);
};
export const sendEmailFailure = (payload: Declerations.App.Error) =>
	createAction(Announcements.SEND_EMAIL_FAILURE, payload);

// Send notification announcement
export const sendNotification = () =>
	createAction(Announcements.SEND_NOTIFICATION);
export const sendNotificationSuccess = (
	payload: Declerations.Announcements.Announcement
) => {
	return createAction(Announcements.SEND_NOTIFICATION_SUCCESS, payload);
};
export const sendNotificationFailure = (payload: Declerations.App.Error) =>
	createAction(Announcements.SEND_NOTIFICATION_FAILURE, payload);
