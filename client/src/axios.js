import axios from "axios";

export const baseURL = "http://45.84.225.33/api";

const instance = axios.create({
	baseURL,
});

instance.interceptors.request.use((config) => {
	config.headers.Authorization = `Bearer ${window.localStorage.getItem("access_token")}`;
	return config;
});

export default instance;
