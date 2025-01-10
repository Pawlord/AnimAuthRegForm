//хэширование
import bcrypt from 'bcryptjs';

export const comparePassword = async (password: string, hashedPassword: string) => {
    try {
        const result = await bcrypt.compare(password, hashedPassword)
        return result;

    } catch (error) {
        console.error(error)
        throw error;
    }
}