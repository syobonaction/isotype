'use client'

import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react"
import { signOut, useSession } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"
import { CiLogout } from "react-icons/ci"

const Navbar = () => {
  const { data: session } = useSession()

  return (
    <nav className="flex items-center w-full justify-between p-8 mx-auto bg-black">
      <Link href="/" className="text-4xl">How to Plan an Economy</Link>
      <div className="flex items-center justify-between text-xl space-x-8">
        <Link href="/learn">Learn</Link>
	      <Link href="/lab">Lab</Link>
        <Link href="/about">About</Link>
	      { session ? (
          <Dropdown>
            <DropdownTrigger>
              <Button>
                <Image 
                  className="rounded-full hover:cursor-pointer"
                  src={session.user?.image as string} 
                  width={38} 
                  height={38} 
                  alt="profile photo">
                </Image>
              </Button>
            </DropdownTrigger>
            <DropdownMenu 
              aria-label="User Menu"
              variant="light"
              className="bg-black border-2 border-neutral-900 rounded-md"
            >
              <DropdownItem 
                key="signout" 
                startContent={<CiLogout />}
                onPress={() => signOut({ callbackUrl: "/"})}
              >
                Sign Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          
        ) : (
          <Link href="/login">LogIn</Link>
        )}
      </div>
    </nav>
  )
}

export default Navbar
