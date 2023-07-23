import axios from "axios";

axios.defaults.baseURL = "https://drf-api-renato-9b9c5c90ac56.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;