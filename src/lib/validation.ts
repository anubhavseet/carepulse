
import {z} from "zod"

export const UserFormvalidation = z.object({
    name: z.string().min(2,"name must be greater than 2 characters").max(50,"name must be at most 50 characters"),
   email: z.string().email("Inavalid email id"),
   phone:z.string().refine((phone)=>/^\+\d{10,15}$/.test(phone),'Invalid Phone Number')
  

    
  })