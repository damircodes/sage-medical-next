import Image from "next/image";

import Nav from "@/components/Nav";
import { DevicePhoneMobileIcon } from "@heroicons/react/20/solid";
import { FadeIn } from "@/components/FadeIn";
import Link from "next/link";
import SignUpButton from "@/components/SignUpButton";
import watch from "../../../public/watch.png";
import lab from "../../../public/lab.png";
import chat from "../../../public/chat.png";
import personalhero from "../../../public/personal-hero.png";
import CTA from "../../../components/CTA";
import family from "../../../public/family.jpg";

const features = [
  {
    name: "Access App Features",
    description:
      "Streamline Your Healthcare Journey App: Sage Medical's mobile app, offering patients a more seamless healthcare experience with appointment scheduling.",
    href: "#",
    icon: DevicePhoneMobileIcon,
  },
  {
    name: "Priority Service",
    description:
      "Our commitment is to prioritize prompt, personalized medical care to our patients, minimizing wait times and ensuring immediate access to our highly skilled physicians.",
    href: "#",
    icon: DevicePhoneMobileIcon,
  },
  {
    name: "Mobile Visits",
    description:
      "We recognizing the need for flexibility and convenience in today’s world, Sage Medical provides mobile visits service. High-quality medical care right without leaving home.",
    href: "#",
    icon: DevicePhoneMobileIcon,
  },
];

function About() {
  return (
    <div>
      <Nav />
      <div className="relative isolate h-screen overflow-hidden pt-14">
        <Image
          src={family}
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
              Announcing our next round of funding.{" "}
              <a href="/" className="font-semibold text-white">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <FadeIn>
              <h1 className="text-4xl font-headingFont tracking-tight text-white sm:text-7xl">
                A Modern Clinic For Aussies
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.
              </p>
            </FadeIn>
          </div>

          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        </div>
      </div>

      <FadeIn>
        <div className="flex flex-col items-center h-full bg-gray-100 m-auto py-20 lg:py-44">
          <h1 className="text-4xl font-mainFont text-[#025954] w-[80%] text-center md:text-7xl">
            A Modern Clinic
            <br />
          </h1>
          <h1 className="text-[#025954] font-textFont tracking-wide w-[80%] items-center md:text-xl lg:w-[50%] text-center pt-10">
            Welcome to Sage Medical, your premier destination for comprehensive
            healthcare in the bustling heart of Manhattan. Our full-featured
            clinic is dedicated to providing top-notch medical services that
            cater to all your health needs. With a team of highly skilled
            physicians and advanced technology at our fingertips, we are
            committed to delivering exceptional care and ensuring your
            well-being is our top priority. From routine check-ups to
            specialized treatments, Sage Medical offers a wide range of services
            tailored to meet the diverse needs of our patients. Step into our
            state-of-the-art facility and experience a new level of personalized
            care, where compassion, expertise, and innovation converge to create
            a healthier tomorrow. Trust Sage Medical for all your healthcare
            needs we&apos;re here to guide you on your journey to optimal health
            and vitality.
          </h1>
        </div>
      </FadeIn>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-3xl lg:mx-0">
              <h2 className="text-3xl font-mainFont font-bold tracking-tight text-gray-800 sm:text-5xl">
                Experience Redefined Healthcare
              </h2>
              <p className="mt-6 text-lg font-textFont leading-8 text-gray-600">
                We leverage the power of technology to streamline and elevate
                your healthcare journey. From our mobile app that puts your
                health information at your fingertips, to our efficient
                electronic systems that ensure smooth in-clinic processes, our
                aim is to provide you with a seamless, hassle-free experience.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                {features.map((feature) => (
                  <div key={feature.name} className="flex flex-col">
                    <dt className="text-base font-mainFont font-bold leading-7 text-gray-900">
                      <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-teal-900">
                        <feature.icon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </div>
                      {feature.name}
                    </dt>
                    <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                      <p className="flex-auto font-textFont">
                        {feature.description}
                      </p>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </FadeIn>
        </div>
        <CTA />
      </div>
    </div>
  );
}

export default About;
