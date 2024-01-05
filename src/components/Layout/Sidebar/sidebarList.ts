interface SidebarListType {
  id: number;
  title: string;
  link: string;
}

const sidebarList: SidebarListType[] = [
  {
    id: 1,
    link: "/dashboard",
    title: "Dashboard",
  },
  {
    id: 2,
    link: "/products",
    title: "Products",
  },
];

export default sidebarList;
