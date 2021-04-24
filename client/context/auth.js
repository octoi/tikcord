import jwtDecode from 'jwt-decode';
import cookie from 'js-cookie';

export function decodeToken(token) {
    const decodedToken = jwtDecode(token);

    if (decodedToken.exp * 1000 < Date.now()) return false;

    return decodedToken;

}

export function getUser() {
    if (cookie.get("token")) {
        const decodedData = decodeToken(cookie.get("token"));

        if (!decodeToken) cookie.remove("token");

        return decodeToken;
    }

    return false
}
