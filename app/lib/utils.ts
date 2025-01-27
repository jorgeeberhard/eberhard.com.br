import { repos, owner, Project } from "./definitions";
import dotenv from "dotenv";
dotenv.config();

async function returnCodeLanguages(languages_url: string) {
  const response = await fetch(languages_url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    },
  });
  const data = await response.json();
  let totalCodeLines: number = 0;
  const languagesArray: Array<[string, number]> = [];

  Object.keys(data).forEach((key) => {
    totalCodeLines = totalCodeLines + data[key];
  });
  Object.keys(data).forEach((key) => {
    const percentage = Number(((data[key] / totalCodeLines) * 100).toFixed(2));
    languagesArray.push([key, percentage]);
  });

  return languagesArray;
}

export async function fetchGithubRepo() {
  const defaultAPIUrl = "https://api.github.com/repos";

  const results: Project[] = await Promise.all(
    repos.map(async (repo) => {
      const response = await fetch(`${defaultAPIUrl}/${owner}/${repo}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        },
      });
      const data = await response.json();

      const projectData: Project = {
        name: data.name,
        description: !data.description ? "No Description" : data.description,
        code_language: await returnCodeLanguages(data.languages_url),
        code_source: data.html_url,
        deploy: !data.homepage ? null : data.homepage,
      };
      returnCodeLanguages(data.languages_url);
      return projectData;
    })
  );

  return results;
}
