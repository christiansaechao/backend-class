import express from "express";
import {
  getAllUsers,
  getUserById,
  addNewUser,
  updateUser,
  deleteUser,
} from "../controllers/UsersController.js";

const router = express.Router();

// prefixed with /users
router.get("/", getAllUsers);

// localhost:3000/users/1
router.get("/:id", getUserById);

router.post("/", addNewUser);

router.put("/", updateUser);

router.delete("/", deleteUser);

export default router;
