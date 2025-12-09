import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";
import { transactions } from "@/db/schema";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { date, description, category, amount, type } = body;

    // Validate required fields
    if (!date || !description || !category || !amount || !type) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Insert the new transaction using Drizzle
    await db.insert(transactions).values({
      date,
      description,
      category,
      amount: parseFloat(amount),
      type,
    });

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error("Error adding transaction:", error);
    return NextResponse.json(
      { error: "Failed to add transaction" },
      { status: 500 }
    );
  }
}
