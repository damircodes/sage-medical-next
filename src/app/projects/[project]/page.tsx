import { getProject } from "@/sanity/sanity-utils";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import Nav from "@/components/Nav";

type Props = {
  params: { project: string };
};

export default async function Project({ params }: Props) {
  const slug = params.project;
  const project = await getProject(slug);

  return (
    <div>
      <Nav />
      <div className="bg-white sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h1 className="text-4xl sm:text-6xl 2xl:text-7xl pt-20 sm:pt-0 font-mainFont text-[#025954] pb-20">
            {project.name}
          </h1>
          <Image
            src={project.image}
            width={600}
            height={400}
            alt={project.alt}
          />
          <div className="text-lg pb-5 pt-24 text-black font-sans">
            <PortableText value={project.content} />
          </div>
        </div>
      </div>
    </div>
  );
}
