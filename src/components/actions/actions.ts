'use server'

import { createTransport } from "nodemailer"

export async function submitQuery(formData: FormData) {
    // Extract form data
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const phoneNumber = formData.get('phoneNumber') as string
    const campusName = formData.get('campusName') as string
    const location = formData.get('location') as string
    const question = formData.get('question') as string

    // Log the received data (in a real application, you'd save this to a database)
    console.log('Query received:', { name, email, phoneNumber, campusName, location, question })

    // Create a nodemailer transporter
    const transporter = createTransport({
        host: process.env.EMAIL_SERVER_HOST,
        port: Number(process.env.EMAIL_SERVER_PORT) || 0,
        secure: false, // Use TLS
        auth: {
            user: process.env.EMAIL_SERVER_USER,
            pass: process.env.EMAIL_SERVER_PASSWORD,
        },
    })

    // Prepare email content
    const mailOptions = {
        from: process.env.EMAIL_FROM,
        to: email,
        subject: "Thank you for your query",
        html: `
      <h2>Thank you for your query, ${name}!</h2>
      <p>We have received your question and will get back to you soon.</p>
      <h3>Your submitted information:</h3>
      <ul>
        <li><strong>Name:</strong> ${name}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Phone Number:</strong> ${phoneNumber}</li>
        <li><strong>Campus Name:</strong> ${campusName}</li>
        <li><strong>Location:</strong> ${location}</li>
      </ul>
      <h3>Your question:</h3>
      <p>${question}</p>
    `,
    }

    try {
        // Send the email
        await transporter.sendMail(mailOptions)
        console.log('Thank you email sent')
        return { success: true, message: 'Thank you email sent successfully' }
    } catch (error) {
        console.error('Error sending email:', error)
        return { success: false, message: 'Failed to send thank you email' }
    }
}