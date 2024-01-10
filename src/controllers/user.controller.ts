import {Request, Response} from "express";
import {User} from "../models";

const getAllUsers = async (req: Request, res: Response) => {
 try {
  const users = await User.findAll();
  res.status(200).json(users);
 } catch (err) {
  res.status(500).json({message: err});
 }
};

const getUserById = async (req: Request, res: Response) => {
 try {
  const user = await User.findByPk(req.params.id);

  if (!user) {
   res.status(404).json({message: "User not found"});
  }
 } catch (err) {
  res.status(500).json({message: err});
 }
};

const createUser = async (req: Request, res: Response) => {
 try {
  const user = await User.create(req.body);
  res.status(201).json(user);
 } catch (err) {
  res.status(500).json({message: err});
 }
};

export {getAllUsers, getUserById, createUser};
