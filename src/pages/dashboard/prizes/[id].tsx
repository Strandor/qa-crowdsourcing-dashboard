import { useDispatch, useSelector } from "react-redux";
import * as Components from "../../../components";
import * as Redux from "../../../redux";
import { useRouter } from "next/router";
import styles from "./styles.module.scss";

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
					<div className={styles.prizesContainer}>
						{prizeCategories
							.find((cat) => cat._id === id)
							.prizes.sort((x, y) => (x === y ? 0 : x ? -1 : 1))
							.map((prize) => (
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
