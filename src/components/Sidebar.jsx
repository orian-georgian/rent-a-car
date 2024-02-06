import NavItem from "./NavItem";

function Sidebar() {
  return (
    <aside className="cars-sidebar">
      <nav>
        <ul>
          <NavItem path="/" text="Cars" />
          <NavItem path="/team" text="Team" />
          <NavItem path="/contact" text="Contact" />
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
