'use client'

import { signIn } from "next-auth/react"
import { Button } from "@nextui-org/react"

interface SignInButtonProps {
  title: string,
  icon: React.ReactNode,
}

const SignInButton: React.FC<SignInButtonProps> = ({
  title,
  icon,
}) => {
  const handleClick = () => {
    signIn(title)
  }

  return (
    <Button
      onPress={handleClick}
      disableRipple={true}
      className="
        w-2/3 
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
      {icon}
      <span className="ml-4">
        Continue with {title}
      </span>
    </Button>
  )
}

export default SignInButton