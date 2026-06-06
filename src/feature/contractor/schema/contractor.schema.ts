import {z} from 'zod'

export const ContractorSchema = z.object({
    name: z.string().min(3, 'Minimum 3 character'),
    services: z.string(),
    email: z.email(),
    password: z.string()
})

export type ContractorSchemaType = z.infer<typeof ContractorSchema>