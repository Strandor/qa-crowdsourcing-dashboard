import { createAction } from "../../helpers";
import * as Declerations from "../../../declerations";

export enum PrizeCategories {
	FETCH_PRIZECATEGORIES = "FETCH_PRIZECATEGORIES",
	FETCH_PRIZECATEGORIES_SUCCESS = "FETCH_PRIZECATEGORIES_SUCCESS",
	FETCH_PRIZECATEGORIES_FAILURE = "FETCH_PRIZECATEGORIES_FAILURE",
	CREATE_PRIZECATEGORY = "CREATE_PRIZECATEGORY",
	CREATE_PRIZECATEGORY_SUCCESS = "CREATE_PRIZECATEGORY_SUCCESS",
	CREATE_PRIZECATEGORY_FAILURE = "CREATE_PRIZECATEGORY_FAILURE",
}

export const fetchPrizeCategories = () =>
	createAction(PrizeCategories.FETCH_PRIZECATEGORIES);
export const fetchPrizeCategoriesSuccess = (
	payload: Declerations.Prizes.PrizeCategory[]
) => {
	return createAction(PrizeCategories.FETCH_PRIZECATEGORIES_SUCCESS, payload);
};
export const fetchPrizeCategoriesFailure = (error: Declerations.App.Error) => {
	return createAction(PrizeCategories.FETCH_PRIZECATEGORIES_FAILURE, error);
};

export const createPrizeCategory = (
	payload: Declerations.Prizes.PrizeCategory
) => {
	return createAction(PrizeCategories.CREATE_PRIZECATEGORY, payload);
};

export const createPrizeCategorySuccess = (
	payload: Declerations.Prizes.PrizeCategory
) => {
	return createAction(PrizeCategories.CREATE_PRIZECATEGORY_SUCCESS, payload);
};

export const createPrizeCategoryFailure = (error: Declerations.App.Error) => {
	return createAction(PrizeCategories.CREATE_PRIZECATEGORY_FAILURE, error);
};
