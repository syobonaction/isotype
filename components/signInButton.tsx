'use client'

import Image from "next/image"
import github from "@/public/github.png"
import google from "@/public/google.png"
import { signIn } from "next-auth/react"
import { Button } from "@nextui-org/react"

interface SignInButtonProps {
  variant: string
}

const SignInButton: React.FC<SignInButtonProps> = ({
  variant,
}) => {
  const title = variant.charAt(0).toUpperCase() + variant.slice(1)
  const {...src} = {github, google}

  const handleClick = () => {
    signIn(variant)
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
        hover:bg-slate-200
      "  
    >
      <Image src={src[variant as keyof typeof src]} alt={title + " Logo"} width={20} height={20} />
      <span className="ml-4">
        Continue with {title}
      </span>
    </Button>
  )
}

export default SignInButton