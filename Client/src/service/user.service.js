import { axiosClient } from '../api';

export const userServices = {
    getUserByID: (id) => {
        return axiosClient.get(`/users?id=${id}`);
    },
    getUserByPhone: (phone) => {
        return axiosClient.get(`/users?phone=${phone}`);
    }
};
