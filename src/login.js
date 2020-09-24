export function loginWithToken() {
    let token = localStorage.getItem('token');
    if (token) {
        return true;
    }
    return false;
};

export function login() {

};