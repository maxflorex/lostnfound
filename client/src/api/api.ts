import axios from 'axios';

// - - - - - USERS

export const createUser = async (userData: any) => {
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/user`, userData);
    return response.data;
}

export const getUsers = async () => {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/user`);
    return response.data;
}

export const updateUser = async (userId: string, updateData: any) => {
    const response = await axios.put(`${import.meta.env.VITE_API_URL}/user/${userId}`, updateData);
    return response.data;
}

export const deleteUser = async (userId: string) => {
    const response = await axios.delete(`${import.meta.env.VITE_API_URL}/user/${userId}`);
    return response.data;
}

export const login = async (email: string, password: string) => {
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/user/login`, { email, password });
    return response.data;
}

// - - - - - ITEMS

export const createItem = async (item: any) => {
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/items`, item);
    return response.data;
};

export const fetchAllItems = async () => {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/items`);
    return response.data;
};

export const fetchItemById = async (id: string) => {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/items/${id}`);
    return response.data;
};

export const updateItemById = async (id: string, item: any) => {
    const response = await axios.patch(`${import.meta.env.VITE_API_URL}/items/${id}`, item);
    return response.data;
};

export const deleteItemById = async (id: any) => {
    const response = await axios.delete(`${import.meta.env.VITE_API_URL}/items/${id}`);
    return response.data;
};

export const deleteAllItems = async (ids: string[]) => {
    const responses = await Promise.all(
        ids.map(id => axios.delete(`${import.meta.env.VITE_API_URL}/items/${id}`))
    );
    return responses.map(response => response.data);
};