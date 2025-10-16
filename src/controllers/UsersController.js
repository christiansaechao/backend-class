import prisma from "../utils/client.js";
import { getUsers } from "../services/UsersServices.js";

// when a request fails

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await getUsers();
    res.json({ success: true, data: users });
  } catch (err) {
    next(err);
  }
};

export const getUserById = async (req, res) => {
  try {
    const userId = parseInt(req.params.id);
    const user = await prisma.users.findUnique({
      where: { id: userId },
    });

    res.json({ success: true, data: user });
  } catch (error) {
    if (error.code === "P2025") {
      console.log("User not found");
    } else {
      throw error;
    }
  }
};

export const addNewUser = async (req, res) => {
  const { email, firstName, lastName, password } = req.body;
  const newUser = await prisma.users.create({
    data: {
        email,
        firstName,
        lastName,
        password,
    },
  })
    res.json({ sucess: true, data: newUser })
};

// put request - change user finn's age to 22  const data = await axios.post('localhost:3000/user, { headers: {}, body: { name: 'bob', age: 22 }})
export const updateUser = (req, res) => {
  const name = req.body.name;
  const age = req.body.age;

  // returns the index of the object in the users array [1]
  const userIndex = users.findIndex((user) => user.name === name);

  if (userIndex === -1) {
    res.send({ success: false, error: "No user was found with that name" });
  }

  const userToUpdate = [...users[userIndex], age];

  users[userIndex] = userToUpdate;

  res.send({ success: true, data: users });
};

export const deleteUser = (req, res) => {
  const index = users.findIndex((user) => user.name === req.body.name);

  if (index === -1) {
    res.send({ success: false, error: "No user was found with that name" });
  }

  // if valid element found
  users.splice(index, 1);
  res.send({ success: true, data: users });
};
