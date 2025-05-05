import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { validateEmail } from "@/lib/utils";

export async function POST(req: NextRequest) {
  // Changed to named export POST
  try {
    const { to, subject, body } = await req.json();

    if (!to || !subject || !body) {
      return NextResponse.json(
        {
          message:
            "Missing required parameters: to, subject, and body are required.",
        },
        { status: 400 }
      );
    }

    console.log("Sending email to:", to); // Debugging line

    if (!validateEmail(to)) {
      return NextResponse.json(
        { message: "Invalid email address." },
        { status: 400 }
      );
    }

    // Create a Nodemailer transporter using your email service credentials
    const transporter = nodemailer.createTransport({
      service: "gmail", //  or your email service
      auth: {
        user: "konnectfinancials@gmail.com", //  Your email address
        pass: "jxkp zlci aklo ssec", //  Your email password or an app-specific password
      },
    });

    // Define the email message
    const mailOptions = {
      from: "konnectfinancials@gmail.com", // Sender address
      to: to, // Recipient address
      subject: subject, // Email subject
      html: body, // Email body (use html for formatted content)
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info);
    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Failed to send email:", error);
    return NextResponse.json(
      {
        message: `Failed to send email: ${error.message || "Internal server error"}`,
      },
      { status: 500 }
    );
  }
}
