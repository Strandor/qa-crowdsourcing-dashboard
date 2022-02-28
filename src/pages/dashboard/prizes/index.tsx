import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Redux from "../../../redux";
import * as Components from "../../../components";
import { Field, Form, Formik } from "formik";
import { FormikSelect } from "../../../components/atoms";

const Prizes = () => {
	const [isCreatingNew, setIsCreatingNew] = useState(false);
	const [isCreatingNewPrize, setIsCreatingNewPrize] = useState(false);

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

	console.log(dropdownOptions, "!!!!");

	return (
		<>
			<Components.Layouts.Sidebar>
				<div>
					<h1>Verðlaun</h1>
					<div
						style={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
						}}
					>
						{prizes.map((prize) => (
							<Components.Atoms.Items.Prize
								_id={prize._id}
								name={prize.name}
								img={prize.img}
								available={prize.available}
								brandImg={prize.brandImg}
							></Components.Atoms.Items.Prize>
						))}

						<div>
							<Components.Atoms.Buttons.ActionButton
								onClick={() => setIsCreatingNewPrize(true)}
							>
								Búa til ný verðlaun
							</Components.Atoms.Buttons.ActionButton>
						</div>
					</div>
					<div
						style={{
							display: "grid",
							gridTemplateColumns: "repeat(3, 1fr)",
							gap: 50,
						}}
					></div>
				</div>
				{/* herna skiptist i prizecategory */}
				<div>
					<h1>Vinningaflokkar</h1>
					<div
						style={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
						}}
					>
						<h2>Allir flokkar</h2>
						<div>
							<Components.Atoms.Buttons.ActionButton
								onClick={() => setIsCreatingNew(true)}
							>
								Búa til flokk
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
							<Components.Atoms.Items.PrizeCategory
								_id={category._id}
								name={category.name}
								lockedImg={category.lockedImg}
								requiredLVL={category.requiredLVL}
								prizes={category.prizes}
							/>
						))}
					</div>
				</div>
			</Components.Layouts.Sidebar>
			<Components.Atoms.Wrappers.Overlay
				isVisible={isCreatingNew}
				onClose={() => setIsCreatingNew(false)}
			>
				<Formik
					initialValues={{
						name: "",
						unlockedImg: "",
						lockedImg: "",
						requiredLVL: 0,
						prizes: [],
					}}
					onSubmit={(values) => {
						// console.log(values);
						setIsCreatingNew(false);
						// TODO: create a new prize category, need to fix to take in prizes to
						dispatch(Redux.Actions.createPrizeCategory(values));
					}}
				>
					<Form>
						<Field placeholder="Nafn" type="text" name="name" />
						<Field placeholder="Lvl" type="number" name="requiredLvl" />
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
				isVisible={isCreatingNewPrize}
				onClose={() => setIsCreatingNewPrize(false)}
			>
				<Formik
					initialValues={{
						name: "",
						img: "",
						brandImg: "",
						available: true,
					}}
					onSubmit={(values) => {
						dispatch(Redux.Actions.createPrize(values));
					}}
				>
					<Form>
						<Field placeholder="Nafn" type="text" name="name" />
						<Field placeholder="mynd" type="text" name="img" />
						<Field placeholder="brandMynd" type="text" name="brandImg" />

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
