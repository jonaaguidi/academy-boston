import { Client } from "@notionhq/client";
import { NextResponse } from "next/server";

const notion = new Client({ auth: process.env.NOTION_API_KEY });

export async function POST(request) {
  try {
    const { firstName, lastName, organization, email, phone, message } =
      await request.json();

    if (!firstName || !lastName || !email || !phone || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    await notion.pages.create({
      parent: { database_id: process.env.NOTION_DATABASE_ID },
      properties: {
        Name: {
          title: [{ text: { content: firstName } }],
        },
        "Last Name": {
          rich_text: [{ text: { content: lastName } }],
        },
        Organization: {
          rich_text: [{ text: { content: organization || "" } }],
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
      },
    });

    return NextResponse.json({ status: "ok" });
  } catch (error) {
    console.error("Notion API error:", error);
    return NextResponse.json(
      { error: "Failed to submit form" },
      { status: 500 }
    );
  }
}
