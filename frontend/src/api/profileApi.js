import api from "./axios";

export const getProfile = async () => {

    const response = await api.get("/profile");

    return response.data;

};

export const updateProfile = async (data) => {

    const response = await api.put(

        "/profile",

        data

    );

    alert(response.data.message);

    return response.data;

};

export const changePassword = async (data) => {

    const response = await api.put(

        "/profile/change-password",

        data

    );

    alert(response.data.message);

    return response.data;

};