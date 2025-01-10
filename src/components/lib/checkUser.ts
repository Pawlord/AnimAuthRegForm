//Типы
import { IUser } from "../types/types";

export function checkUser(value: string | IUser) {
    const users = JSON.parse(localStorage.getItem('users') ?? '[]')

    let result;
    if (typeof value === 'string') {
        result = users.find((user: IUser) => user.login === value || user.email === value);
    }
    else if (typeof value === 'object') {
        result = users.find((user: IUser) => user.login === value.login || user.email === value.email)
    }
    return result;
}