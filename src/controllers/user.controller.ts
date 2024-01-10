import {Request, Response} from "express";
import prisma from "../utils/prisma";
import {verifyToken} from "../utils/jwt";
import {createUserSchema} from "../schemas/user.schema";
import {hashPassword} from "../utils/hashPassword";
import {getUser} from "../services/user.service";

interface JwtPayload {
 userId: string;
 role: string;
}

const getAllUsers = async (req: Request, res: Response) => {
 const token = req.headers["authorization"];

 const decoded = verifyToken(token) as JwtPayload;

 if (!decoded) {
  return res.status(401).json({message: "Unauthorized"});
 }

 try {
  if (decoded.role === "ADMIN") {
   // fetch all users
   const users = await prisma.user.findMany();

   return res.status(200).json(users);
  } else {
   const user = await prisma.user.findUnique({
    where: {id: Number(decoded.userId)},
   });
   return res.status(200).json(user);
  }
 } catch (err) {
  res.status(500).json({message: err});
 }
};

const getUserById = async (req: Request, res: Response) => {
 try {
  const user = await prisma.user.findUnique({
   where: {
    id: Number(req.params.id),
   },
  });

  if (!user) {
   res.status(404).json({message: "User not found"});
  }
 } catch (err) {
  res.status(500).json({message: err});
 }
};

const createUser = async (req: Request, res: Response) => {
 try {
  const data = createUserSchema.safeParse(req.body);

  if (!data.success) {
   return res.status(400).json({message: data.error});
  }

  const userExists = await getUser(data.data.email);

  if (userExists) {
   return res.status(400).json({message: "User already exists"});
  }

  const hashedPassword = await hashPassword(data.data.password);

  const user = await prisma.user.create({
   data: {
    name: data.data.name,
    email: data.data.email,
    password: hashedPassword,
    role: data.data.role,
   },
  });

  const {password, ...rest} = user;
  res.status(201).json(rest);
 } catch (err) {
  res.status(500).json({message: err});
 }
};

export {getAllUsers, getUserById, createUser};
