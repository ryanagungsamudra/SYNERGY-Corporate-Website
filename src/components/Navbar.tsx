"use client";

// React
import Image from "next/image";
import React, { useContext, useState } from "react";
import Link from "next/link";
import { SynergyContext } from "@/context";

// Logo
import { FaBars, FaTimes } from "react-icons/fa";
import synergyLogo from "@/app/assets/synergy-logo.png";

// Shadcn
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const { changeMenu, menu } = useContext(SynergyContext);

  return (
    <div className="flex p-4 px-8 fixed top-0 w-full bg-white border-b-[3px] z-[999]">
      {/* Desktop menu */}
      <div className="hidden md:flex w-full justify-between ">
        <div className="flex h-full items-center">
          <Link href="/" onClick={() => changeMenu("")}>
            <Image
              className="cursor-pointer"
              src={synergyLogo}
              alt="logo"
              width={150}
              height={150}
            />
          </Link>

          {/* Left tab menu */}
          <NavigationMenu>
            <NavigationMenuList>
              {/* About us */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-[#7C7C7D] hover:text-[#181819] ml-6">
                  About Us
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[250px] lg:w-[250px]">
                    <ListItem
                      href="/profile"
                      title="Company Profile"></ListItem>
                    <ListItem
                      href="/docs/installation"
                      title="Our Commitment"></ListItem>
                    <ListItem
                      href="/docs/primitives/typography"
                      title="Management Team"></ListItem>
                    <ListItem
                      href="/docs/primitives/typography"
                      title="I.P.A.C"></ListItem>{" "}
                    <ListItem
                      href="/docs/primitives/typography"
                      title="I.A.C"></ListItem>{" "}
                    <ListItem
                      href="/docs/primitives/typography"
                      title="SynergyCare Committee"></ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Services */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-[#7C7C7D] hover:text-[#181819]">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[250px] lg:w-[250px]">
                    <ListItem href="/profile" title="Personal"></ListItem>
                    <ListItem
                      href="/docs/installation"
                      title="Corporate"></ListItem>
                    <ListItem
                      href="/docs/primitives/typography"
                      title="High Net Worth"></ListItem>
                    <hr className="border-t border-gray-300" />
                    <ListItem
                      href="/docs/primitives/typography"
                      title="General Insurance"></ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Careers */}
              <NavigationMenuItem>
                <Link href="/docs" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={
                      (navigationMenuTriggerStyle(),
                      "text-[#7C7C7D] hover:text-[#181819] pl-4")
                    }>
                    Careers
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              {/* Standards */}
              <NavigationMenuItem>
                <Link href="/docs" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={
                      (navigationMenuTriggerStyle(),
                      "text-[#7C7C7D] hover:text-[#181819] pl-8")
                    }>
                    Standards
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right tab menu */}
        <NavigationMenu>
          <NavigationMenuList>
            {/* Articles */}
            <NavigationMenuItem>
              <Link href="/articles" legacyBehavior passHref>
                <NavigationMenuLink
                  className={
                    (navigationMenuTriggerStyle(),
                    `text-[#7C7C7D] hover:text-[#181819] mr-2 ${
                      menu === "articles" ? "text-[#2b4087] font-medium" : ""
                    }`)
                  }>
                  Articles
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            {/* News */}
            <NavigationMenuItem>
              <Link href="/news" legacyBehavior passHref>
                <NavigationMenuLink
                  className={
                    (navigationMenuTriggerStyle(),
                    `text-[#7C7C7D] hover:text-[#181819] mx-4 ${
                      menu === "news" ? "text-[#2b4087] font-medium" : ""
                    }`)
                  }>
                  News
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            {/* Contact */}
            <NavigationMenuItem>
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink
                  className={
                    (navigationMenuTriggerStyle(),
                    "text-[#7C7C7D] hover:text-[#181819]")
                  }>
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            {/* Login */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-[#7C7C7D] hover:text-[#181819]">
                Login
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[250px] lg:w-[250px]">
                  <ListItem href="/profile" title="OneSynergy Login"></ListItem>
                  <hr className="border-t border-gray-300" />
                  <ListItem href="/docs/installation" title="Apps"></ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      {/* Hamburger */}
      <div className="md:hidden z-50 flex w-full h-full items-center justify-between">
        <Link href="/">
          <Image
            className="cursor-pointer"
            src={synergyLogo}
            alt="logo"
            width={150}
            height={150}
          />
        </Link>
        {!nav ? (
          <FaBars
            onClick={handleClick}
            className="cursor-pointer z-50"
            size={25}
          />
        ) : (
          <FaTimes
            onClick={handleClick}
            className="cursor-pointer z-50"
            size={25}
          />
        )}
      </div>

      {/* Mobile menu */}
      {nav && (
        <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-[#fff] z-40">
          <Accordion type="single" collapsible className="w-full mt-20 px-8">
            <AccordionItem value="item-1">
              <AccordionTrigger>About Us</AccordionTrigger>
              <AccordionContent>
                <NavigationMenu>
                  <ul className="grid gap-3 p-4 border w-[100vw] rounded-md">
                    <ListItem
                      href="/profile"
                      title="Company Profile"></ListItem>
                    <ListItem
                      href="/docs/installation"
                      title="Our Commitment"></ListItem>
                    <ListItem
                      href="/docs/primitives/typography"
                      title="Management Team"></ListItem>
                    <ListItem
                      href="/docs/primitives/typography"
                      title="I.P.A.C."></ListItem>
                    <ListItem
                      href="/docs/primitives/typography"
                      title="I.A.C."></ListItem>
                    <ListItem
                      href="/docs/primitives/typography"
                      title="SynergyCare Committee"></ListItem>
                  </ul>
                </NavigationMenu>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Services</AccordionTrigger>
              <AccordionContent>
                <NavigationMenu>
                  <ul className="grid gap-3 p-4 border w-[100vw] rounded-md">
                    <ListItem href="/profile" title="Personal"></ListItem>
                    <ListItem
                      href="/docs/installation"
                      title="Corporate"></ListItem>
                    <ListItem
                      href="/docs/primitives/typography"
                      title="High Net Worth"></ListItem>
                    <ListItem
                      href="/docs/primitives/typography"
                      title="General Insurance"></ListItem>
                  </ul>
                </NavigationMenu>
              </AccordionContent>
            </AccordionItem>

            <Link href={"/"}>
              <h5 className="font-medium cursor-pointer my-4 hover:underline">
                Careers
              </h5>
              <hr className="border-t border-gray-300" />
            </Link>

            <Link href={"/"}>
              <h5 className="font-medium cursor-pointer my-4 hover:underline">
                Standards
              </h5>
              <hr className="border-t border-gray-300" />
            </Link>

            <Link href={"/"}>
              <h5 className="font-medium cursor-pointer my-4 hover:underline">
                Articles
              </h5>
              <hr className="border-t border-gray-300" />
            </Link>

            <Link href={"/"}>
              <h5 className="font-medium cursor-pointer my-4 hover:underline">
                News
              </h5>
              <hr className="border-t border-gray-300" />
            </Link>

            <Link href={"/"}>
              <h5 className="font-medium cursor-pointer my-4 hover:underline">
                Contact
              </h5>
              <hr className="border-t border-gray-300" />
            </Link>

            <AccordionItem value="item-3">
              <AccordionTrigger>Login</AccordionTrigger>
              <AccordionContent>
                <NavigationMenu>
                  <ul className="grid gap-3 p-4 border w-[100vw] rounded-md">
                    <ListItem
                      href="/profile"
                      title="OneSynergy Login"></ListItem>
                    <hr className="border-t-[0.3px] border-gray-300" />

                    <ListItem href="/docs/installation" title="Apps"></ListItem>
                  </ul>
                </NavigationMenu>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      )}
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-1 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}>
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
