import { GetStaticProps } from "next";
import prisma from "../../../lib/prisma";
import { NextResponse } from "next/server";

// export const getStaticProps: GetStaticProps = async () => {
//   const feed = await prisma.post.findMany({
//     where: { published: true },
//     include: {
//       author: {
//         select: { firstName: true },
//       },
//     },
//   });
//   return {
//     props: { feed },
//     revalidate: 10,
//   };
// };

// export async function POST(req: Request) {
//   const { firstName, lastName, email, password } = await req.json();

//   await prisma.user.create({
//     data: { firstName, lastName, email, password },
//   });

//   return NextResponse.json({ message: "Created user" }, { status: 200 });
// }
