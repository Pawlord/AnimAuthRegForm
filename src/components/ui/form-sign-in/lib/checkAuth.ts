//Вспомогательные функции
import { checkUser } from "../../../lib/checkUser";
import { comparePassword } from '../../../lib/comparePassword';

//Типы
import { IUser } from "../../../types/types";

type Message = {
    status: number,
    success: boolean,
    message: string
}

export const checkAuth = async (data: IUser): Promise<Message> => {
    try {
        const findedUser = checkUser(data);

        if (!findedUser) {
            return { status: 404, success: false, message: 'Произошла ошибка авторизации, такой пользователь не найден!' };
        }

        const result = await comparePassword(data.password, findedUser.password);

        if (!result) {
            return { status: 500, success: false, message: 'Произошла ошибка авторизации, неверный логин или пароль!' }
        }

        return { status: 200, success: true, message: 'Успешная авторизация!' }

    } catch (error) {
        console.error(error);
        return { status: 500, success: false, message: 'Произошла внутренняя ошибка сервера!' };
    }
}