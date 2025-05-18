import {z} from "zod";

export const registrationSchema = z.object({
  userName: z.string().min(3, "Username must be at least 3 characters long"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});
