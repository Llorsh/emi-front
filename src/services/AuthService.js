import TokenService from "./TokenService";

export default class AuthService {

    static async loginParent(credentials) {
        return fetch("http://localhost:1236/api/v1/parent/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error(res.statusText);
                }
                return res.json();
            })
            .then(res => {
                
                TokenService.setToken(res.access_token);
                return res;
            });

    }

    static async registerParent(user) {
        return fetch("http://localhost:1236/api/v1/parent/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error(res.statusText);
                }
                return res.json();
            })
            .then(res => {
                TokenService.setToken(res.authToken);
                return res;
            });
    }
}