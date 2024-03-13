import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import SignUpButton from "@/components/SignUpButton";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { FadeIn } from "@/components/FadeIn";
import Nav from "@/components/Nav";
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
  ChatBubbleLeftEllipsisIcon,
  RocketLaunchIcon,
  MagnifyingGlassCircleIcon,
  MagnifyingGlassIcon,
  WifiIcon,
  ShieldCheckIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/outline";
import CTA from "../../components/CTA";

import herotwo from "../../public/sage-hero-two.jpg";

import logo_spark from "../../public/SPARK.svg";
import logo_jenta from "../../public/JENTA.svg";
import logo_levr from "../../public/LEVR.svg";
import logo_zephyr from "../../public/zephyr.svg";
import doctors from "../../public/doctors-offics.jpeg";

import hug from "../../public/hug.jpg";

import NewsLetterForm from "../../components/NewsLetterForm";

const features = [
  {
    name: "Faster Service",
    description:
      "Efficient health care with priority service, ensuring prompt, personalized attention without compromising on the quality care you deserve.",
    icon: RocketLaunchIcon,
  },
  {
    name: "See Doctors Online",
    description:
      "Navigate healthcare with ease from the comfort of your home using Sage Medical's app, enjoy online consultations with our experienced doctors.",
    icon: ChatBubbleLeftEllipsisIcon,
  },
  {
    name: "Prompt Diagnostics",
    description:
      "We partner with the best labs to deliver cutting-edge diagnostics for accurate, and comprehensive health evaluations for optimal and responsive care.",
    icon: MagnifyingGlassIcon,
  },
  {
    name: "Data Protection",
    description:
      "We have a commitment to data protection and security, safeguarding your health information with stringent, modern protocols for peace of mind.",
    icon: ShieldCheckIcon,
  },
  {
    name: "Secure Wifi",
    description:
      "Secure WiFi form members at all clinics, offering reliable, high-speed internet access with safeguarded by robust security measures.",
    icon: WifiIcon,
  },
  {
    name: "Online Care Plans",
    description:
      "Stay in control with online access features, secure access to your health summaries and personalized care plans from anywhere.",
    icon: ComputerDesktopIcon,
  },
];

export default async function Home() {
  return (
    <div>
      <Head>
        <title>Sage Medical</title>
      </Head>
      <Nav />
      <div className="bg-green-900">
        <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
          <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
            <div className="px-6 lg:px-0 lg:pt-4">
              <FadeIn>
                <div className="mx-auto max-w-2xl">
                  <div className="max-w-lg">
                    <div className="mt-24 sm:mt-32 lg:mt-32" />
                    <h1 className="mt-10 text-4xl font-headingFont text-green-900 sm:text-7xl">
                      Your Clinic Close To Home
                    </h1>
                    <p className="mt-6 text-lg font-textFont tracking-wide leading-7 text-green-900">
                      Your new favorite Manhattan clinic. Serving New Yorkers
                      since 2012. Sage medical is moving healthcare forward.
                    </p>
                    <div className="mt-10 flex items-center gap-x-6">
                      <SignUpButton />
                      <Link
                        href="/about"
                        className="text-sm font-semibold leading-6 text-gray-900"
                      >
                        Learn more
                      </Link>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
            <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
              <div
                className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl  ring-1 md:-mr-20 lg:-mr-36"
                aria-hidden="true"
              />
              <div className="shadow-lg md:rounded-3xl h-96">
                <div className="[clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))]">
                  <Image src={herotwo} alt="paint" />

                  <div
                    className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white opacity-100"
                    aria-hidden="true"
                  />
                  <div className="relative px-6 pt-8 sm:pt-16 md:pl-16 md:pr-0">
                    <div className="mx-auto max-w-2xl md:mx-0 md:max-w-none" />
                    <div
                      className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 md:rounded-3xl"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
        </div>
      </div>
      <div>
        <div className="bg-white px-6 py-24 sm:py-56 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <FadeIn>
              {/* <p className="text-xl leading-7 tracking-wide font-mainFont">
                Right By You
              </p> */}
              <h2 className="text-4xl mt-2 sm:text-7xl font-mainFont text-[#025954]">
                Supportive Modern Healthcare
              </h2>
              <p className="mt-5 text-lg leading-8 tracking-wider font-textFont">
                Helping Australians navigate
                <br />
                healthcare.
              </p>
            </FadeIn>
          </div>
        </div>
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
          <Image
            src={doctors}
            alt=""
            className="absolute inset-0 -z-10 h-full w-full object-cover"
          />
          <div
            className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
            aria-hidden="true"
          >
            <div
              className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div
            className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
            aria-hidden="true"
          >
            <div
              className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div className="mx-auto max-w-2xl text-center">
            <div className="relative isolate overflow-hidden px-6 py-24 shadow-2xl sm:rounded-3xl">
              <FadeIn>
                <h2 className="text-4xl sm:text-7xl font-mainFont text-[#F2F9EA] pb-8">
                  Stay In Touch
                </h2>
                <h2 className="mx-auto max-w-2xl text-center text-3xl tracking-wider text-white sm:text-2xl">
                  Sign up for our community <br />
                  health events.
                </h2>
                <NewsLetterForm />
              </FadeIn>
            </div>
          </div>
        </div>

        <div className="pt-28 my-10 text-center">
          <FadeIn>
            <h1 className="font-mainFont text-3xl sm:text-7xl text-[#025954] mt-8">
              Join Or Health
            </h1>
            <div className="bg-white py-24 sm:py-32">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                  <h2 className="tracking-wide font-mainFont text-xl leading-7 text-green-700">
                    Premium member care
                  </h2>
                  <p className="mt-2 text-3xl font-mainFont tracking-tight text-gray-900 sm:text-6xl">
                    Join The Club
                  </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-16 lg:max-w-4xl">
                  <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
                    {features.map((feature) => (
                      <div key={feature.name} className="relative pl-16">
                        <dt className="text-xl font-mainFont font-semibold leading-7 text-gray-900">
                          <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-teal-900">
                            <feature.icon
                              className="h-6 w-6 text-white"
                              aria-hidden="true"
                            />
                          </div>
                          {feature.name}
                        </dt>
                        <dd className="mt-2 text-md font-textFont tracking-wide leading-7 text-gray-600">
                          {feature.description}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
        <FadeIn>
          <div className="flex flex-col items-center pb-20 text-center min-w-full">
            <div className="">
              <h1 className="text-[#025954] pb-16 pt-8 text-4xl md:text-7xl font-mainFont text-center">
                $499 a Year For
                <br />
                Couples Memberships
              </h1>
              <Image
                className="rounded-3xl w-[95%] lg:w-[75%] xl:w-[80%] 2xl:w-[45%] mx-auto"
                src={hug}
                alt="hug"
              />
            </div>
          </div>
        </FadeIn>
      </div>
      <FadeIn>
        <div>
          <div className="h-full pt-20">
            <h1 className="text-center pt-20 font-mainFont text-4xl sm:text-7xl text-[#025954]">
              Supporting
              <br />
              Australian Commerce
            </h1>
            <div className="grid sm:grid-cols-2 pt-16 max-w-5xl w-full mx-auto">
              <Image
                className="flex place-self-center px-10 pb-12 w-8/12"
                src={logo_spark}
                alt="spark"
              />
              <Image
                className="flex place-self-center px-10 pb-12 w-2/3"
                src={logo_jenta}
                alt="jenta"
              />
              <Image
                className="flex place-self-center px-10 pb-16 w-3/5"
                src={logo_levr}
                alt="levr"
              />
              <Image
                className="flex place-self-center px-10 pb-16 w-3/4"
                src={logo_zephyr}
                alt="zephyr"
              />
            </div>
            <div>
              <h1 className="text-center pb-20 font-mainFont text-2xl pt-2 text-green-700 w-[90%] mx-auto">
                LEARN MORE ABOUT SAGE MEDICAL FOR BUSINESS
              </h1>
            </div>
          </div>
          <CTA />
        </div>
      </FadeIn>
    </div>
  );
}
