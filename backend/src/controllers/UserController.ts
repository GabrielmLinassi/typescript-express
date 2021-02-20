import { Request, Response } from "express";
import EmailService from "../services/EmailService";

const users = [{ name: "Gabriel", email: "gabrielm.linassi@gmail.com" }];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },

  async create(req: Request, res: Response) {
    const emailService = new EmailService();

    emailService.sendMail({
      to: {
        name: "Gabriel",
        email: "gabrielm.linassi@gmail.com",
      },
      message: {
        subject: "Welcome to the system",
        body: "Welcome to the system",
      },
    });

    res.send("Email sent successfully!");
  },
};
