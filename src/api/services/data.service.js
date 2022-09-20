
import { getToken, setToken, clearToken } from "../asyncStorage/token";
import http from "../http-common";

class DataService {

    loggedIn = async () => {
        let token = await getToken();
        return { success: token }
    }

    login = async data => {
        if (data.login === 'nik' && data.password === 'nik') {
            await setToken(JSON.stringify(data));
            return { data: { success: { profile: {} } } }
        }

        return { data: { error: 'incorrect login or password' } };
    };

    logOut = async () => {
        await clearToken();
    };

    users = async () => {
        try {
            return http.get('users');
        } catch (e) {
            console.log(e);
        }
    };

    posts = async () => {
        try {
            return http.get('posts');
        } catch (e) {
            console.log(e);
        }
    };
}

export default new DataService();
