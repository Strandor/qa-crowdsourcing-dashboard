import axios from "axios";

export default axios.create({
	baseURL: "https://spurningar.herokuapp.com",
	withCredentials: true,
	timeout: 10000,
});
