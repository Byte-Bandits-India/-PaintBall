"use server";

import nodemailer from "nodemailer";

interface GameDetails {
  hostName: string;
  turfName: string;
  date: string;
  time: string;
  occupied: number;
  total: number;
}

interface UserDetails {
  name: string;
  email: string;
  phone: string;
}

export async function sendBookingEmail(game: GameDetails, userDetails: UserDetails) {
  const { name, email, phone } = userDetails;

  // Validation
  if (!name || !email || !phone) {
    return { success: false, error: "Name, email, and phone number are required." };
  }

  try {
    const host = process.env.SMTP_HOST || "smtp.gmail.com";
    const port = parseInt(process.env.SMTP_PORT || "465");
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASSWORD;
    const adminEmail = process.env.ADMIN_EMAIL || user;

    if (!user || !pass) {
      console.error("Missing SMTP credentials.");
      return {
        success: false,
        error: "Server email configuration is missing SMTP credentials.",
      };
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: {
        user,
        pass,
      },
    });

    const accentColor = "#E11B22";

    // 1. Email to Admin
    const adminMailOptions = {
      from: `"Battle Grid Booking System" <${user}>`,
      to: adminEmail,
      replyTo: email,
      subject: `New Game Booking: ${game.turfName} - Hosted by ${game.hostName}`,
      html: `
        <div style="font-family: 'Saira', sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background-color: #2D3139; border: 1px solid #414752; border-radius: 12px; color: #FFFFFF;">
          <div style="text-align: center; border-bottom: 2px solid ${accentColor}; padding-bottom: 16px; margin-bottom: 24px;">
            <h1 style="font-size: 28px; font-weight: 900; margin: 0; color: #FFFFFF; letter-spacing: 1px; text-transform: uppercase;">
              BATTLE GRID // BOOKING
            </h1>
            <span style="font-size: 11px; font-family: monospace; letter-spacing: 3px; color: ${accentColor}; font-weight: bold; text-transform: uppercase;">
              ADMIN NOTIFICATION
            </span>
          </div>

          <h2 style="font-size: 20px; font-weight: 800; margin-top: 0; border-left: 4px solid ${accentColor}; padding-left: 10px; text-transform: uppercase; color: #FFFFFF;">
            Booking Details
          </h2>
          <div style="background-color: #353A43; padding: 16px; border-radius: 8px; border: 1px solid #414752; margin-bottom: 24px;">
            <p style="margin: 0 0 10px 0;"><strong style="color: #94A3B8;">Arena:</strong> ${game.turfName}</p>
            <p style="margin: 0 0 10px 0;"><strong style="color: #94A3B8;">Host:</strong> ${game.hostName}</p>
            <p style="margin: 0 0 10px 0;"><strong style="color: #94A3B8;">Date:</strong> ${game.date}</p>
            <p style="margin: 0 0 10px 0;"><strong style="color: #94A3B8;">Time:</strong> ${game.time}</p>
            <p style="margin: 0;"><strong style="color: #94A3B8;">Spots:</strong> ${game.occupied + 1}/${game.total}</p>
          </div>

          <h2 style="font-size: 20px; font-weight: 800; margin-top: 0; border-left: 4px solid ${accentColor}; padding-left: 10px; text-transform: uppercase; color: #FFFFFF;">
            Player Information
          </h2>
          <div style="background-color: #353A43; padding: 16px; border-radius: 8px; border: 1px solid #414752; margin-bottom: 24px;">
            <p style="margin: 0 0 10px 0;"><strong style="color: #94A3B8;">Name:</strong> ${name}</p>
            <p style="margin: 0 0 10px 0;"><strong style="color: #94A3B8;">Email:</strong> <a href="mailto:${email}" style="color: ${accentColor}; text-decoration: none;">${email}</a></p>
            <p style="margin: 0;"><strong style="color: #94A3B8;">Phone:</strong> ${phone}</p>
          </div>

          <div style="text-align: center; color: #94A3B8; font-size: 11px; margin-top: 32px; border-top: 1px solid #414752; padding-top: 16px;">
            AUTOMATED BOOKING ENGINE · BATTLE GRID
          </div>
        </div>
      `,
    };

    // 2. Email to User (Receipt Confirmation)
    const userMailOptions = {
      from: `"Battle Grid Paintball" <${user}>`,
      to: email,
      subject: `Booking Confirmed: ${game.turfName} - Battle Grid`,
      html: `
        <div style="font-family: 'Saira', sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background-color: #2D3139; border: 1px solid #414752; border-radius: 12px; color: #FFFFFF;">
          <div style="text-align: center; border-bottom: 2px solid ${accentColor}; padding-bottom: 16px; margin-bottom: 24px;">
            <h1 style="font-size: 28px; font-weight: 900; margin: 0; color: #FFFFFF; letter-spacing: 1px; text-transform: uppercase;">
              BATTLE GRID // LOCKED IN
            </h1>
            <span style="font-size: 11px; font-family: monospace; letter-spacing: 3px; color: ${accentColor}; font-weight: bold; text-transform: uppercase;">
              CONFIRMATION RECEIPT
            </span>
          </div>

          <p style="font-size: 16px; line-height: 1.6; color: #E2E8F0;">
            Hello <strong>${name}</strong>,
          </p>
          <p style="font-size: 15px; line-height: 1.6; color: #CBD5E1; margin-bottom: 24px;">
            Your squad spot is officially locked in! We have reserved your place for the upcoming match. Here are the details of your scheduled game:
          </p>

          <h2 style="font-size: 18px; font-weight: 800; margin-top: 0; border-left: 4px solid ${accentColor}; padding-left: 10px; text-transform: uppercase; color: #FFFFFF;">
            Your Match Summary
          </h2>
          <div style="background-color: #353A43; padding: 16px; border-radius: 8px; border: 1px solid #414752; margin-bottom: 24px;">
            <p style="margin: 0 0 10px 0;"><strong style="color: #94A3B8;">Arena Location:</strong> ${game.turfName}</p>
            <p style="margin: 0 0 10px 0;"><strong style="color: #94A3B8;">Match Host:</strong> ${game.hostName}</p>
            <p style="margin: 0 0 10px 0;"><strong style="color: #94A3B8;">Scheduled Date:</strong> ${game.date}</p>
            <p style="margin: 0 0 10px 0;"><strong style="color: #94A3B8;">Time Range:</strong> ${game.time}</p>
            <p style="margin: 0;"><strong style="color: #94A3B8;">Total Player Spots:</strong> ${game.occupied + 1}/${game.total}</p>
          </div>

          <p style="font-size: 14px; line-height: 1.6; color: #94A3B8; margin-bottom: 24px;">
            Please show up <strong>20 minutes before</strong> your slot time to receive your safety briefing, gather your tactical gear, and reload your markers.
          </p>

          <div style="background-color: rgba(225, 27, 34, 0.1); border: 1px solid rgba(225, 27, 34, 0.2); padding: 16px; border-radius: 8px; color: #FF8F94; font-size: 13px; line-height: 1.5;">
            <strong>Safety Notice:</strong> Full face masks and tactical chest protectors are mandatory for all players. If you have your own gear, please ensure markers are chronographed at the gate.
          </div>

          <div style="text-align: center; color: #94A3B8; font-size: 11px; margin-top: 32px; border-top: 1px solid #414752; padding-top: 16px;">
            Need to cancel or reschedule? Reply directly to this email or call support.
          </div>
        </div>
      `,
    };

    // Parallel send
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions),
    ]);

    return { success: true, error: null };
  } catch (error: any) {
    console.error("Nodemailer transport error:", error);
    return {
      success: false,
      error: error?.message || "Failed to send booking emails. Please try again.",
    };
  }
}
