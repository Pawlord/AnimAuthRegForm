//хэширование
import bcrypt from 'bcryptjs';

export const hashPassword = async (password: string) => {
    try {
        const saltRound = 10;
        const hashedPassword = await bcrypt.hash(password, saltRound);
        return hashedPassword;

    } catch (error) {
        console.error(error)
        throw error;
    }
}