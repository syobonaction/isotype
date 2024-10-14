import { connectDB } from "@/lib/mongodb"
import User from "@/models/User"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  const { userId, name, email } = await request.json()

  await connectDB()
  await User.create({ userId, name, email })

  return NextResponse.json({ message: "User created." }, { status: 201 })
}