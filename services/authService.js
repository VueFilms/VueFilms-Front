import axios from "axios";

const localAPI = axios.create({
    baseURL: "https://api-vuefilms.herokuapp.com",
});

function saveToLocalStorage(data) {
    localStorage.accessToken = data.accessToken
    localStorage.email = data.user.email
    localStorage.id = data.user.id
}

export default {
    async getUsers() {
        const response = await localAPI.get("/users");
        return response.data
    },
    async signup(email, password) {
        const response = await localAPI.post("/signup", { email, password });
        saveToLocalStorage(response.data)
        return response.data;
    },
    async login(email, password) {
        try {
            const response = await localAPI.post("/login", { email, password });
            saveToLocalStorage(response.data)
            return true;
        } catch (error) {
            console.error(error)
            return false
        }
    },
};