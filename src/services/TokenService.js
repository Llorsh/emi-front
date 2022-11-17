export default class TokenService {
    static getToken() {
        return localStorage.getItem('token');
    }
    static setToken(token) {
        localStorage.setItem('token', token);
    }
    static removeToken() {
        localStorage.removeItem('token');
    }

    static isLogged() {
        return !!TokenService.getToken();
    }
}