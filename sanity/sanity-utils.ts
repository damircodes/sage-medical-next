import { createClient } from "next-sanity";
import groq from "groq";
import { Project } from "@/types/Project";
import clientConfig from "./config/client-config";

export default async function getProjects(): Promise<Project[]> {
  try {
    const result = await createClient(clientConfig).fetch(
      groq`*[_type == "project"]{
          _id,
          _createdAt,
          name,
          "slug": slug.current,
          "image": image.asset->url,
          url,
          content
      }`
    );
    return result;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
}

export async function getProject(slug: string) {
  try {
    const result = await createClient(clientConfig).fetch(
      groq`*[_type == "project" && slug.current == $slug][0]{
          _id,
          _createdAt,
          name,
          "slug": slug.current,
          "image": image.asset->url,
          url,
          content
      }`,
      { slug }
    );
    return result;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
}
