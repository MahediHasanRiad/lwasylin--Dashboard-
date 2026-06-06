import {z} from 'zod'


const AddCommunitySchema = z.object({
    name: z.string(),
    location: z.string(),
    status: z.enum(['ACTIVE', 'PENDING', 'SUSPEND']),
    houseManager: z.string()
})

export type AddCommunitySchemaType = z.infer<typeof AddCommunitySchema>