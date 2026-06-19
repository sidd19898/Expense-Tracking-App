import api from "./axios";

export const signup = async(data)=>{

    const response = await api.post(

        "/user/signup",

        data

    );

    return response.data;

}

export const login = async(data)=>{

    const response = await api.post(

        "/user/login",

        data

    );

    return response.data;

}