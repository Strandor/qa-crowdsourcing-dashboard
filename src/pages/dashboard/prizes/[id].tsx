import { useDispatch, useSelector } from "react-redux";
import * as Components from "../../../components";
import * as Redux from "../../../redux";
import { AppProps } from "next/dist/next-server/lib/router/router";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { number } from "prop-types";
import styles from "./styles.module.scss";

// { router }: AppProps
const Prize = () => {
	const router = useRouter();
	const { id } = router.query;
	const prizeCategories = useSelector(
		(state: Redux.Reducers.StoreState) => state.prizeCategories.total.data
	);

	return (
		<>
			{prizeCategories.length > 0 ? (
				<Components.Layouts.Sidebar>
					<h1>Vinningar</h1>
					<h1>id:{id}</h1>
					<div className={styles.prizesContainer}>
						{prizeCategories
							.find((cat) => cat._id === id)
							.prizes.map((prize) => (
								<Components.Atoms.Items.Prize
									_id={prize._id}
									name={prize.name}
									img={prize.img}
									available={prize.available}
									brandImg={prize.brandImg}
								></Components.Atoms.Items.Prize>
							))}
					</div>
				</Components.Layouts.Sidebar>
			) : (
				<></>
			)}
		</>
	);
};

export default Prize;
