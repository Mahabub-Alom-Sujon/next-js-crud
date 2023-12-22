import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
export async function POST(req, res) {
    try {
        const prisma = new PrismaClient()
        const { searchParams } = new URL(req.url)
        const id=parseInt(searchParams.get("id"))
        const result = await prisma.users.delete({
            where: {id:id}
        })
        return NextResponse.json({ status: "Success", data: result })
        
    }
    catch (e) {
        return NextResponse.json({ status: "Fail", data: "e" })
    }
}