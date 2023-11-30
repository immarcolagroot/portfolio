import Image from "next/image";

import DevLinkProject from "@/assets/DevLinks.svg";
import JSIcon from "@/assets/JavaScript.svg";
import NodeIcon from "@/assets/Node.js.svg";
import ReactIcon from "@/assets/React.svg";
import TailwindIcon from "@/assets/Tailwind.svg";

interface ProjectCardProps {}

export function ProjectCard({}: ProjectCardProps) {
  return (
    <div className="w-96 p-6 bg-surface-primary rounded-2xl">
      <Image
        src={DevLinkProject}
        alt="Project 1"
        className="rounded-tl-lg rounded-tr-lg"
      />
      <div className="pt-4 flex flex-row">
        <div className="flex w-1/2 justify-start text-text-secondary">
          <span>Jul - Dec 2022</span>
        </div>
        <div className="flex w-1/2 gap-6 justify-start">
          <Image src={JSIcon} alt="JSIcon" />
          <Image src={NodeIcon} alt="NodeIcon" />
          <Image src={ReactIcon} alt="ReactIcon" />
          <Image src={TailwindIcon} alt="TailwindIcon" />
        </div>
      </div>
      <div className="flex flex-col pt-4 gap-2">
        <h3 className="text-text-primary text-xl font-medium">
          Nome do projeto
        </h3>
        <p className="text-text-secondary text-base font-normal line-clamp-3">
          Lorem ipsum dolor sit amet consectetur. Nunc euismod venenatis aliquam
          consequat nisi facilisi sed ac diam. Scelerisque nisi varius suscipit
          congue eget nunc neque mi. Placerat enim orci arcu habitasse morbi.
        </p>
      </div>
    </div>
  );
}
