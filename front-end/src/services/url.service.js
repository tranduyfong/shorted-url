import axios from 'axios';

const API_BASE_URL = 'https://shorted-url-g5gz.onrender.com';

export const shortenUrlAPI = async (link) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/`, { link });
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : { message: "Lỗi kết nối server" };
    }
};

export const getHistoryUrl = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/history`);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : { message: "Lỗi kết nối server" };
    }
};