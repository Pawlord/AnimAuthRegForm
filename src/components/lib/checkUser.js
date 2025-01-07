export function checkUser(value) {
    const users = JSON.parse(localStorage.getItem('users')) || []

    let result;
    if (typeof value === 'string') {
        result = users.find(user => user.login === value || user.email === value);
    }
    else if (typeof value === 'object') {
        result = users.find(user => user.login === value.login || user.email === value.email)
    }
    return result;
}