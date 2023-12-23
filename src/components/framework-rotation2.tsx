import Image from "next/image";
import { assets } from "@/utils/asset-utils";
import { type Framework, frameworks } from "@/utils/framework-utils";
import { cn } from "@/utils/tailwind-utils";

export const FrameworkRotation2 = ({
  currentFramework,
}: {
  currentFramework: Framework;
}) => {
  return (
    <div className="mx-2 mt-0 align-middle inline-flex relative h-[25px] w-[25px]">
      {frameworks.map((name, index) => (
        <Image
          key={name}
          src={assets[name]}
          className={cn(
            "w-full h-full object-contain object-center absolute top-0 left-0 transition-all duration-300 ",
            currentFramework === name
              ? "opacity-100 transform-none"
              : index > frameworks.indexOf(currentFramework as Framework)
              ? "opacity-0 -translate-y-2"
              : "opacity-0 translate-y-2"
          )}
          alt="Framework logo"
          width="80"
          height="80"
        />
      ))}
    </div>
  );
};