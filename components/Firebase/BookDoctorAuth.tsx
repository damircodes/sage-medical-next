"use client";

import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import Image from "next/image";
import { useAuthState } from "react-firebase-hooks/auth";
import Link from "next/link";
import { auth } from "../../lib/firebase";
import herotwo from "../../public/sage-hero-two.jpg";
import { FadeIn } from "../FadeIn";

function SignIn() {
  const useSignInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential ? credential.accessToken : null;
        // The signed-in user info.
        const { user } = result;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const { email } = error.customData;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  return (
    <Link href="/login">
      <button
        className="rounded-full bg-pink-200 px-5 py-2.5 text-sm font-semibold hover:text-pink-200 shadow-sm hover:bg-teal-900 text-green-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        type="button"
        onClick={useSignInWithGoogle}
      >
        Sign In With Google
      </button>
    </Link>
  );
}

function SignOut() {
  return (
    auth.currentUser && (
      <button
        className="rounded-full bg-teal-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-pink-200 hover:text-green-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        type="button"
        onClick={() => auth.signOut()}
      >
        Sign Out
      </button>
    )
  );
}

const doctors = [
  {
    name: "Dr. Ethan Smith",
    role: "Founder / CEO",
    imageUrl: "/../public/doctor2.jpg",
  },
  {
    name: "Dr. Leslie Alexander",
    role: "Founder / COO",
    imageUrl: "/../public/doctor4.jpg",
  },
  {
    name: "Dr. Tasha Williams",
    role: "Co-Founder",
    imageUrl: "/../public/doctor1.jpg",
  },

  {
    name: "Dr. Brad Tailor",
    role: "Co-Founder",
    imageUrl: "/../public/doctor3.jpg",
  },
  {
    name: "Dr. Ravi Patel",
    role: "Partner",
    imageUrl: "/../public/doctor5.jpg",
  },
  {
    name: "Dr. Emily Johnson",
    role: "Partner",
    imageUrl: "/../public/doctor6.jpg",
  },
];

function BookDoctor() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-4xl sm:text-7xl font-mainFont text-[#025954]">
            Meet our leadership
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            At our medical clinic, we&apos;re proud of our remarkable leadership
            team, formed by skilled professionals with vast healthcare
            experience. United by a shared vision, our leaders strive to deliver
            excellent patient care and enhance community health and well-being.
          </p>
        </div>
        <ul className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {doctors.map((doctor) => (
            <li key={doctor.name}>
              <div className="flex items-center gap-x-6">
                <Image
                  width={300}
                  height={300}
                  className="h-16 w-16 rounded-full"
                  src={doctor.imageUrl}
                  alt="Doctor Portraits"
                />
                <div className="flex flex-col">
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    {doctor.name}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">
                    {doctor.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <SignOut />
      </div>
    </div>
  );
}

function SignInPage() {
  return (
    <div className="bg-green-900">
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
        <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
          <div className="px-6 lg:px-0 lg:pt-4">
            <div className="mx-auto max-w-2xl">
              <FadeIn>
                <div className="max-w-lg">
                  <div className="mt-24 sm:mt-32 lg:mt-32" />
                  <h1 className="mt-10 text-5xl font-mainFont text-green-900 sm:text-7xl">
                    Your Clinic
                    <br />
                    Close To Home
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-green-900">
                    Serving Australians since 2012. Sage Medical
                    <br />
                    is moving healthcare forward.
                  </p>
                  <div className="mt-10 flex items-center gap-x-6">
                    <SignIn />
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
          <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
            <div
              className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl  ring-1 md:-mr-20 lg:-mr-36"
              aria-hidden="true"
            />
            <div className="shadow-lg md:rounded-3xl h-96">
              <div className="[clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))]">
                <Image src={herotwo} alt="paint" className="" />

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
  );
}

export default function BookDoctorAuth() {
  const [user] = useAuthState(auth);
  return <section>{user ? <BookDoctor /> : <SignInPage />}</section>;
}
