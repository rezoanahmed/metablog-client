import axios from "axios";


const useAxios = () => {
    const axiosInstance = axios.create({
        baseURL: "http://localhost:5000"
    })
    return axiosInstance;
};

export default useAxios;