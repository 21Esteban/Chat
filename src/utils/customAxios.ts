import axios from "axios";
import { toast } from "react-toastify";

const customAxios = axios.create({
  baseURL: "http://127.0.0.1:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

customAxios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (!error.response) return Promise.reject(new Error('Network error'));
    
      if (error.response.status === 401) {
        localStorage.removeItem("token");
        window.location.href = "/login";
    }

      if(error.response.status === 400){
        toast(error.response.data.message);  
      }
  
      return Promise.reject(error);
    }
  );

export default customAxios;
