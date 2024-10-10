'use client'

import { useSession } from "next-auth/react"

const Profile = () => {
  const { data: session } = useSession()

  return (
    <div>
      <h1>Welcome back {session?.user?.name}!</h1>
    </div>
  )
}

export default Profile
