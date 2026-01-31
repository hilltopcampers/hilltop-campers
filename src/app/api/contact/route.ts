import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    // Get API key at runtime, not build time
    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      console.error("RESEND_API_KEY is not set");
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    const resend = new Resend(resendApiKey);

    const body = await request.json();
    const { name, email, phone, topic, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "Hilltop Campers Website <onboarding@resend.dev>",
      to: ["hilltopcampers.co.uk@gmail.com"],
      replyTo: email,
      subject: `Hilltop Campers: ${topic || "New Contact Form Submission"}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #25272c; padding: 20px; text-align: center;">
            <h1 style="color: #9BCD3E; margin: 0;">Hilltop Campers</h1>
            <p style="color: #ffffff; margin: 5px 0 0 0;">New Contact Form Submission</p>
          </div>

          <div style="padding: 30px; background-color: #f5f5f5;">
            <h2 style="color: #25272c; border-bottom: 2px solid #9BCD3E; padding-bottom: 10px;">
              Contact Details
            </h2>

            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #666; width: 120px;">Name:</td>
                <td style="padding: 10px 0; color: #333;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #666;">Email:</td>
                <td style="padding: 10px 0; color: #333;">
                  <a href="mailto:${email}" style="color: #9BCD3E;">${email}</a>
                </td>
              </tr>
              ${phone ? `
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #666;">Phone:</td>
                <td style="padding: 10px 0; color: #333;">
                  <a href="tel:${phone}" style="color: #9BCD3E;">${phone}</a>
                </td>
              </tr>
              ` : ""}
              ${topic ? `
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #666;">Topic:</td>
                <td style="padding: 10px 0; color: #333;">${topic}</td>
              </tr>
              ` : ""}
            </table>

            <h2 style="color: #25272c; border-bottom: 2px solid #9BCD3E; padding-bottom: 10px; margin-top: 30px;">
              Message
            </h2>
            <div style="background-color: white; padding: 20px; border-radius: 8px; border-left: 4px solid #9BCD3E;">
              <p style="color: #333; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
            </div>
          </div>

          <div style="background-color: #25272c; padding: 15px; text-align: center;">
            <p style="color: #888; margin: 0; font-size: 12px;">
              This email was sent from the Hilltop Campers website contact form.
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", JSON.stringify(error, null, 2));
      return NextResponse.json(
        { error: `Failed to send email: ${error.message || "Unknown error"}` },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (error) {
    console.error("Contact form error:", error);
    const errorMessage = error instanceof Error ? error.message : "Internal server error";
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
