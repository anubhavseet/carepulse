"use client"
import {
    
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {Control} from "react-hook-form"
import { Formfeildtype } from "../forms/Patientform"
import Image from "next/image"
import "react-phone-number-input/style.css"
import PhoneInput from "react-phone-number-input"
import E164Number from "react-phone-number-input"



interface CustomProps{
    control:Control<any>,
    fieldType:Formfeildtype
    name:string
    label?:string
    iconSrc?:string
    iconAlt?:string
    disabled?:boolean
    placeholder?:string
    showTimeSelect?:boolean
    dateFormat?:string
    children?:React.ReactNode
}  



function RenderInput({field,props}:{field:any,props:CustomProps}) {

    const {fieldType,iconSrc,iconAlt,placeholder}=props
   switch (fieldType) {
    case Formfeildtype.INPUT:
        return(
            <div className=" flex rounded-md border border-dark-500 bg-dark-500">
                {iconSrc && (
                    <Image
                      src={iconSrc}
                      height={24}
                      width={24}
                      alt={iconAlt|| "icon"}
                      className="ml-2"
                    />
                )}
                <FormControl>
                    <Input
                      placeholder={placeholder}
                      {...field}
                      className=" shad-input border-0  "
                    
                    />

                </FormControl>
            </div>
        )
    case Formfeildtype.CHECKBOX:
    case Formfeildtype.PHONEINPUT:
        return(
            
               <FormControl>
                    <PhoneInput
                     defaultCountry="US"
                    placeholder={placeholder}
                    international
                    withCountryCallingCode
                    {...field}
                    value={field.value as  typeof E164Number | undefined}
                     onChange={field.onChange}
                     className="input-phone"
                    />
                </FormControl>
                
            )
    case Formfeildtype.TEXTAREA:
    case Formfeildtype.SELECT:
    case Formfeildtype.DATEPICKER:
    case Formfeildtype.SKELETON:
   
    default:
        break;
   }
}




const Customformfeild = ( props:CustomProps ) => {

  const {control,fieldType, name,label,iconSrc} = props
  
  return (
   
    <FormField
    control={control}
    name={name}
    render={({ field }) => (
        <FormItem className=" flex-1">
       { fieldType!== Formfeildtype.CHECKBOX && label && (
        <FormLabel>
            {label}
        </FormLabel>
       )}

       <RenderInput field={field} props={props}/>

       <FormMessage className=" shad-error"/>
      </FormItem>
    )}
  />
  )
}

export default Customformfeild