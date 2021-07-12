import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Redux from "../../../redux";
import * as Components from "../../../components";
import { Line } from "react-chartjs-2";
import { Field, Form, Formik } from "formik";

const Prizes = () => {
	const [isCreatingNew, setIsCreatingNew] = useState(false);

	return (
		<>
			<Components.Layouts.Sidebar>
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
					<Components.Atoms.Items.PrizeCategory
						_id={"he"}
						name={"Klíkan"}
						chestURL={"https://spurningar.is/images/blue_closed.png"}
						requiredLVL={3}
					/>
				</div>
			</Components.Layouts.Sidebar>
			<Components.Atoms.Wrappers.Overlay
				isVisible={isCreatingNew}
				onClose={() => setIsCreatingNew(false)}
			>
				<Formik
					initialValues={{
						email: "",
						password: "",
					}}
					onSubmit={(values) => {
						console.log(values);
					}}
				>
					<Form>
						<Field placeholder="Nafn" type="text" name="name" />
						<Field placeholder="Lvl" type="number" name="requiredLvl" />
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
