import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:3000/companies", 
});

export const getCompanies = async () => {

    const response = await instance.get('/listAllCompanies');
    const json = response.data.companies
    
    return json;
};


export const getSingleCompany = async (id) => {
    const response = await instance.get(`/companies/${id}`);
    const json = response.data[0];

    return json
}