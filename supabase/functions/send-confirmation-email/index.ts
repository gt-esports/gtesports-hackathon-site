import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

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

        const resendApiKey = Deno.env.get("RESEND_API_KEY");
        const sourceEmail = Deno.env.get("RESEND_FROM_EMAIL") || "onboarding@resend.dev";

        if (!resendApiKey) {
            console.error("Missing RESEND_API_KEY environment variable");
            throw new Error("Server configuration error: Missing Resend API Key");
        }

        const resend = new Resend(resendApiKey);

        const { data, error } = await resend.emails.send({
            from: sourceEmail,
            to: [email],
            subject: "TechHack Valley 2026 - Application Received!",
            html: `
              <div style="font-family: sans-serif; color: #333;">
                <h2>Application Received!</h2>
                <p>Hi ${name},</p>
                <p>Thanks for applying to <strong>TechHack Valley 2026</strong>! We've received your application and will review it shortly.</p>
                <p>Application decisions will be released on a rolling basis. If you haven't received an email by two weeks before the event, please email <a href="mailto:georgiatechesports@gmail.com">georgiatechesports@gmail.com</a>.</p>
                <p>If you have any other questions or issues, please email <a href="mailto:georgiatechesports@gmail.com">georgiatechesports@gmail.com</a>.</p>
                <p>
                    Visit <a href="https://techhack.gatechesports.com">TechHack Valley</a> for more info, or check out our main site at <a href="https://gatechesports.com">gatechesports.com</a>.
                </p>
                <p>
                    Also, be sure to join our Discord server (linked on the <a href="https://techhack.gatechesports.com">TechHack website</a>) for all the latest updates!
                </p>
                <br>
                <p>Best,</p>
                <p>The TechHack Team</p>
              </div>
            `,
            text: `Hi ${name},\n\nThanks for applying to TechHack Valley 2026! We've received your application and will review it shortly.\n\nApplication decisions will be released on a rolling basis. If you haven't received an email by two weeks before the event, please email georgiatechesports@gmail.com.\n\nIf you have any other questions or issues, please email georgiatechesports@gmail.com.\n\nVisit https://techhack.gatechesports.com for more info, or check out our main site at https://gatechesports.com.\n\nAlso, be sure to join our Discord server (linked on the TechHack website) for all the latest updates!\n\nBest,\nThe TechHack Team`,
        });

        if (error) {
            console.error("Error sending email via Resend:", error);
            throw error;
        }

        console.log("Email sent successfully:", data?.id);

        return new Response(
            JSON.stringify({ message: "Email sent successfully", messageId: data?.id }),
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
