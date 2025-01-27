import Image from "next/image";
import profilePic from "@/public/profile-picture.jpg";

export default function Header() {
  return (
    <div
      className="flex flex-col place-items-center gap-4 py-5 bg-[#FFEFD6] sm:grid sm:grid-cols-2"
      id="home"
    >
      <div className="text-3xl">
        <h1>Hello World,</h1>
        <p>
          I am <span className="underline">Jorge Eberhard</span>
        </p>
      </div>
      <Image
        className="rounded-full"
        src={profilePic}
        width={300}
        height={300}
        alt="Profile Picture"
      />
    </div>
  );
}
