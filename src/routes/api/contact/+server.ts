import sgMail from "@sendgrid/mail";
import {SENDGRID_API_KEY} from "$env/static/private";

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

        await sendEmail({
            to: "contact@natelu.dev",
            from: body.email,
            subject: "New message from " + body.name,
            content: body.message,
        });

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

async function sendEmail({to, from, subject, content,}: {
    to: string;
    from: string;
    subject: string;
    content: string;
}) {
    sgMail.setApiKey(SENDGRID_API_KEY);
    const msg = {
        to,
        from,
        subject,
        text: content,
        html: content.replace(/\n/g, "<br>"),
    };

    try {
        await sgMail.send(msg);
    } catch (error) {
        console.error(error);
        throw new Error("Failed to send email");
    }
}