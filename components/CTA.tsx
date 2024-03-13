import Link from "next/link";
import SignUpButton from "./SignUpButton";
import { FadeIn } from "./FadeIn";

export default function CTA() {
  return (
    <div className="bg-white">
      <FadeIn>
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl tracking-wide text-teal-900 font-headingFont sm:text-7xl">
              Enjoy Member Benefits Today
            </h2>
            <p className="mx-auto mt-6 max-w-xl font-textFont text-lg tracking-wide leading-8 text-gray-800">
              Unlock exclusive perks by becoming a member of Sage Medical and
              start enjoying the incredible member benefits.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <SignUpButton />
              <Link href="/about" className="text-sm leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
