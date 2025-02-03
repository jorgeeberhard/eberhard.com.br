"use client";

import { stack } from "@/app/lib/definitions";
import Link from "next/link";
import Image from "next/image";

export default function Stack() {
  return (
    <div className="flex flex-col py-5 px-10 bg-[#FFEFD6]">
      <h1 className="text-3xl">Stack</h1>
      <div
        className={`grid grid-cols-2 sm:grid-cols-4 gap-5 sm:gap-2 justify-items-center content-center pt-2`}
      >
        {stack.map((domain, index) => (
          <div
            className="flex flex-col w-full lg:w-3/4 px-3 py-2 bg-[#F2DEBA] shadow-md rounded-md"
            key={index}
          >
            <h1 className="text-xl">{domain.name}</h1>
            <div className="grow flex flex-col justify-around">
              {domain.tech.map((tech, index) => (
                <div key={index} className="flex items-center">
                  <Image
                    key={index}
                    src={`/icons/${tech.name}.svg`}
                    height={48}
                    width={48}
                    alt={tech.name}
                  />
                  <Link className="ml-2" href={tech.link}>
                    {tech.description}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
