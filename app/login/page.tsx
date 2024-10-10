import SignInButton from "@/components/signInButton"
import { authConfig } from "@/lib/auth"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

const Login = async() => {
  const session = await getServerSession(authConfig)

  if(session) return redirect(`/user/${session.user?.name}`)

  return (
    <div className="w-full flex flex-col items-center justify-center py-2">
      <div className="flex flex-col items-center w-1/3 mt-32 p-10">
        <h1 className="mt-10 mb-4 text-4xl font-bold">Log In</h1>
        <SignInButton variant="github" />
        <SignInButton variant="google" />
      </div>
    </div>
  )
}

export default Login
