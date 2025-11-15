// index.js

import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Middlewares

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);

      const allowedOrigins = [
        "http://localhost:5173",
        "https://avanishportfolio.vercel.app",
        "https://avanish-portfolio-ten.vercel.app"
      ];

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        console.log("❌ Blocked by CORS:", origin);
        return callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json());

// ✅ Health check route
app.get("/health", (_req, res) => {
  res.status(200).json({ status: "Server is running fine ✅" });
});

// ✅ Create Nodemailer transporter (using Gmail)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // your Gmail address
    pass: process.env.EMAIL_PASS, // your Gmail App Password
  },
});

// ✅ Verify transporter connection
transporter.verify((error, success) => {
  if (error) {
    console.error("❌ Error verifying transporter:", error);
  } else {
    console.log("✅ Server is ready to send emails");
  }
});

// ✅ /send-email endpoint
app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  // Validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Please provide name, email, and message." });
  }

  // Email configuration
  const mailOptions = {
    from: email, // sender (user who filled the form)
    to: process.env.MAIL_TO, // your Gmail (receiver)
    subject: `New Portfolio Contact from ${name}`,
    text: `
Name: ${name}
Email: ${email}

Message:
${message}
    `,
    html: `
      <div style="font-family: system-ui, Arial; line-height:1.5;">
        <h2>New Portfolio Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <div style="padding:10px; background:#f1f5f9; border-radius:8px;">
          ${message.replace(/\n/g, "<br/>")}
        </div>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`✅ Email sent successfully to ${process.env.MAIL_TO}`);
    res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("❌ Error sending email:", error);
    res.status(500).json({ error: "Failed to send message. Please try again later." });
  }
});

// ✅ Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
