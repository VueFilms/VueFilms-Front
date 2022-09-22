import axios from "axios";

const localAPI = axios.create({
    baseURL: "http://localhost:8002/api/users",
});

function saveToLocalStorage(data) {
    console.log(data)
    localStorage.accessToken = data.token
    localStorage.email = data.data.email
    localStorage.id = data.data._id
}

function saveToLocalStorageLogin(data) {
    console.log(data)
    localStorage.accessToken = data.data.token
    localStorage.email = data.data.user.email
    localStorage.id = data.data.user._id
}

export default {
    async getUser() {
        const { data } = await localAPI.get(`/${localStorage.id}`);
        console.log(data)
        return data
    },
    async signup(email, password) {
        const { data } = await localAPI.post("/register", { email, password });
        saveToLocalStorage(data)
        return data.data;
    },
    async login(email, password) {
        try {
            const { data } = await localAPI.post("/login", { email, password });
            saveToLocalStorageLogin(data)
            return true;
        } catch (error) {
            console.error(error)
            return false
        }
    },
};