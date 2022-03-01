import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Redux from "../../../redux";
import * as Components from "../../../components";
import * as Declarations from "../../../declerations";
import { Field, Form, Formik } from "formik";
import { FormikSelect } from "../../../components/atoms";

const INITIAL_CATEGORY_VALUES: Declarations.Prizes.PrizeCategory = {
	name: "",
	unlockedImg: "",
	lockedImg: "",
	prereqDescription: "",
	requiredLVL: 0,
	prizes: [],
};

const INITIAL_PRIZE_VALUES: Declarations.Prizes.Prize = {
	name: "",
	img: "",
	brandImg: "",
	available: true,
};

const Prizes = () => {
	const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
	const [isPrizeModalOpen, setIsPrizeModalOpen] = useState(false);

	const [isEditPrize, setIsEditPrize] = useState(false);
	const [isEditPrizeCategory, setIsEditPrizeCategory] = useState(false);

	const prizeCategories = useSelector(
		(state: Redux.Reducers.StoreState) => state.prizeCategories.total.data
	);

	// const prizes = prizeCategories.reduce((pv, cv) => [...pv, ...cv.prizes], []);
	const prizes = useSelector(
		(state: Redux.Reducers.StoreState) => state.prizes.total.data
	);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(Redux.Actions.fetchPrizes());
		dispatch(Redux.Actions.fetchPrizeCategories());
	}, []);

	const dropdownOptions = prizes.map((prize) => {
		return { value: prize._id, label: prize.name };
	});

	const [selectVal, setSelectVal] = useState([]);

	const onSelectValues = (value) => {
		const newState = [...value];
		setSelectVal(newState);
	};

	const [prizeToEdit, setPrizeToEdit] = useState(INITIAL_PRIZE_VALUES);
	const [categoryToEdit, setCategoryToEdit] = useState(INITIAL_CATEGORY_VALUES);

	const startEditPrize = (prize: Declarations.Prizes.Prize) => {
		setIsPrizeModalOpen(true);
		setPrizeToEdit(prize);
		setIsEditPrize(true);
	};

	const startEditCategory = (category: Declarations.Prizes.PrizeCategory) => {
		setIsCategoryModalOpen(true);
		const reqLVL = category.prereqDescription.match(/(\d+)/).pop();
		const prizesForCat = category.prizes.map((prize) => {
			return { value: prize._id, label: prize.name };
		});
		setSelectVal(prizesForCat);
		const editCategory = { ...category, requiredLVL: parseInt(reqLVL) };
		setCategoryToEdit(editCategory);
		setIsEditPrizeCategory(true);
	};

	const closePrizeForm = () => {
		setIsPrizeModalOpen(false);
		setIsEditPrize(false);
		setPrizeToEdit(INITIAL_PRIZE_VALUES);
	};

	const closeCategoryForm = () => {
		setIsCategoryModalOpen(false);
		setIsEditPrizeCategory(false);
		setCategoryToEdit(INITIAL_CATEGORY_VALUES);
	};

	return (
		<>
			<Components.Layouts.Sidebar>
				<div>
					<div
						style={{
							display: "flex",
							justifyContent: "left",
							alignItems: "stretch",
						}}
					>
						<h1 style={{ paddingRight: "20px" }}>Verðlaun</h1>

						<div style={{ paddingLeft: "20px", marginTop: "7.5px" }}>
							<Components.Atoms.Buttons.ActionButton
								onClick={() => setIsPrizeModalOpen(true)}
							>
								Búa til ný verðlaun
							</Components.Atoms.Buttons.ActionButton>
						</div>
					</div>
					<div
						style={{
							display: "grid",
							gridTemplateColumns: "repeat(4, 1fr)",
							gap: 50,
						}}
					>
						{prizes.map((prize) => (
							<div>
								<Components.Atoms.Items.Prize
									_id={prize._id}
									name={prize.name}
									img={prize.img}
									available={prize.available}
									brandImg={prize.brandImg}
								></Components.Atoms.Items.Prize>
								<div style={{ display: "flex", flex: "2" }}>
									<div style={{ width: "50%" }}>
										<Components.Atoms.Buttons.ActionButton
											onClick={() => startEditPrize(prize)}
										>
											Edit
										</Components.Atoms.Buttons.ActionButton>
									</div>
									<div style={{ width: "50%" }}>
										<Components.Atoms.Buttons.RemoveButton
											onClick={() => dispatch(Redux.Actions.deletePrize(prize))}
											// onClick={() => console.log(prize)}
										>
											Remove
										</Components.Atoms.Buttons.RemoveButton>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
				{/* herna skiptist i prizecategory */}
				<div>
					<div
						style={{
							display: "flex",
							justifyContent: "left",
							alignItems: "center",
							paddingTop: "25px",
						}}
					>
						<h1 style={{ paddingRight: "20px" }}>Vinningarflokkar</h1>
						<div style={{ paddingLeft: "20px" }}>
							<Components.Atoms.Buttons.ActionButton
								onClick={() => setIsCategoryModalOpen(true)}
							>
								Búa til nýjan flokk
							</Components.Atoms.Buttons.ActionButton>
						</div>
					</div>
					<div
						style={{
							display: "grid",
							gridTemplateColumns: "repeat(3, 1fr)",
							gap: 50,
						}}
					>
						{prizeCategories.map((category) => (
							<div>
								<Components.Atoms.Items.PrizeCategory
									_id={category._id}
									name={category.name}
									lockedImg={category.lockedImg}
									unlockedImg={category.unlockedImg}
									requiredLVL={category.requiredLVL}
									prizes={category.prizes}
									prereqDescription={category.prereqDescription}
								/>

								<div
									style={{
										display: "flex",
										flex: "3",
										justifyContent: "space-between",
									}}
								>
									{/* <div style={{ width: "50%" }}> */}
									<Components.Atoms.Buttons.ActionButton
										onClick={() => startEditCategory(category)}
									>
										Edit
									</Components.Atoms.Buttons.ActionButton>
									{/* </div> */}
									{/* <div style={{ width: "50%" }}> */}
									<Components.Atoms.Buttons.RemoveButton
										onClick={() =>
											dispatch(Redux.Actions.deletePrizeCategory(category))
										}
									>
										Remove
									</Components.Atoms.Buttons.RemoveButton>
									{/* </div> */}
								</div>
							</div>
						))}
					</div>
				</div>
			</Components.Layouts.Sidebar>
			<Components.Atoms.Wrappers.Overlay
				isVisible={isCategoryModalOpen}
				onClose={() => closeCategoryForm()}
			>
				<Formik
					initialValues={categoryToEdit}
					onSubmit={(values) => {
						setIsCategoryModalOpen(false);
						const formatValues = {
							...values,
							prizes: values.prizes.map((prize) => prize._id),
						};
						if (isEditPrizeCategory) {
							console.log(formatValues, "values i onSubmit");

							dispatch(Redux.Actions.updatePrizeCategory(formatValues));
						} else {
							dispatch(Redux.Actions.createPrizeCategory(formatValues));
						}
					}}
				>
					<Form>
						<Field placeholder="Nafn" type="text" name="name" />
						<Field placeholder="Lvl" type="number" name="requiredLVL" />
						<Field
							placeholder="Mynd kista opin"
							type="text"
							name="unlockedImg"
						/>
						<Field
							placeholder="Mynd kista lokuð"
							type="text"
							name="lockedImg"
						/>

						<FormikSelect
							handlePrizeSelect={(value) => onSelectValues(value)}
							value={selectVal}
							options={dropdownOptions}
						/>
						<Components.Atoms.Buttons.ActionButton>
							Búa til
						</Components.Atoms.Buttons.ActionButton>
					</Form>
				</Formik>
			</Components.Atoms.Wrappers.Overlay>
			<Components.Atoms.Wrappers.Overlay
				isVisible={isPrizeModalOpen}
				onClose={() => closePrizeForm()}
			>
				<Formik
					initialValues={prizeToEdit}
					onSubmit={(values) => {
						console.log(values);
						dispatch(Redux.Actions.createPrize(values));
					}}
				>
					<Form>
						<Field placeholder="Nafn" type="text" name="name" />
						<Field placeholder="mynd" type="text" name="img" />
						<Field placeholder="brandMynd" type="text" name="brandImg" />
						{isEditPrize ? (
							<Field
								placeholder="Merkja sem farid"
								type="checkbox"
								name="available"
							>
								Merkja sem farið
							</Field>
						) : (
							<></>
						)}

						<Components.Atoms.Buttons.ActionButton>
							Búa til
						</Components.Atoms.Buttons.ActionButton>
					</Form>
				</Formik>
			</Components.Atoms.Wrappers.Overlay>
		</>
	);
};

export default Prizes;
