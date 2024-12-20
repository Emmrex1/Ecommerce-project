import axios from "axios";

export const fetchDataFromApi = async (url) => {
    try {
        const data = await axios.get("http://localhost:4000/api/" + url);
    } catch (error) {
        
    }
};