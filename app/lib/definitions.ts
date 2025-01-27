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
