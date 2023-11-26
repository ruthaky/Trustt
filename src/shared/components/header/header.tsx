"use client";
import { useState } from "react";
import {
  Container,
  Group,
  Burger,
  Box,
  Flex,
  Text,
  Collapse,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./header.module.css";
import { IconMapPin } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "../../../../public/logo.webp";

const links = [
  { link: "/", label: "Home" },
  { link: "#services", label: "Services" },
  { link: "#about", label: "About" },
  { link: "#destinations", label: "Destinations" },
  { link: "#apply", label: "Apply Now" },
];

export function Header() {
  const [opened, { toggle }] = useDisclosure(false);
  const path = usePathname()
  const router = useRouter()

  const items = links.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      className="block leading-4 py-2 px-3 rounded-sm no-underline text-gray-700 dark:text-dark-0 text-sm font-medium hover:bg-primary-400 hover:text-white dark:hover:bg-dark-6"
    >
      {link.label}
    </Link>
  ));

  return (
    <header className="h-14 shadow-sm mb-30 bg-white border-b border-gray-300 dark:border-dark-4 sticky top-0 z-20">
      <Flex className="h-14 justify-between items-center px-3">
        <Flex className="items-center cursor-pointer gap-2" onClick={() => {router.push("/")}}>
          <Image src={logo.src} width={35} height={35} alt="Trust logo"/>
          <p className="font-bold">Trust Educational and Visa Consultancy</p>
        </Flex>
        <Group gap={10} visibleFrom="xs">
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Flex>
      <Collapse in={opened} className="relative z-10">
        <Flex className="flex flex-col items-center justify-center bg-white gap-3 pt-4 border h-[30dvh]">
          {items}
        </Flex>
      </Collapse>
    </header>
  );
}
