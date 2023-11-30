import { kalam } from "@/app/fonts";
import Image from "next/image";

import { MenuItem } from "@/components/MenuItem";
import { useRouter } from "next/navigation";
import { IconButton } from "@/components/IconButton";
import { SunDim } from "@phosphor-icons/react/dist/ssr/SunDim";
import { List } from "@phosphor-icons/react/dist/ssr/List";

interface NavBarProps {
  logo: string;
}

export function NavBar({ logo }: NavBarProps) {
  const router = useRouter();

  return (
    <nav className="w-full h-20 flex justify-between bg-surface-background px-20 py-4 mobile:px-4">
      <div className={kalam.className + " flex justify-center items-center"}>
        <Image src={logo} alt="Logo" width={150} height={40} className="" />
      </div>

      <div className="tablet:hidden desktop:hidden">
        <IconButton handleClick={() => {}}>
          <List />
        </IconButton>
      </div>

      <div className="mobile:hidden flex justify-center items-center gap-4">
        <MenuItem
          label="Home"
          handleClick={() => {
            router.push("/home");
          }}
        />
        <MenuItem
          label="About"
          handleClick={() => {
            router.push("/About");
          }}
        />
        <MenuItem
          label="Projects"
          handleClick={() => {
            router.push("/Projects");
          }}
        />
        <MenuItem
          label="Contact"
          handleClick={() => {
            router.push("/Contact");
          }}
        />
        <MenuItem label="PT" handleClick={() => {}} />
        <IconButton handleClick={() => {}}>
          <SunDim />
        </IconButton>
      </div>
    </nav>
  );
}
