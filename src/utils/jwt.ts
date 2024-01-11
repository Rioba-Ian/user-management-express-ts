import jwt from "jsonwebtoken";
import {zodEnv} from "./envSchema";

export function generateToken(userId: number, role: string) {
 return jwt.sign({userId, role}, zodEnv.JWT_SECRET, {expiresIn: "2h"});
}

export function verifyToken(token: string | undefined) {
 if (!token) return null;

 try {
  return jwt.verify(token, zodEnv.JWT_SECRET);
 } catch (e) {
  return null;
 }
}
