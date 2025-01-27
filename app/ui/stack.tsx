import Image from "next/image";
export default function Stack() {
  return (
    <div className="flex flex-col py-5 px-10 bg-[#FFEFD6]">
      <h1 className="text-3xl">Stack</h1>
      <div className="grid grid-cols-6 pt-2">
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
          width={50}
          height={50}
          alt="NextJS"
        />

        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
          width={50}
          height={50}
          alt="TypeScript"
        />

        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
          width={50}
          height={50}
          alt="Git"
        />

        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
          width={50}
          height={50}
          alt="NodeJS"
        />

        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
          width={50}
          height={50}
          alt="TailwindCSS"
        />

        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
          width={50}
          height={50}
          alt="Postgres"
        />
      </div>
    </div>
  );
}
