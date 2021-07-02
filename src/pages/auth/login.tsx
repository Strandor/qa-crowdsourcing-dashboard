import { Formik, Form, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { Reducers, Actions } from "../../redux";
import * as Components from "../../components";

const Login = () => {
	const auth = useSelector((state: Reducers.StoreState) => state.auth);
	const dispatch = useDispatch();

	return (
		<Components.Layouts.CenterMaximum>
			<h2>Stjórnborð</h2>
			<Formik
				initialValues={{
					email: "",
					password: "",
				}}
				onSubmit={(values) => {
					dispatch(Actions.authenticate(values));
				}}
			>
				<Form>
					<Field
						placeholder="Netfang"
						type="email"
						name="email"
						style={{
							marginBottom: "10px",
						}}
					/>
					<Field
						placeholder="Lykilorð"
						type="password"
						name="password"
						style={{
							marginBottom: "10px",
						}}
					/>
					<Components.Atoms.Buttons.ActionButton
						isLoading={auth.authenticated.isLoading}
					>
						Innskráning
					</Components.Atoms.Buttons.ActionButton>
				</Form>
			</Formik>
			<p>{auth.authenticated.error && auth.authenticated.error.message}</p>
		</Components.Layouts.CenterMaximum>
	);
};

export default Login;
