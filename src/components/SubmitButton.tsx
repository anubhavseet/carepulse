import Image from "next/image"
import { Button } from "./ui/button"

interface ButtonProps{
    isLoading:boolean,
    className:string,
    children:React.ReactNode
}


const SubmitButton = ({isLoading,className,children}:ButtonProps) => {
  return (
    <Button type="submit" disabled={isLoading} className={"shad-primary-btn w-full"??className}>

        {isLoading? (
            <div className=" flex items-center gap-4">
                <Image
                src="/assets/icons/loader.svg"
                width={24}
                height={24}
                className="animate-spin"
                alt="loader"                
                />
            </div>
        ): children }

    </Button>
  )
}

export default SubmitButton