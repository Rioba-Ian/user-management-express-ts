import brcypt from "bcryptjs";

export async function hashPassword(password: string) {
 const salt = await brcypt.genSalt(10);
 return await brcypt.hash(password, salt);
}

export async function verifyPassword(password: string, hashedPassword: string) {
 return await brcypt.compare(password, hashedPassword);
}
