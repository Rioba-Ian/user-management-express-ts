import express from "express";
import {
 createUser,
 getAllUsers,
 loginUser,
} from "../controllers/user.controller";

const router = express.Router();

router.get("/", getAllUsers);

router.post("/", createUser);

router.post("/login", loginUser);

export default router;
