import { AppProps } from "next/dist/next-server/lib/router/router";
import { wrapper } from "../redux/store";
import "../styles/app.scss";

function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}

export default wrapper.withRedux(App);
