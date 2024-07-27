import { NavItemType } from "@/types/nav";
import NavItem from "./navItem";

const Navbar = ({ navItems }: { navItems: NavItemType[] }) => {
  return (
    <nav className="shift">
      <ul className="flex gap-1">
        {navItems.map((navItem, i) => (
          <NavItem key={i} {...navItem} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
