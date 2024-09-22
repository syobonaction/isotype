'use client'

import Link from "next/link"

const Header = () => {
  return (
    <nav className="flex items-center w-full justify-between p-8 mx-auto bg-black">
      <Link href="/" className="text-4xl">How to Plan an Economy</Link>
      <div className="flex items-center justify-between text-xl space-x-8">
        <Link href="/learn">Learn</Link>
	<Link href="/lab">Lab</Link>
        <Link href="/about">About</Link>
	<Link href="/login">LogIn</Link>
      </div>
    </nav> 
  )
}

export default Header
