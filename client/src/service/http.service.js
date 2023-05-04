import axios from "axios";
import {toast} from "react-toastify";
import localStorageService from "./localStorage.service";
import configFile from "../config";

const http = axios.create({
	baseURL: configFile.apiEndpoint,
});

http.interceptors.request.use(
	async function (config) {
		const accessToken = localStorageService.getAccessToken();
		if (accessToken) {
			config.headers = {
				...config.headers,
				Authorization: `Bearer ${accessToken}`,
			};
		}
		return config;
	},
	function (error) {
		return Promise.reject(error);
	}
);

function transformData(data) {
	return data && !data._id
		? Object.keys(data).map((key) => ({
				...data[key],
		  }))
		: data;
}

http.interceptors.response.use(
	(res) => {
		res.data = {content: transformData(res.data)};
		return res;
	},
	function (error) {
		const expectedErrors = error.response && error.response.status >= 400 && error.response.status < 500;

		if (!expectedErrors) {
			console.log(error);
			toast.error("Something went wrong. Try again later.");
		}
		return Promise.reject(error);
	}
);

const httpService = {
	get: http.get,
	post: http.post,
	put: http.put,
	delete: http.delete,
	patch: http.patch,
};

export default httpService;
