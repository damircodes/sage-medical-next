"use client";

import { useState } from "react";
import Link from "next/link";

function Hamburger() {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount((prevClickCount) => {
      const newClickCount = prevClickCount + 1;
      if (newClickCount % 2 === 0) {
        // Go to the expanded menu
        window.location.href = "/expanded-menu";
      } else {
        // Go back to the previous page
        window.history.back();
      }
      return newClickCount;
    });
  };

  return (
    <div>
      <button type="button" onClick={handleClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 my-5 mt-6 mr-4 sm:mr-10 text-[#025954]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
    </div>
  );
}

export default Hamburger;
