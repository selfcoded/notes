import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

export async function POST(req: Request) {
  const { firstName, lastName, email, password } = await req.json();

  await prisma.user.create({
    data: { firstName, lastName, email, password },
  });

  return NextResponse.json({ message: "Created user", status: 200 });
}
