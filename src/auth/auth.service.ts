import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { JwtService } from "@nestjs/jwt";
import { SendGridService } from "./sendgrid.service";

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private sendGridService: SendGridService
  ) {}

  private generateOtp(): string {
    return Math.floor(1000 + Math.random() * 9000).toString();
  }

  async requestOtp(mobile: string, email: string) {
    const otp = this.generateOtp();

    const expiresAt = new Date();
    expiresAt.setMinutes(expiresAt.getMinutes() + 15);

    await this.prisma.otp.create({
      data: {
        mobile,
        email,
        otp,
        expiresAt,
      },
    });

    await this.sendGridService.sendOtp(email, otp);

    return { message: "OTP sent successfully" };
  }

  async verifyOtp(mobile: string, otp: string) {
    const latestOtp = await this.prisma.otp.findFirst({
      where: { mobile },
      orderBy: { createdAt: "desc" },
    });

    if (!latestOtp) {
      throw new UnauthorizedException("OTP not found");
    }

    if (latestOtp.otp !== otp) {
      throw new UnauthorizedException("Invalid OTP");
    }

    if (latestOtp.expiresAt < new Date()) {
      throw new UnauthorizedException("OTP expired");
    }

    // Only OTP verify -> token generate
    const token = this.jwtService.sign({
      mobile: latestOtp.mobile,
      email: latestOtp.email,
    });

    return {
      message: "Login success",
      token,
      mobile: latestOtp.mobile,
      email: latestOtp.email,
    };
  }
}
