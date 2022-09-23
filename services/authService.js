import axios from "axios";

const localAPI = axios.create({
    baseURL: "https://api-vuefilms.herokuapp.com/api/users",
});

function saveToLocalStorage(data) {
    localStorage.accessToken = data.token
    localStorage.email = data.data.email
    localStorage.id = data.data._id
}

function saveToLocalStorageLogin(data) {
    localStorage.accessToken = data.data.token
    localStorage.email = data.data.user.email
    localStorage.id = data.data.user._id
}

export default {
    async getUser() {
        const { data } = await localAPI.get(`/${localStorage.id}`);
        return data
    },
    async signup(email, password) {
        try {
            const { data } = await localAPI.post("/register", { email, password });
            saveToLocalStorage(data)
            return data.data;
        } catch (error) {
            console.error(error)
            return false
        }
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
    async addMovie(id) {
        try {
            const movieId = parseInt(id)
            await localAPI.put(`${localStorage.id}/movie`, { movieId });
            return true;
        } catch (error) {
            console.error(error)
            return false
        }
    },
    async deleteMovie(id) {
        try {
            const idMovie = parseInt(id)
            await localAPI.delete(`${localStorage.id}/movie`, { data: { "movieId": idMovie } });
            return true;
        } catch (error) {
            console.error(error)
            return false
        }
    }
};