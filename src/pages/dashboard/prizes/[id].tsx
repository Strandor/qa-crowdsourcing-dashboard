import { useDispatch, useSelector } from "react-redux";
import * as Components from "../../../components";
import * as Redux from "../../../redux";
import { AppProps } from "next/dist/next-server/lib/router/router";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { number } from "prop-types";

// { router }: AppProps
const Prize = () => {
	const router = useRouter();
	const { id } = router.query;
	const prizeCategories = useSelector(
		(state: Redux.Reducers.StoreState) => state.prizeCategories.total.data
	);
	// const [category, setCategory] = useState({});

	// useEffect(() => {
	// 	const prizeCategories = useSelector(
	// 		(state: Redux.Reducers.StoreState) => state.prizeCategories.total.data
	// 	);
	// 	// setCategory(prizeCategories.find((cat) => cat._id === id));
	// }, [prizeCategories]);
	// console.log(id);
	// const [category, setCategory] = useState({});
	// setCategory(prizeCategories.find((cat) => cat._id === id));

	return (
		<>
			{prizeCategories.length > 0 ? (
				<Components.Layouts.Sidebar>
					<h1>Vinningar</h1>
					<h1>id:{id}</h1>

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
				</Components.Layouts.Sidebar>
			) : (
				<></>
			)}
		</>
	);
};

export default Prize;
