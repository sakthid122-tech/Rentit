import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class SendGridService {
  private sgMail: any;

  constructor(private configService: ConfigService) {
    const apiKey = this.configService.get<string>("SENDGRID_API_KEY");

    if (!apiKey) {
      throw new Error("SENDGRID_API_KEY missing in .env");
    }

    // NodeNext safe import
    this.sgMail = require("@sendgrid/mail");
    this.sgMail.setApiKey(apiKey);
  }

  async sendOtp(to: string, otp: string) {
    const from = this.configService.get<string>("SENDGRID_EMAIL");

    if (!from) {
      throw new Error("SENDGRID_EMAIL missing in .env");
    }

    await this.sgMail.send({
      to,
      from,
      subject: "Rentit OTP Verification",
      text: `Your OTP is ${otp}. It will expire in 15 minutes.`,
      html: `
        <div style="font-family:Arial; padding:20px;">
          <h2>Rentit Login OTP</h2>
          <p>Your OTP is:</p>
          <h1 style="letter-spacing:5px;">${otp}</h1>
          <p>This OTP will expire in 15 minutes.</p>
        </div>
      `,
    });

    return true;
  }
}
