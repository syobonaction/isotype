'use client'

import { useSession } from "next-auth/react"

const Profile = () => {
  const { data: session } = useSession()
  const firstName = session?.user?.name?.split(" ")[0]

  return (
    <div className="p-16">
      <h1 className="text-4xl">Welcome back {firstName}!</h1>
    </div>
  )
}

export default Profile
