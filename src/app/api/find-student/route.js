import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function POST(req, res) {
    try {
        const prisma = new PrismaClient()
        //let reqBody = await req.json()
        const result = await prisma.users.findMany()
        return NextResponse.json({ status: "Success", data: result })
        
    }
    catch (e) {
        return NextResponse.json({ status: "Fail", data: "e" })
    }
}