type role = "admin";

export interface Authenticate {
	email: string;
	password: string;
}

export interface AuthenticatedUser {
	email: string;
	type: role;
}
