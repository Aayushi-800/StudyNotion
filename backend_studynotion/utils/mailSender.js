// const nodemailer = require("nodemailer")

// const mailSender = async (email, title, body) => {
//    console.log("🔥🔥 SEND OTP FUNCTION STARTED")
//   try {
//     let transporter = nodemailer.createTransport({
//       host: process.env.MAIL_HOST,
//       port: 587,
//       secure: false,
//       requireTLS: true,
//       auth: {
//         user: process.env.MAIL_USER,
//         pass: process.env.MAIL_PASS,
//       },
//     })
//     await transporter.verify()
// console.log("✅ SMTP CONNECTION SUCCESS")
//     console.log("MAIL CONFIG:", {
//   host: process.env.MAIL_HOST,
//   user: process.env.MAIL_USER,
//   passExists: !!process.env.MAIL_PASS
// })

//     let info = await transporter.sendMail({
//       from: `"Studynotion | CodeHelp" <${process.env.MAIL_USER}>`, // sender address
//       to: `${email}`, // list of receivers
//       subject: `${title}`, // Subject line
//       html: `${body}`, // html body
//     })
//     console.log(info.response)
//     return info
//   } catch (error) {
//      console.log("MAIL ERROR:", error.message)
//       throw error
//   }
// }

// module.exports = mailSender



require("dotenv").config()

const { Resend } = require("resend")

const resend = new Resend(process.env.RESEND_API_KEY)

const mailSender = async (email, title, body) => {
  try {
    const { data, error } = await resend.emails.send({
      from: "StudyNotion <onboarding@resend.dev>",
      to: [email],
      subject: title,
      html: body,
    })

    if (error) {
      console.log("MAIL ERROR:", error)
      throw new Error(error.message)
    }

    console.log("✅ EMAIL SENT:", data)
    return data
  } catch (error) {
    console.log("MAIL ERROR:", error.message)
    throw error
  }
}

module.exports = mailSender
