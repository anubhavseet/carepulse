"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
  Form,
} from "@/components/ui/form"
import Customformfeild from "../ui/Customformfeild"
import SubmitButton from "../SubmitButton"
import { useState } from "react"

import { UserFormvalidation } from "@/lib/validation"
import { log } from "console"


export enum Formfeildtype {
    INPUT = "input",
    CHECKBOX="checkbox",
    PHONEINPUT = "phoneInput",
    TEXTAREA="textarea",
    SELECT="select",
    DATEPICKER="DatePicker",
    SKELETON="skeleton"
}  
  

const Patientform = () => {

   const [isLoading, setisLoading] = useState(false)

    const form = useForm<z.infer<typeof UserFormvalidation>>({
        resolver: zodResolver(UserFormvalidation),
        defaultValues: {
          name: "",
          email:"",
          phone:""
        },
      })
    
    
    
      function onSubmit({name,email,phone}: z.infer<typeof UserFormvalidation>) {
       try {
          const UserData = {name,email,phone}
          console.log(UserData);
       } catch (error) {
           console.log(error);
           
       }

       
      }
      

      
      
     

  return (
    
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 flex-1 ">
        <section className="mb-10 space-y-4">
            <h1 className="header">Hi there👋</h1>
            <p className="text-dark-700">Schedule your first appointment</p>
        </section>
        
         <Customformfeild
          control={form.control}
          fieldType={Formfeildtype.INPUT}
          name="name"
          label="User name"
          placeholder="jon doe"
          iconSrc="/assets/icons/user.svg"
          
          />

          
         <Customformfeild
          control={form.control}
          fieldType={Formfeildtype.INPUT}
          name="email"
          label="Email"
          placeholder="jondoe@gmail.com"
          iconSrc="/assets/icons/email.svg"
          
          />
          
         <Customformfeild
          control={form.control}
          fieldType={Formfeildtype.PHONEINPUT}
          name="phone"
          label="PhoneNumber"
          placeholder="555-123-789"
          
          
          />


        <SubmitButton isLoading={isLoading} className=" hover:bg-green-300" >Get Started</SubmitButton>
        </form>
    </Form>
    
  )
}

export default Patientform