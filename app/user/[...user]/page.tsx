'use client'

import { usePathname } from "next/navigation"

const Profile = () => {
  const pathname = usePathname()

  return (
    <div>
      <h1>Welcome back {pathname}!</h1>
    </div>
  )
}

export default Profile
