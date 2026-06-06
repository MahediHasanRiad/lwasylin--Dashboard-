import {z} from 'zod'

export const SubscriptionSchema = z.object({
    packageId: z.string(),
    name: z.string(),
    price: z.coerce.number(),
    planType: z.string(),
    duration: z.string(),
    features: z.array(z.string()).min(1, 'Add minimum 1 Feature')
})


export type SubscriptionSchemaType = z.infer<typeof SubscriptionSchema>