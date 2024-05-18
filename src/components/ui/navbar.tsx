import * as React from "react"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, } from "@/components/ui/navigation-menu"
import Each from "./each"
import { cn } from "@/lib/utils";

type NavbarProps = {
  activeTab: string;
  handleActiveTab: (path:string)=>void
}

const Navbar: React.FC<NavbarProps> = ({activeTab,handleActiveTab}) => {
  const publicRoutes = React.useMemo(() => [
    {
      path: 'home',
      name: 'Home',
      type:'id'
    },
    {
      path: 'skills',
      name: 'Skills',
      type:'id'
    },
    {
      path: 'experience',
      name: 'Experience',
      type:'id'
    },
    {
      path: 'project',
      name: 'Project',
      type:'id'
    },
    {
      path: 'about',
      name: 'About',
      type:'id'
    },
    {
      path: '/contact-us',
      name: 'ContactUs',
      type:'link'
    },
  ], []);
  return (
    <>
      <NavigationMenu className="max-w-full p-6 bg-black">
        <NavigationMenuList className=" text-white flex-wrap">
          <Each of={publicRoutes} render={(item) => (
            <NavigationMenuItem className={cn('p-1 text-[1rem] font-[300]', { 'text-[#0f55d3] font-[500]': activeTab === item.path })}>
              <NavigationMenuLink href={item.type==='link'? item.path:''} className=" cursor-pointer" onClick={() => handleActiveTab(item.path)}>{item.name}</NavigationMenuLink>
            </NavigationMenuItem>
          )} />
        </NavigationMenuList>
      </NavigationMenu>

    </>
  )
}

Navbar.propTypes = {}

export default Navbar
