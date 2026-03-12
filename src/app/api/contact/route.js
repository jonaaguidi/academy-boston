import { Client } from "@notionhq/client";
import { NextResponse } from "next/server";

const notion = new Client({ auth: process.env.NOTION_API_KEY });

export async function POST(request) {
  try {
    const { firstName, lastName, organization, email, phone, budget, capacity, rentalDate, rentalTime, message } =
      await request.json();

    if (!firstName || !lastName || !organization || !email || !phone || !budget || !capacity || !rentalDate || !rentalTime || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const databaseId = process.env.NOTION_DATABASE_ID?.trim();

    const properties = {
      Name: {
        title: [{ text: { content: firstName } }],
      },
      "Last Name": {
        rich_text: [{ text: { content: lastName } }],
      },
      Organization: {
        rich_text: [{ text: { content: organization } }],
      },
      Email: {
        email: email,
      },
      Phone: {
        phone_number: phone,
      },
      Message: {
        rich_text: [{ text: { content: message } }],
      },
    };

    // Try adding dedicated columns if they exist in the database
    try {
      await notion.pages.create({
        parent: { database_id: databaseId },
        properties: {
          ...properties,
          Budget: { rich_text: [{ text: { content: budget } }] },
          Capacity: { rich_text: [{ text: { content: capacity } }] },
          "Rental Date": { date: { start: rentalDate } },
          "Rental Time": { rich_text: [{ text: { content: rentalTime } }] },
        },
      });
    } catch {
      // Fallback: columns don't exist yet, send without them
      await notion.pages.create({
        parent: { database_id: databaseId },
        properties,
      });
    }

    return NextResponse.json({ status: "ok" });
  } catch (error) {
    console.error("Notion API error:", error?.body || error?.message || error);
    return NextResponse.json(
      {
        error: "Failed to submit form",
        detail: error?.body?.message || error?.message || "Unknown error",
      },
      { status: 500 }
    );
  }
}
