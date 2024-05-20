import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/" },
    { label: "Contact", href: "/" },
  ];
  return (
    <nav className=" p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-primary text-2xl font-semibold">Logo</div>
        <div className="hidden md:flex space-x-4">
          {links.map((link) => (
            <Link
              className="block text-primary text-lg hover:text-white"
              key={link.label}
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon">
                <Menu />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-40">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                {links.map((link) => (
                  <DropdownMenuItem key={link.label}>
                    <Link href={link.href}>{link.label}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
