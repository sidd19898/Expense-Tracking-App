import api from "./axios";

export const getTransactions = async () => {

    const response = await api.get("/transaction");

    return response.data;

};

export const createTransaction = async (data) => {

    try {

        const response = await api.post("/transaction", data);

        alert(response.data.message);

        return response.data;

    }

    catch (err) {

        alert(

            err.response?.data?.message ||

            "Something went wrong"

        );

        throw err;

    }

};

export const updateTransaction = async (id, data) => {

    try {

        const response = await api.put(

            `/transaction/${id}`,

            data

        );

        alert("Transaction Updated");

        return response.data;

    }

    catch (err) {

        alert(

            err.response?.data?.message ||

            "Something went wrong"

        );

        throw err;

    }

};

export const deleteTransaction = async (id) => {

    try {

        const response = await api.delete(

            `/transaction/${id}`

        );

        alert(response.data.message);

        return response.data;

    }

    catch (err) {

        alert(

            err.response?.data?.message ||

            "Something went wrong"

        );

        throw err;

    }

};