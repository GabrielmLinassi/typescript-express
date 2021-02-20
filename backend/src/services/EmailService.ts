interface IMailTo {
  name: string;
  email: string;
}

interface IMailMessage {
  subject: string;
  body: string;
  attachment?: string[];
}

interface IMailDTO {
  to: IMailTo;
  message: IMailMessage;
}

interface IMailService {
  sendMail(request: IMailDTO): void;
}

class MailService implements IMailService {
  sendMail({ to, message }: IMailDTO) {
    console.log(`Email sent to ${to.email}: ${message.subject}`);
  }
}

export default MailService;
