import { loadStripe } from "@stripe/stripe-js";
import { useEffect } from "react";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || ""
);

export default function SignUpButton() {
  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
  }, []);

  return (
    <form action="/api/checkout_sessions" method="POST">
      <section>
        <button
          className="bg-emerald-700 mr-2 xs:mr-6 w-32 xs:w-40 w-40 h-16 rounded-full text-white text-center font-textFont"
          type="submit"
          role="link"
        >
          Sign Up Today
        </button>
      </section>
    </form>
  );
}
