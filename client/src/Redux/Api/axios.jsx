import axios from "axios"

const Axios = axios.create({
    baseUrl: "http://Localhost:5000/api",
});

export default Axios;