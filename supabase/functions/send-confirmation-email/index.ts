import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { SESClient, SendEmailCommand } from "npm:@aws-sdk/client-ses@3.454.0";

const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
    // Handle CORS preflight requests
    if (req.method === "OPTIONS") {
        return new Response("ok", { headers: corsHeaders });
    }

    try {
        console.log("Received request to send-confirmation-email");
        const body = await req.json();
        const { email, name } = body;

        if (!email || !name) {
            console.error("Missing email or name in body", body);
            throw new Error("Missing email or name");
        }

        console.log(`Attempting to send email to ${email}`);

        const accessKeyId = Deno.env.get("AWS_ACCESS_KEY_ID");
        const secretAccessKey = Deno.env.get("AWS_SECRET_ACCESS_KEY");
        const sessionToken = Deno.env.get("AWS_SESSION_TOKEN");
        const sourceEmail = Deno.env.get("SES_FROM_EMAIL");

        if (!accessKeyId || !secretAccessKey || !sourceEmail) {
            console.error("Missing AWS environment variables");
            throw new Error("Server configuration error: Missing AWS credentials");
        }

        const client = new SESClient({
            region: Deno.env.get("AWS_REGION") ?? "us-east-1",
            credentials: {
                accessKeyId,
                secretAccessKey,
                sessionToken,
            },
        });

        const command = new SendEmailCommand({
            Source: sourceEmail,
            Destination: {
                ToAddresses: [email],
            },
            Message: {
                Subject: {
                    Data: "TechHack Valley 2026 - Application Received!",
                },
                Body: {
                    Text: {
                        Data: `Hi ${name},\n\nThanks for applying to TechHack Valley 2026! We've received your application and will review it shortly.\n\nIf you have any questions or issues, please email gatechesports@gmail.com.\n\nBest,\nThe TechHack Team`,
                    },
                    Html: {
                        Data: `
              <div style="font-family: sans-serif; color: #333;">
                <h2>Application Received!</h2>
                <p>Hi ${name},</p>
                <p>Thanks for applying to <strong>TechHack Valley 2026</strong>! We've received your application and will review it shortly.</p>
                <p>If you have any questions or issues, please email <a href="mailto:gatechesports@gmail.com">gatechesports@gmail.com</a>.</p>
                <p>Stay tuned for updates!</p>
                <br>
                <p>Best,</p>
                <p>The TechHack Team</p>
              </div>
            `,
                    },
                },
            },
        });

        const data = await client.send(command);
        console.log("Email sent successfully:", data.MessageId);

        return new Response(
            JSON.stringify({ message: "Email sent successfully", messageId: data.MessageId }),
            {
                headers: { ...corsHeaders, "Content-Type": "application/json" },
                status: 200,
            }
        );
    } catch (error) {
        console.error("Error sending email:", error);
        return new Response(
            JSON.stringify({ error: error.message }),
            {
                headers: { ...corsHeaders, "Content-Type": "application/json" },
                status: 500,
            }
        );
    }
});
