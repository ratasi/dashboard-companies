import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const data = await req.json();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const company = await db.company.create({
      data: {
        userId,
        ...data,
      },
    });

    return NextResponse.json(company);
  } catch (error) {
    console.log("[COMPANY]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
