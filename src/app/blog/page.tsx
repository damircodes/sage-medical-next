import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import Nav from "@/components/Nav";
import getProjects from "../../../sanity/sanity-utils";

export default async function Blog() {
  const projects = await getProjects();

  return (
    <div>
      <Nav />
      <div className="bg-white sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h1 className="text-4xl sm:text-6xl 2xl:text-7xl pt-20 sm:pt-0 font-mainFont text-[#025954]">
            Sage Medical Blog
          </h1>
          <div className="mx-auto max-w-2xl lg:mx-0">
            {projects.map((project) => (
              <div key={project._id}>
                <Link href={`/projects/${project.slug}`}>
                  <h2 className="text-3xl sm:text-4xl pb-5 pt-24 text-[#025954] font-textFont">
                    {project.name}
                  </h2>
                  <Image
                    className="w-full sm:w-1/2"
                    src={project.image}
                    width={600}
                    height={400}
                    alt={project.alt}
                  />

                  <button
                    type="button"
                    className="rounded-md bg-teal-900 hover:bg-pink-200 hover:text-teal-900 text-white font-mainFont px-3.5 py-2.5 text-xl mt-8 font-semibold transition duration-200 ease-in-out shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  >
                    Read Article
                  </button>
                </Link>
                <div />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
