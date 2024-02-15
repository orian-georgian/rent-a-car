import NavItem from "./NavItem";
import Image from "react-bootstrap/Image";

import { IoCarSportSharp } from "react-icons/io5";
import { FaPeopleGroup } from "react-icons/fa6";
import { BiSolidContact } from "react-icons/bi";

import useIdle from "../hooks/useIdle";

function Sidebar() {
  const isIdle = useIdle(10000);

  return (
    <aside className="cars-sidebar">
      <nav>
        <ul>
          <NavItem path="/" text="Cars" icon={<IoCarSportSharp />} />
          <NavItem path="/team" text="Team" icon={<FaPeopleGroup />} />
          <NavItem path="/contact" text="Contact" icon={<BiSolidContact />} />
        </ul>
      </nav>
      {isIdle && <Image src="/images/sleep.png" />}
    </aside>
  );
}

export default Sidebar;
