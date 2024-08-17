import axios from "axios";

const useAxios = () => {
   const Axios = axios.create({
        baseURL : import.meta.env.VITE_SERVER_URL
    })
    return Axios
       
};

export default useAxios;