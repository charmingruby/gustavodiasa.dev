import { type NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import Mail from 'nodemailer/lib/mailer'

import { env } from '@/env'

interface SendEmailRequest {
  email: string
  name: string
  subject: string
  message: string
}

export async function POST(request: NextRequest) {
  const { name, email, message, subject }: SendEmailRequest =
    await request.json()

  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: env.EMAIL_CONTACT,
      pass: env.EMAIL_PASSWORD,
    },
  })

  const mailOptions: Mail.Options = {
    from: env.EMAIL_CONTACT,
    to: env.EMAIL_CONTACT,
    subject: `${subject} - ${name}`,
    text: `
    Uma nova mensagem de contato por meio do formulário do site. Abaixo estão os detalhes fornecidos: 

    Nome do Remetente: ${name}
    Endereço de E-mail: ${email}
    Assunto: ${subject}
    Mensagem: ${message}, <br>  `,
    html: `
    <p>Uma nova mensagem de contato por meio do portfolio. Abaixo estão os detalhes fornecidos:</p>

    <ul>
      <li><strong>Nome do Remetente:</strong> ${name}</li>
      <li><strong>Endereço de E-mail:</strong> ${email}</li>
      <li><strong>Assunto:</strong> ${subject}</li>
      <li><strong>Mensagem:</strong> ${message}</li>
    </ul>`,
  }

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve('Email sent')
        } else {
          reject(err.message)
        }
      })
    })

  try {
    await sendMailPromise()
    return NextResponse.json({ message: 'Email sent' })
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 })
  }
}
