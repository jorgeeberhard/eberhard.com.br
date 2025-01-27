import { Project } from "@/app/lib/definitions";
import { FaCode, FaLink } from "react-icons/fa6";
import Link from "next/link";
import { fetchGithubRepo } from "../lib/utils";

export async function ProjectCard({
  projectInformation,
}: {
  projectInformation: Project;
}) {
  return (
    <div className="flex flex-col py-5 px-10 bg-[#FFEFD6]  rounded-md shadow-xl">
      <h3 className="text-xl font-bold">{projectInformation.name}</h3>
      <p>{projectInformation.description}</p>
      <div className="flex justify-between">
        <div className="flex">
          {projectInformation.code_language != null ? (
            projectInformation.code_language.map((code, index) => (
              <p
                className="text-xs bg-[#0E5E6F] text-white mr-2 p-1 shadow rounded-md"
                key={index}
              >{`${code[0]}: ${code[1]}%`}</p>
            ))
          ) : (
            <p>No Language Information</p>
          )}
        </div>
        <div className="flex">
          <Link
            className="mr-4 flex items-center"
            href={projectInformation.code_source}
          >
            <FaCode />
          </Link>
          {projectInformation.deploy != null ? (
            <Link
              className="mr-4 flex items-center"
              href={projectInformation.deploy}
            >
              <FaLink />
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export async function ProjectWrapper() {
  const projectsData = await fetchGithubRepo();
  return (
    <div className="flex flex-col py-5 px-10 bg-[#F2DEBA]">
      <h1 className="text-3xl mb-5">Projects</h1>
      <div className="grid grid-cols-2 gap-10">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} projectInformation={project} />
        ))}
      </div>
    </div>
  );
}
