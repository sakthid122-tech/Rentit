import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function sendOtpMail(email, otp) {
  const msg = {
    to: email,
    from: process.env.SENDGRID_EMAIL,
    subject: "Your Rentit OTP Code",
    text: `Your OTP is ${otp}. It expires in 5 minutes.`,
    html: `
      <h2>Rentit OTP Verification</h2>
      <p>Your OTP code is:</p>
      <h1>${otp}</h1>
      <p>This code expires in 5 minutes.</p>
    `,
  };

  await sgMail.send(msg);
}
