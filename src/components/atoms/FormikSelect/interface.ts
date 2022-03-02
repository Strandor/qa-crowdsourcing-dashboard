export interface SelectOptions {
	label: string;
	value: string;
}

export interface multiSelectProps {
	options: SelectOptions[];
	value: any;
	handlePrizeSelect: (val: any) => void;
}
