import { Project } from "@/app/lib/definitions";
import { FaCode, FaLink } from "react-icons/fa6";
import Link from "next/link";
import { fetchGithubRepo } from "@/app/lib/utils";
import { getTranslations } from "next-intl/server";

export async function ProjectCard({
  projectInformation,
}: {
  projectInformation: Project;
}) {
  return (
    <div className="flex flex-col py-5 px-10 bg-[#FFEFD6] rounded-md shadow-xl">
      <h3 className="text-xl font-bold">{projectInformation.name}</h3>
      <p>{projectInformation.description}</p>
      <div className="flex flex-col sm:flex-row justify-between">
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
        <div className="flex justify-center">
          <Link
            className="sm:mr-4 sm:mx-0 sm:mt-0 mx-2 mt-2 flex items-center"
            href={projectInformation.code_source}
          >
            <FaCode />
          </Link>
          {projectInformation.deploy != null ? (
            <Link
              className="sm:mr-4 sm:mx-0 sm:mt-0 mx-2 mt-2 flex items-center"
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
  const translations = await getTranslations("project_wrapper");

  return (
    <div className="flex flex-col py-5 px-10 bg-[#F2DEBA]" id="projects">
      <h1 className="text-3xl mb-5">{translations("title")}</h1>
      <div className="flex flex-col gap-10 lg:grid lg:grid-cols-2">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} projectInformation={project} />
        ))}
      </div>
    </div>
  );
}
