"use client";

import React from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripeKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
if (!stripeKey) {
  throw new Error("The Stripe publishable key is not set");
}
const stripePromise = loadStripe(stripeKey, {
  apiVersion: "2022-11-15",
});

export default function SignUpButton() {
  React.useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
  }, []);

  return (
    <form action="/api/create-checkout-session" method="POST">
      <section>
        <button
          className="rounded-md bg-white px-4 py-2 mt-5 mr-6 text-sm text-teal-900 shadow-sm hover:bg-gray-200 hover:text-green-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          type="submit"
          role="link"
        >
          Join Today
        </button>
      </section>
    </form>
  );
}
