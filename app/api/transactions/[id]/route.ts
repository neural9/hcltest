import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";
import { transactions } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: idString } = await params;
    const id = parseInt(idString);
    const body = await request.json();
    const { date, description, category, amount, type } = body;

    // Validate required fields
    if (!date || !description || !category || !amount || !type) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Update the transaction using Drizzle
    await db
      .update(transactions)
      .set({
        date,
        description,
        category,
        amount: parseFloat(amount),
        type,
      })
      .where(eq(transactions.id, id));

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error updating transaction:", error);
    return NextResponse.json(
      { error: "Failed to update transaction" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: idString } = await params;
    const id = parseInt(idString);

    // Delete the transaction using Drizzle
    await db.delete(transactions).where(eq(transactions.id, id));

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error deleting transaction:", error);
    return NextResponse.json(
      { error: "Failed to delete transaction" },
      { status: 500 }
    );
  }
}
