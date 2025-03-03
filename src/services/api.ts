// npx json-server --watch livros.json 3000
import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:3000/livros',
});

export default api;