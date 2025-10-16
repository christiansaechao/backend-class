import prisma from "../utils/client.js";

// things failed getting data

export const getUsers = async (req, res) => {
    const users = await prisma.users.findMany();
    return users;
}