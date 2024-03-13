"use client";

import Link from "next/link";
import NavInverse from "@/components/NavInverse";
import { FadeIn } from "@/components/FadeIn";

function ExpandedMenu() {
  return (
    <div>
      <NavInverse />
      <div className="bg-teal-900">
        <FadeIn>
          <Link href="/covidInfo">
            <h1 className="pt-20 ml-5 font-mainFont text-4xl text-white sm:ml-24 sm:text-5xl hover:text-lime-300">
              COVID Info
            </h1>
          </Link>
          <Link href="/locations">
            <h1 className="pt-2 ml-5 font-mainFont text-4xl text-white sm:ml-24 sm:text-5xl hover:text-lime-300">
              Locations
            </h1>
          </Link>
          <Link href="/about">
            <h1 className="pt-2 ml-5 font-mainFont text-4xl text-white sm:ml-24 sm:text-5xl hover:text-lime-300">
              About
            </h1>
          </Link>
          <Link href="/blog">
            <h1 className="pt-2 ml-5 font-mainFont text-4xl text-white sm:ml-24 sm:text-5xl hover:text-lime-300">
              Blog
            </h1>
          </Link>

          <Link href="/login">
            <h1 className="pt-6 ml-5 font-headingFont text-3xl text-yellow-200 sm:ml-24 sm:text-4xl  hover:text-pink-200">
              SEE MY DOCTOR
            </h1>
          </Link>
        </FadeIn>
      </div>
    </div>
  );
}

export default ExpandedMenu;
