import axios from "axios";

export const api = axios.create({
    baseURL: 'https://crudcrud.com/api/d949d82a3fb248a79d2f9b80e5bd3c45/',
    timeout: 10000,
});

