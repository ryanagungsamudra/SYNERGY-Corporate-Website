"use client";

// React
import Image from "next/image";
import React, { useContext, useState } from "react";
import { SynergyContext } from "@/context";
import dynamic from "next/dynamic";

const Link = dynamic(() => import("next/link"));

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

  const leftMenuComponents: {
    title: string;
    href: string;
    onClick: () => void;
    className: string;
  }[] = [
    {
      title: "Company Profile",
      href: "/about-us/company-profile",
      onClick: () => changeMenu("company-profile"),
      className:
        menu === "company-profile" ? "text-[#fff] bg-[#9FA7AB] flex" : "",
    },
    {
      title: "Our Commitment",
      href: "/about-us/our-commitment",
      onClick: () => changeMenu("our-commitment"),
      className:
        menu === "our-commitment" ? "text-[#fff] bg-[#9FA7AB] flex" : "",
    },
    {
      title: "Management Team",
      href: "/about-us/management-team",
      onClick: () => changeMenu("management-team"),
      className:
        menu === "management-team" ? "text-[#fff] bg-[#9FA7AB] flex" : "",
    },
    {
      title: "I.P.A.C",
      href: "/about-us/ipac",
      onClick: () => changeMenu("ipac"),
      className: menu === "ipac" ? "text-[#fff] bg-[#9FA7AB] flex" : "",
    },
    {
      title: "I.A.C",
      href: "/about-us/iac",
      onClick: () => changeMenu("iac"),
      className: menu === "iac" ? "text-[#fff] bg-[#9FA7AB] flex" : "",
    },
    {
      title: "SynergyCare Committee",
      href: "/about-us/synergycare-committee",
      onClick: () => changeMenu("synergycare-committee"),
      className:
        menu === "synergycare-committee" ? "text-[#fff] bg-[#9FA7AB] flex" : "",
    },
  ];

  const rightMenuComponents: {
    title: string;
    href: string;
    onClick: () => void;
    className: string;
  }[] = [
    {
      title: "Personal",
      href: "/services/personal",
      onClick: () => changeMenu("personal"),
      className: menu === "personal" ? "text-[#fff] bg-[#9FA7AB] flex" : "",
    },
    {
      title: "Corporate",
      href: "/services/corporate",
      onClick: () => changeMenu("corporate"),
      className: menu === "corporate" ? "text-[#fff] bg-[#9FA7AB] flex" : "",
    },
    {
      title: "High Net Worth",
      href: "/services/high-net-worth",
      onClick: () => changeMenu("high-net-worth"),
      className:
        menu === "high-net-worth" ? "text-[#fff] bg-[#9FA7AB] flex" : "",
    },
    // Separator line
    {
      title: "General Insurance",
      href: "/services/general-insurance",
      onClick: () => changeMenu("general-insurance"),
      className:
        menu === "general-insurance" ? "text-[#fff] bg-[#9FA7AB] flex" : "",
    },
  ];

  const mobileMenuComponents: {
    title: string;
    href: string;
    onClick: () => void;
  }[] = [
    {
      onClick: handleClick,
      href: "/about-us/company-profile",
      title: "Company Profile",
    },
    {
      onClick: handleClick,
      href: "/about-us/our-commitment",
      title: "Our Commitment",
    },
    {
      onClick: handleClick,
      href: "/about-us/management-team",
      title: "Management Team",
    },
    {
      onClick: handleClick,
      href: "/about-us/ipac",
      title: "I.P.A.C.",
    },
    {
      onClick: handleClick,
      href: "/about-us/iac",
      title: "I.A.C.",
    },
    {
      onClick: handleClick,
      href: "/about-us/synergycare-committee",
      title: "SynergyCare Committee",
    },
  ];

  return (
    <div className="flex p-4 px-8 fixed top-0 w-full bg-white border-b-[3px] z-50">
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
                <NavigationMenuTrigger
                  className={`${
                    menu === "company-profile" ||
                    menu === "our-commitment" ||
                    menu === "management-team" ||
                    menu === "synergycare-committee"
                      ? "text-[#2b4087] font-medium ml-6"
                      : "text-[#7C7C7D] hover:text-[#181819] ml-6"
                  }`}>
                  About Us
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[250px] lg:w-[250px]">
                    {leftMenuComponents.map((component) => (
                      <ListItem
                        key={component.title}
                        className={component.className}
                        onClick={component.onClick}
                        href={component.href}
                        title={component.title}
                      />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Services */}
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={`${
                    menu === "personal" ||
                    menu === "corporate" ||
                    menu === "high-net-worth" ||
                    menu === "general-insurance"
                      ? "text-[#2b4087] font-medium pl-4"
                      : "text-[#7C7C7D] hover:text-[#181819]"
                  }`}>
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[250px] lg:w-[250px]">
                    {rightMenuComponents.map((component) => (
                      <React.Fragment key={component.title}>
                        <ListItem
                          key={component.title}
                          onClick={component.onClick}
                          href={component.href}
                          title={component.title}
                          className={component.className}
                        />
                        {component.title === "High Net Worth" && (
                          <hr className="border-t border-gray-300" />
                        )}
                      </React.Fragment>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Careers */}
              <NavigationMenuItem>
                <Link
                  href="/careers"
                  onClick={() => changeMenu("careers")}
                  prefetch>
                  <NavigationMenuLink
                    className={
                      (navigationMenuTriggerStyle(),
                      `${
                        menu === "careers"
                          ? "text-[#2b4087] font-medium pl-4"
                          : "text-[#7C7C7D] hover:text-[#181819] pl-4"
                      }`)
                    }>
                    Careers
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              {/* Standards */}
              <NavigationMenuItem>
                <Link
                  href="/standards"
                  onClick={() => changeMenu("standards")}
                  prefetch>
                  <NavigationMenuLink
                    className={
                      (navigationMenuTriggerStyle(),
                      `${
                        menu === "standards"
                          ? "text-[#2b4087] font-medium pl-9"
                          : "text-[#7C7C7D] hover:text-[#181819] pl-9"
                      }`)
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
              <Link
                href="/articles"
                onClick={() => changeMenu("articles")}
                prefetch>
                <NavigationMenuLink
                  className={
                    (navigationMenuTriggerStyle(),
                    `${
                      menu === "articles"
                        ? "text-[#2b4087] font-medium mr-4"
                        : "text-[#7C7C7D] hover:text-[#181819] mr-4 "
                    }`)
                  }>
                  Articles
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            {/* News */}
            <NavigationMenuItem>
              <Link href="/news" onClick={() => changeMenu("news")} prefetch>
                <NavigationMenuLink
                  className={
                    (navigationMenuTriggerStyle(),
                    ` ${
                      menu === "news"
                        ? "text-[#2b4087] font-medium mx-4"
                        : "text-[#7C7C7D] hover:text-[#181819] mx-4"
                    }`)
                  }>
                  News
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            {/* Contact */}
            <NavigationMenuItem>
              <Link
                href="/contact"
                onClick={() => changeMenu("contact")}
                prefetch>
                <NavigationMenuLink
                  className={
                    (navigationMenuTriggerStyle(),
                    ` ${
                      menu === "contact"
                        ? "text-[#2b4087] font-medium mx-4"
                        : "text-[#7C7C7D] hover:text-[#181819] mx-4"
                    }`)
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
                  <ListItem
                    href="https://1.synergy.com.sg/"
                    title="OneSynergy Login"></ListItem>
                  <hr className="border-t border-gray-300" />
                  <ListItem
                    href="https://synergy.com.sg/apps"
                    title="Apps"></ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      {/* Hamburger */}
      <div className="md:hidden z-[999] flex w-full h-full items-center justify-between">
        <Link href="/" prefetch>
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
                    {mobileMenuComponents.map((component) => (
                      <ListItem
                        key={component.title}
                        onClick={component.onClick}
                        href={component.href}
                        title={component.title}
                      />
                    ))}
                  </ul>
                </NavigationMenu>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>Services</AccordionTrigger>
              <AccordionContent>
                <NavigationMenu>
                  <ul className="grid gap-3 p-4 border w-[100vw] rounded-md">
                    <ListItem
                      onClick={handleClick}
                      href="/services/personal"
                      title="Personal"></ListItem>
                    <ListItem
                      onClick={handleClick}
                      href="/services/corporate"
                      title="Corporate"></ListItem>
                    <ListItem
                      onClick={handleClick}
                      href="/services/high-net-worth"
                      title="High Net Worth"></ListItem>
                    <ListItem
                      onClick={handleClick}
                      href="/services/general-insurance"
                      title="General Insurance"></ListItem>
                  </ul>
                </NavigationMenu>
              </AccordionContent>
            </AccordionItem>

            <Link onClick={handleClick} href={"/careers"}>
              <h5 className="font-medium cursor-pointer my-4 hover:underline">
                Careers
              </h5>
              <hr className="border-t border-gray-300" />
            </Link>

            <Link onClick={handleClick} href={"/standards"}>
              <h5 className="font-medium cursor-pointer my-4 hover:underline">
                Standards
              </h5>
              <hr className="border-t border-gray-300" />
            </Link>

            <Link onClick={handleClick} href={"/articles"}>
              <h5 className="font-medium cursor-pointer my-4 hover:underline">
                Articles
              </h5>
              <hr className="border-t border-gray-300" />
            </Link>

            <Link onClick={handleClick} href={"/news"}>
              <h5 className="font-medium cursor-pointer my-4 hover:underline">
                News
              </h5>
              <hr className="border-t border-gray-300" />
            </Link>

            <Link onClick={handleClick} href={"/contact"}>
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
                      onClick={handleClick}
                      href="https://1.synergy.com.sg/"
                      title="OneSynergy Login"></ListItem>
                    <hr className="border-t-[0.3px] border-gray-300" />

                    <ListItem
                      onClick={handleClick}
                      href="https://synergy.com.sg/apps"
                      title="Apps"></ListItem>
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
        <Link
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-1 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          href={props.href || "/default"}
          {...props}>
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});

ListItem.displayName = "ListItem";
