//хэширование
import bcrypt from 'bcryptjs';

export const comparePassword = async (password, hashedPassword) => {
    try {
        const result = await bcrypt.compare(password, hashedPassword)
        return result;

    } catch (error) {
        console.error(error)
        throw error;
    }
}