import { NextResponse } from "next/server";

// Assuming MAILCHIMP_API_KEY and MAILCHIMP_AUDIENCE_ID are set in your environment variables
const API_KEY = process.env.MAILCHIMP_API_KEY;
const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;

// Define the POST method handler directly
export async function POST(request) {
  // Parsing the JSON body from the request to get the email address
  const { email } = await request.json();

  if (!email || !email.includes("@")) {
    console.error("Invalid email address:", email);
    // If the email is not valid, return a 400 response
    return new Response(
      JSON.stringify({ error: "Email is required and must be valid." }),
      {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  try {
    const DATACENTER = API_KEY.split("-")[1];
    const data = {
      email_address: email,
      status: "subscribed", // Possible values: 'subscribed', 'unsubscribed', 'cleaned', or 'pending'
    };

    const response = await fetch(
      `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members/`,
      {
        body: JSON.stringify(data),
        headers: {
          Authorization: `apikey ${API_KEY}`,
          "Content-Type": "application/json",
        },
        method: "POST",
      }
    );

    if (response.status >= 400) {
      // Handle errors from Mailchimp API
      const errorResponse = await response.json();
      console.error("Mailchimp API error:", errorResponse);
      return new Response(
        JSON.stringify({
          error:
            errorResponse.title ||
            "There was an error subscribing to the newsletter.",
        }),
        {
          status: response.status,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    // Successfully subscribed
    return new Response(
      JSON.stringify({ message: "Successfully subscribed to the newsletter." }),
      {
        status: 201,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Subscription error:", error);
    // Server error
    return new Response(
      JSON.stringify({ error: error.message || error.toString() }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
