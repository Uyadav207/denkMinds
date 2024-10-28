import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'panda49test@gmail.com', 
    pass: 'ubbd mupj rklc ycid',
  },
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, phone, company, comments } = req.body;

    const mailOptions = {
      from: '"Feedback" <panda49test@gmail.com>', 
      to: ['sindhuras2413@gmail.com', 'nithinvaliya@gmail.com','utkarshyadav.tuc@gmail.com','chaitalitamboliya@gmail.com'],
      subject: 'New Inquiry/Feedback',
      text: `Hello! Team PENTAMORPHS, You have a new inquiry
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Company: ${company}
        Comments: ${comments}
        
          Regards,
           Team`,

      
    };

    try {
      await transporter.sendMail(mailOptions);
      return res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ error: 'Failed to send email' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
