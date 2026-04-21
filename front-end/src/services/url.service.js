import axios from './axios.interceptor';

const API_BASE_URL = 'https://shorted-url-g5gz.onrender.com';

export const shortenUrlAPI = async (link) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/url`, { link });
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : { message: "Lỗi kết nối server" };
    }
};

export const getHistoryUrl = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/history`);
        return response;
    } catch (error) {
        throw error.response ? error.response.data : { message: "Lỗi kết nối server" };
    }
};

export const loginAccount = async (email, password) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/login`,
            {
                email: email,
                password: password
            }
        );
        console.log(`${API_BASE_URL}/login`);

        console.log(response);
        return response;
    } catch (error) {
        throw error.response ? error.response.data : { message: "Lỗi kết nối server" };
    }
};

export const registerAccount = async (name, email, password) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/register`,
            {
                name: name,
                email: email,
                password: password
            }
        );
        console.log(response);
        return response;
    } catch (error) {
        throw error.response ? error.response.data : { message: "Lỗi kết nối server" };
    }
};