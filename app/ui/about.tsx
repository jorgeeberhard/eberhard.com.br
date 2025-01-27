export default function About() {
  return (
    <div className="flex flex-col py-5 px-10 bg-[#F2DEBA]" id="about">
      <h1 className="text-3xl mb-5">About</h1>
      <p className="bg-[#FFEFD6] rounded-md py-5 px-10 shadow-md">
        I am a Computer Science student at Feevale University. I also work on
        small projects using NextJS and TypeScript. Here you will find my
        personal projects as well as the projects developed for the University.
        Other projects are available on my{" "}
        <a
          className="text-[#0E5E6F] underline font-bold"
          href="https://github.com/jorgeeberhard/"
        >
          GitHub
        </a>
        .
      </p>
    </div>
  );
}
