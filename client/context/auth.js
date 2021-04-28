import jwtDecode from 'jwt-decode';
import cookie from 'js-cookie';

export function decodeToken(token) {
    const decodedToken = jwtDecode(token);

    if (decodedToken.exp * 1000 < Date.now()) return false;

    return decodedToken;

}

export function getUser() {
    const token = cookie.get("token")

    if (token) {
        const decodedData = decodeToken(token);

        if (!decodedData) cookie.remove("token");

        return { decodedData, token };
    }

    return false
}

