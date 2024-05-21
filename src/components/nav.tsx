import { Button } from "./ui/button";
import Link from "next/link";

import Icon from "./Icon";

import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { ThemeToggle } from "./theme-toggle";

const Navbar = () => {
  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/" },
    { label: "Contact", href: "/" },
  ];
  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-primary text-2xl font-semibold">Logo</div>
        <div className="flex space-x-4">
          <div className="hidden md:flex space-x-4">
            {links.map((link) => (
              <Link
                className="block text-primary text-lg font-semibold hover:text-secondary transition-colors duration-200"
                key={link.label}
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <ThemeToggle />
        </div>

        <div className="md:hidden">
          <Drawer>
            <DrawerTrigger>
              <Button variant="ghost" size="icon">
                <Icon name="menu" />
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <div className="p-4">
                {links.map((link) => (
                  <Link
                    className="block text-center text-primary text-lg font-semibold hover:text-secondary transition-colors duration-200"
                    key={link.label}
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
