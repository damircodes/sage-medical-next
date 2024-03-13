/* eslint-disable */

"use client";

import { useState } from "react";

function ArrowIcon(props) {
  return (
    <svg viewBox="0 0 16 6" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 3 10 .5v2H0v1h10v2L16 3Z"
      />
    </svg>
  );
}

export default function NewsletterForm() {
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage(""); // Clear previous messages
    setIsError(false); // Reset error state
    const formData = new FormData(event.target);
    const email = formData.get("email");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage("Thank you for subscribing to our newsletter!");
      } else {
        setMessage(data.error);
        setIsError(true);
      }
    } catch (error) {
      setMessage("An error occurred while subscribing to the newsletter.");
      setIsError(true);
    }
  };

  return (
    <div className="mx-auto max-w-2xl text-center pt-12">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div className="mx-auto">
          <form
            className="mt-6 sm:flex sm:max-w-md lg:mt-0"
            onSubmit={handleSubmit}
          >
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              required
              className="min-w-0 flex-auto rounded-md opacity-90 border-0 bg-white/1 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6 w-full" // Added w-full for full width
              placeholder="Enter your email"
            />

            <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
              <button
                type="submit"
                className="flex w-full items-center justify-center rounded-md bg-white px-3 py-3 text-sm font-semibold text-black hover:text-black shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Notify Me
              </button>
            </div>
          </form>
          {message && (
            <p
              className={`mt-4 text-sm bg-white px-16 py-3 opacity-90 rounded rounded-md ${
                isError ? "text-blue-500" : "text-green-500"
              }`}
            >
              {message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
