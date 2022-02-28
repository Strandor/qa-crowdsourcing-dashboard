import { useDispatch, useSelector } from "react-redux";
import * as Components from "../../../components";
import * as Redux from "../../../redux";
import { AppProps } from "next/dist/next-server/lib/router/router";
import { useRouter } from "next/router";
// { router }: AppProps
const Prize = () => {
	const router = useRouter();
	const { id } = router.query;
	const prizeCategories = useSelector(
		(state: Redux.Reducers.StoreState) => state.prizeCategories.total.data
	);

	return (
		<Components.Layouts.Sidebar>
			<h1>Vinningar</h1>
			<h1>id:{id}</h1>
			{/* {category.prizes.map((prize) => (
				<Components.Atoms.Items.Prize
					_id={prize._id}
					name={prize.name}
					img={prize.img}
					available={prize.available}
					brandImg={prize.brandImg}
				></Components.Atoms.Items.Prize>
			))} */}
		</Components.Layouts.Sidebar>
	);
};

export default Prize;
