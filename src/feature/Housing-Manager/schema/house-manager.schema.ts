
import {z} from 'zod'

const HouseManagerSchema = z.object({
    name: z.string(),
    communityName: z.string(),
    email: z.email(),
    password: z.string().min(6, 'Minimum 6 character')
})

export type HouseManagerSchemaType = z.infer<typeof HouseManagerSchema>;