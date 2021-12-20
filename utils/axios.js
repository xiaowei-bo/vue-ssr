import axios from "axios";

const request = axios.create({
    baseURL: "http://1.116.243.13"
});

request.interceptors.response.use(
    response => {
        const data = response.data || {};
        return data;
    },
    error => {
        return error.response && error.response.status;
    }
);

export default request;
 