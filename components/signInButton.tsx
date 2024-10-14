'use client'

import { signIn } from "next-auth/react"
import { Button } from "@nextui-org/react"
import { ReactNode } from "react"

interface SignInButtonProps {
  title: string
  children: ReactNode
}

const SignInButton: React.FC<SignInButtonProps> = ({
  title,
  children,
}) => {
  const handleClick = () => {
    signIn(title)
  }

  return (
    <Button
      onPress={handleClick}
      disableRipple={true}
      className="
        w-full
        flex 
        items-center
        font-semibold
        justify-center 
        h-14 
        px-6 
        mt-4 
        text-xl 
        transition-colors 
        duration-300 
        bg-white 
        border-2 
        border-black 
        text-black 
        rounded-lg 
        focus:shadow-outline 
        hover:bg-neutral-200
      "  
    >
      {children}
      <span className="ml-4">
        Continue with {title}
      </span>
    </Button>
  )
}

export default SignInButton