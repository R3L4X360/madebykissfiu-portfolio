import Image from "next/image";
import Navbar from "./nav/navbar";

const navigationRoutes = [
  { name: "Home", link: "/" },
  { name: "About me", link: "/aboutme" },
  { name: "My work", link: "/work" },
];

function Header() {
  return (
    <header className="w-full absolute top-3 left-0 z-[9999]">
      <div className="bg-background shadow-md shadow-secondary m-auto flex gap-2 items-center w-max py-1 px-3 rounded-full">
        <Image
          src={"/images/madebykissfiutag.png"}
          alt="MADEBYKISSFIU tag"
          width={50}
          height={50}
          quality={100}
        />

        <Navbar navItems={navigationRoutes} />
      </div>
    </header>
  );
}

export default Header;
