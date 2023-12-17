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
  const path = usePathname();
  const router = useRouter();

  const items = links.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      className="dark:text-dark-0 dark:hover:bg-dark-6 block rounded-sm px-3 py-2 text-sm font-medium leading-4 text-gray-700 no-underline hover:bg-primary-400 hover:text-white"
    >
      {link.label}
    </Link>
  ));

  return (
    <header className="fixed z-50 w-full bg-white bg-opacity-50 px-8">
      <Flex className="h-14 items-center justify-between px-3">
        <Flex
          className="cursor-pointer items-center gap-2"
          onClick={() => {
            router.push("/");
          }}
        >
          <Image src={logo.src} width={35} height={35} alt="Trust logo" />
          <p className="font-bold">Trust Educational and Visa Consultancy</p>
        </Flex>
        <Group gap={10} visibleFrom="xs">
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Flex>
      <Collapse in={opened} className="relative z-10">
        <Flex className="flex h-[30dvh] flex-col items-center justify-center gap-3 border bg-white pt-4">
          {items}
        </Flex>
      </Collapse>
    </header>
  );
}
