export interface Question {
	_id: string;
	archived: boolean;
	isImpossible: boolean;
	text: string;
}

export interface PatchQuestion {
	text?: string;
	isDisqualified?: boolean;
	isImpossible?: boolean;
	isArchived?: boolean;
	_id: string;
}
