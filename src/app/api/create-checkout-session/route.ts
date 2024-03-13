/* eslint-disable import/no-extraneous-dependencies */
import Stripe from "stripe";
/* eslint-enable import/no-extraneous-dependencies */

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2022-11-15",
});

export async function POST(request: Request) {
  if (request.method === "POST") {
    try {
      const host = request.headers.get("host");
      const protocol = (host ?? "").includes("localhost") ? "http" : "https";
      const baseURL = `${protocol}://${host}`;

      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: "price_1MllILCtXS09ag11DSlbTOgs",
            quantity: 1,
          },
        ],
        mode: "subscription",
        success_url: `${baseURL}/?success=true`,
        cancel_url: `${baseURL}/?canceled=true`,
      });

      const responseHeaders = new Headers();
      if (session.url) {
        responseHeaders.set("Location", session.url);
      }

      return new Response(session.url, {
        status: 303,
        headers: responseHeaders,
      });
    } catch (err) {
      if (err instanceof Error) {
        return new Response(err.message, {
          status: 500,
        });
      }
      return new Response("An unexpected error occurred", {
        status: 500,
      });
    }
  } else {
    const headers = new Headers();
    headers.append("Allow", "POST");
    return new Response("Method Not Allowed", {
      status: 405,
      headers,
    });
  }
}
