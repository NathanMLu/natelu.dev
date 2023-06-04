import sgMail from "@sendgrid/mail";
import {SENDGRID_API_KEY, FROM_EMAIL, TO_EMAIL} from "$env/static/private";

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

        console.log(`POST /api/contact - name: ${body.name}, email: ${body.email}, message: ${body.message}`);
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
    sgMail.setApiKey(SENDGRID_API_KEY);
    const msg = {
        to: TO_EMAIL,
        from: { email: FROM_EMAIL, name: "Nathan Lu" },
        replyTo: email,
        subject: `Contact Form: New message from ${name}`,
        text: message
    };

    console.log(`Sending email to ${TO_EMAIL} from ${FROM_EMAIL} with replyTo ${email}`);
    await sgMail.send(msg);
}