import React from "react";
import sidebarList from "./sidebarList";
import NavItem from "./NavItem";

export default function PrimarySidebar() {
  return (
    <aside className="h-[100vh] border-r-[1px] w-[250px] pt-12">
      <ul>
        {sidebarList.map(({ id, link, title }) => (
          <NavItem key={id} link={link} title={title} isLast={sidebarList.at(-1)?.id === id}/>
        ))}
      </ul>
    </aside>
  );
}
