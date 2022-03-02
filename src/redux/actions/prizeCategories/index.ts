import { createAction } from "../../helpers";
import * as Declerations from "../../../declerations";

export enum PrizeCategories {
	FETCH_PRIZECATEGORIES = "FETCH_PRIZECATEGORIES",
	FETCH_PRIZECATEGORIES_SUCCESS = "FETCH_PRIZECATEGORIES_SUCCESS",
	FETCH_PRIZECATEGORIES_FAILURE = "FETCH_PRIZECATEGORIES_FAILURE",
	CREATE_PRIZECATEGORY = "CREATE_PRIZECATEGORY",
	CREATE_PRIZECATEGORY_SUCCESS = "CREATE_PRIZECATEGORY_SUCCESS",
	CREATE_PRIZECATEGORY_FAILURE = "CREATE_PRIZECATEGORY_FAILURE",
	UPDATE_PRIZECATEGORY = "UPDATE_PRIZECATEGORY",
	UPDATE_PRIZECATEGORY_SUCCESS = "UPDATE_PRIZECATEGORY_SUCCESS",
	UPDATE_PRIZECATEGORY_FAILURE = "UPDATE_PRIZECATEGORY_FAILURE",
	DELETE_PRIZECATEGORY = "DELETE_PRIZECATEGORY",
	DELETE_PRIZECATEGORY_SUCCESS = "DELETE_PRIZECATEGORY_SUCCESS",
	DELETE_PRIZECATEGORY_FAILURE = "DELETE_PRIZECATEGORY_FAILURE",
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

export const updatePrizeCategory = (
	payload: Declerations.Prizes.PrizeCategory
) => {
	return createAction(PrizeCategories.UPDATE_PRIZECATEGORY, payload);
};

export const updatePrizeCategorySuccess = (
	payload: Declerations.Prizes.PrizeCategory
) => {
	return createAction(PrizeCategories.UPDATE_PRIZECATEGORY_SUCCESS, payload);
};

export const updatePrizeCategoryFailure = (error: Declerations.App.Error) => {
	return createAction(PrizeCategories.UPDATE_PRIZECATEGORY_FAILURE, error);
};

export const deletePrizeCategory = (
	payload: Declerations.Prizes.PrizeCategory
) => {
	return createAction(PrizeCategories.DELETE_PRIZECATEGORY, payload);
};

export const deletePrizeCategorySuccess = (
	payload: Declerations.Prizes.PrizeCategory
) => {
	return createAction(PrizeCategories.DELETE_PRIZECATEGORY_SUCCESS, payload);
};

export const deletePrizeCategoryFailure = (error: Declerations.App.Error) => {
	return createAction(PrizeCategories.DELETE_PRIZECATEGORY_FAILURE, error);
};
