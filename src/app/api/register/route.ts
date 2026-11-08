import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      fullName,
      gender,
      age,
      lookingFor,
      phone,
      location,
      occupation,
      profileCode,
      notes,
    } = body;

    if (!fullName || !phone || !lookingFor) {
      return NextResponse.json(
        { error: "Full Name, Phone/WhatsApp, and Match Preference are required." },
        { status: 400 }
      );
    }

    const applicationData = {
      fullName,
      gender,
      age: Number(age) || null,
      lookingFor,
      phone,
      location: location || "Not specified",
      occupation: occupation || "Not specified",
      profileCode: profileCode || "General Match",
      notes: notes || "",
      status: "pending",
      createdAt: new Date(),
    };

    // Attempt MongoDB save if configured
    let savedToDatabase = false;
    if (clientPromise) {
      try {
        const client = await clientPromise;
        const dbName = process.env.MONGODB_DB_NAME || "afroconnect";
        const db = client.db(dbName);
        const collection = db.collection("applications");
        await collection.insertOne(applicationData);
        savedToDatabase = true;
      } catch (dbErr) {
        console.warn("MongoDB write failed, proceeding with direct WhatsApp dispatch:", dbErr);
      }
    }

    // Generate pre-filled WhatsApp message URL securely from env
    const targetWhatsApp = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || "2348107906879";
    const message = `Hello Afro-Connect Agency! %0AMy Name: ${encodeURIComponent(fullName)}%0AAge: ${age || "N/A"}%0AGender: ${gender || "N/A"}%0ALooking For: ${encodeURIComponent(lookingFor)}%0ALocation: ${encodeURIComponent(location || "N/A")}%0AOccupation: ${encodeURIComponent(occupation || "N/A")}%0ASelected Profile Code: ${encodeURIComponent(profileCode || "General Request")}%0APhone: ${encodeURIComponent(phone)}%0A%0APlease connect me with a verified partner discreetly.`;
    const whatsappUrl = `https://wa.me/${targetWhatsApp}?text=${message}`;

    return NextResponse.json({
      success: true,
      savedToDatabase,
      whatsappUrl,
      message: "Application submitted successfully! Connect directly with the matchmaker on WhatsApp.",
    });
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred while processing your request." },
      { status: 500 }
    );
  }
}
