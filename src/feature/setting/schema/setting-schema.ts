import { z } from "zod";

export const SettingSchema = z
  .object({
    name: z.string(),
    email: z.email(),
    newPassword: z.string(),
    confirmPassword: z.string(),
    ProfileImage: z.instanceof(File),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    error: "Passwords don't match",
    path: ["confirm"],
  });


  export type SettingSchemaType = z.infer<typeof SettingSchema>