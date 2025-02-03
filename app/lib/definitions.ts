export type Project = {
  name: string;
  description: string;
  code_language: [string, number][] | null;
  code_source: string;
  deploy?: string | null;
};

export const owner = "jorgeeberhard";
export const repos = [
  "eberhard.com.br",
  "clone-tabnews",
  "to-do-list",
  "h2o-erlang",
];

type Technology = {
  name: string;
  description: string;
  link: string;
};

type Stack = {
  name: string;
  tech: Technology[];
};

export const stack: Stack[] = [
  {
    name: "Front-end",
    tech: [
      {
        name: "react",
        description: "React",
        link: "https://react.dev",
      },
      {
        name: "tailwindcss",
        description: "TailwindCSS",
        link: "https://tailwindcss.com/",
      },
      {
        name: "typescript",
        description: "TypeScript",
        link: "https://www.typescriptlang.org/",
      },
    ],
  },
  {
    name: "Back-end",
    tech: [
      {
        name: "nextjs",
        description: "NextJS",
        link: "https://nextjs.org/",
      },
      {
        name: "nodejs",
        description: "Node JS",
        link: "https://nodejs.org/",
      },
      {
        name: "typescript",
        description: "TypeScript",
        link: "https://www.typescriptlang.org/",
      },
    ],
  },
  {
    name: "Database",
    tech: [
      {
        name: "postgresql",
        description: "PostgreSQL",
        link: "https://www.postgresql.org/",
      },
      {
        name: "sqlite",
        description: "SQLite",
        link: "https://www.sqlite.org/",
      },
    ],
  },
  {
    name: "DevOps",
    tech: [
      {
        name: "git",
        description: "Git",
        link: "https://git-scm.com/",
      },
      {
        name: "github",
        description: "Github Actions",
        link: "https://github.com/features/actions",
      },
      {
        name: "docker",
        description: "Docker",
        link: "https://www.docker.com/",
      },
    ],
  },
];

export type Locales = "en" | "pt-BR";
