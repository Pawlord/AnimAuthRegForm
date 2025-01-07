import { users } from '../../../consts/users';
import { hashPassword } from './hashPassword';

export async function registerUser(data) {
    try {
        const hashedPassword = await hashPassword(data.password)
        const updatedData = {
            ...data,
            password: hashedPassword
        }
        users.push(updatedData);
        localStorage.setItem('users', JSON.stringify(users));
        console.log(users)

        return { status: 200, success: true, message: 'Успешная регистрация!' }
    } catch (error) {
        console.error(error)
        return { status: 500, success: false, message: 'При регистрации произошла ошибка!' }
    }

}

