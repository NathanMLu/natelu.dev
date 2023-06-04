import nodemailer from "nodemailer";
import {EMAIL_APP_PASSKEY, EMAIL_APP_USERNAME} from "$env/static/private";

// POST /api/contact
export const POST = async ({request}: { request: Request }) => {
    try {
        const body = await request.json();
        if (!body.name || !body.email || !body.message) {
            return new Response(
                JSON.stringify({error: "name, email, and message are required"}),
                {status: 400}
            );
        }

        if (!body.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            return new Response(
                JSON.stringify({error: "email is invalid"}),
                {status: 400}
            );
        }

        if (body.message.length > 500) {
            return new Response(
                JSON.stringify({error: "message must be less than 500 characters"}),
                {status: 400}
            );
        }

        if (body.name.length > 50) {
            return new Response(
                JSON.stringify({error: "name must be less than 50 characters"}),
                {status: 400}
            );
        }

        console.log(`POST /api/contact - name: ${body.name}, email: ${body.email}`);
        await sendEmail(body.name, body.email, body.message);

        return new Response(JSON.stringify({message: "Message sent"}), {
            status: 200,
        });
    } catch (error) {
        console.error(error);
        return new Response(
            JSON.stringify({error: "Internal Server Error"}),
            {status: 500}
        );
    }
}

const sendEmail = async (name: string, email: string, message: string) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: EMAIL_APP_USERNAME,
            pass: EMAIL_APP_PASSKEY,
        }
    });

    let time = new Date();

    const mailOptions = {
        from: EMAIL_APP_USERNAME,
        to: EMAIL_APP_USERNAME,
        replyTo: email,
        subject: `natelu.dev - New message from ${name}`,
        html: `<p>From: ${name} (${email})</p><p>${message}</p><p>Sent at ${time.toLocaleString()}</p>`,
    };

    await transporter.sendMail(mailOptions);
}