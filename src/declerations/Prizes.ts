export interface PrizeCategory {
	_id?: string;
	name: string;
	// chestURL: string;
	prereqDescription: string;
	requiredLVL: number;
	lockedImg: string;
	prizes: Prize[]; //| string[];
	unlockedImg: string;
}

export interface Prize {
	_id?: string;
	name: string;
	img: string;
	brandImg: string;
	available?: boolean;
}
