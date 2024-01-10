import {z} from "zod";

enum RoleEnumType {
 ADMIN = "ADMIN",
 USER = "USER",
}

export const createUserSchema = z.object({
 name: z.string().optional(),
 email: z.string().email(),
 password: z.string({
  required_error: "Password is required",
 }),
 role: z.nativeEnum(RoleEnumType),
});

export const loginSchema = z.object({
 email: z.string().email(),
 password: z.string(),
});

export type CreateUserInput = z.infer<typeof createUserSchema>;

export type LoginInput = z.infer<typeof loginSchema>;
