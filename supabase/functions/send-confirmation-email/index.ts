import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { SESClient, SendEmailCommand } from "https://esm.sh/@aws-sdk/client-ses@3.454.0";

const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
    if (req.method === "OPTIONS") {
        return new Response("ok", { headers: corsHeaders });
    }

    try {
        const { email, name } = await req.json();

        if (!email || !name) {
            throw new Error("Missing email or name");
        }

        const client = new SESClient({
            region: Deno.env.get("AWS_REGION") ?? "us-east-1",
            credentials: {
                accessKeyId: Deno.env.get("AWS_ACCESS_KEY_ID") ?? "",
                secretAccessKey: Deno.env.get("AWS_SECRET_ACCESS_KEY") ?? "",
            },
        });

        const command = new SendEmailCommand({
            Source: Deno.env.get("SES_FROM_EMAIL"),
            Destination: {
                ToAddresses: [email],
            },
            Message: {
                Subject: {
                    Data: "TechHack Valley 2026 - Application Received!",
                },
                Body: {
                    Text: {
                        Data: `Hi ${name},\n\nThanks for applying to TechHack Valley 2026! We've received your application and will review it shortly.\n\nBest,\nThe TechHack Team`,
                    },
                    Html: {
                        Data: `
              <div style="font-family: sans-serif; color: #333;">
                <h2>Application Received!</h2>
                <p>Hi ${name},</p>
                <p>Thanks for applying to <strong>TechHack Valley 2026</strong>! We've received your application and will review it shortly.</p>
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
