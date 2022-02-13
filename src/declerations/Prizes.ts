export interface PrizeCategory {
	_id?: string;
	name: string;
	// chestURL: string;
	requiredLVL: number;
	lockedImg?: string;
	prizes?: Prize[];
	unlockedImg?: string;
}

export interface Prize {
	_id: string;
	name: string;
	img: string;
	brandImg: string;
	available: boolean;
}
