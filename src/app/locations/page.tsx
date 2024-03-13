"use client";

import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";

import NavInverse from "@/components/NavInverse";

function Locations() {
  return (
    <div>
      <NavInverse />
      <div className="bg-teal-900 h-full">
        <FadeIn>
          <h1 className="text-[#f3f3f3] font-mainFont text-4xl sm:ml-24 ml-5 sm:text-7xl pt-36 pb-10">
            Clinics
          </h1>
          <ul>
            <Link href="/carlton-north">
              <li className="text-[#f3f3f3] hover:text-lime-300 font-mainFont sm:text-6xl sm:ml-24  text-4xl ml-4 py-2 pt-20">
                Carlton North
              </li>
            </Link>
            <Link href="/newtown">
              <li className="text-[#f3f3f3] hover:text-lime-300 font-mainFont sm:text-6xl sm:ml-24 f text-4xl ml-4 py-2">
                Newtown
              </li>
            </Link>
          </ul>
        </FadeIn>
      </div>
    </div>
  );
}

export default Locations;
