import jwtDecode from 'jwt-decode';

export function decodeToken(token) {
    const decodedToken = jwtDecode(token);

    if (decodedToken.exp * 1000 < Date.now()) {
        return false;
    } else {
        return decodedToken;
    }
}

export function getUser() {
    if (sessionStorage.getItem("token")) {
        const decodedData = decodeToken(sessionStorage.getItem("token"));

        if (!decodeToken) sessionStorage.removeItem(decodeToken);

        return decodeToken;
    }

    return false
}
