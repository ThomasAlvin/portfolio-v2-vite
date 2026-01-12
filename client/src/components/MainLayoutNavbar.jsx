import {
  MobileNav,
  MobileNavHeader,
  MobileNavItems,
  MobileNavMenu,
  Navbar,
  NavBody,
  NavItems,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";

export default function MainLayoutNavbar({ navItems, activeSection }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Navbar>
      {/* Desktop Navigation */}
      <NavBody className={"text-white"}>
        <NavItems
          className={"text-white"}
          items={navItems}
          activeSection={activeSection}
        />
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          {/* <NavbarLogo /> */}
          <MobileNavItems
            className={"text-white"}
            items={navItems}
            activeSection={activeSection}
          />
          {/* <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          /> */}
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item, idx) => (
            <a
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative text-neutral-600 dark:text-neutral-300"
            >
              <span className="block">{item.name}</span>
            </a>
          ))}
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
