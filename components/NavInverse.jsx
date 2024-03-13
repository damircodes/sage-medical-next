import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import logo from "../public/sage-logo-white.svg";
import SignUpButtonInverse from "./SignUpButtonInverse";

function NavInverse() {
  const router = useRouter();
  return (
    <div className="flex sticky top-0 justify-between bg-teal-900 sm:px-6">
      <Link href="/">
        <div className="">
          <Image className="w-56 pl-5 pt-5" src={logo} alt="sage-logo-white" />
        </div>
      </Link>
      <div className="hidden sm:flex">
        <div className="mx-2 mt-5">
          <Image src="/virus-icon.png" width={40} height={40} alt="COVIDIcon" />
        </div>
        <Link href="/covidInfo">
          <h1 className="mt-7 text-lg text-[#f3f3f3] font-mainFont">
            COVID Info
          </h1>
        </Link>
      </div>
      <div className="flex">
        <div className="hidden mrs-4 xl:flex">
          <Link className="flex" href="/locations">
            <h1 className="mx-5 mt-6 text-lg text-[#f3f3f3] font-mainFont">
              Locations
            </h1>
          </Link>
          <div className="mx-5 mt-3 w-[1px] h-[50px] bg-slate-300" />
          <Link className="flex" href="/about">
            <h1 className="mx-5 mt-6 text-lg text-[#f3f3f3] font-mainFont">
              About
            </h1>
          </Link>

          <div>
            <Link href="blog">
              <h1 className="mx-5 mt-6 text-lg text-[#f3f3f3] font-mainFont">
                Blog
              </h1>
            </Link>
          </div>
          <div className="mx-5 mt-3 w-[1px] h-[50px] bg-slate-300" />
        </div>
        <div className="flex">
          <div className="hidden md:flex">
            <Link href="/login">
              <h1 className="mt-6 mr-16 text-lg text-[#f3f3f3] font-mainFont">
                See My Doctor
              </h1>
            </Link>
          </div>
          <SignUpButtonInverse />
          <button
            type="button"
            onClick={() => {
              router.back();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 my-5 mt-6 mr-4 sm:mr-10 text-[#f3f3f3]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavInverse;
