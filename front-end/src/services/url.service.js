import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';

export const shortenUrlAPI = async (link) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/`, { link });
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : { message: "Lỗi kết nối server" };
    }
};