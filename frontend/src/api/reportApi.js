import api from "./axios";

export const getDashboard = async () => {

    const response = await api.get("/report/dashboard");

    return response.data;

}

export const getCategoryAnalysis = async (month, year) => {

    const response = await api.get(
        `/report/category-analysis?month=${month}&year=${year}`
    );

    

    return response.data;

}