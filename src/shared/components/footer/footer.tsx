import { Box, Divider, Flex, Text } from "@mantine/core";
import {
  IconAddressBook,
  IconBrandInstagram,
  IconBrandTelegram,
  IconBrandTiktok,
  IconBrandYoutube,
  IconMail,
  IconMapPin,
  IconPhone,
} from "@tabler/icons-react";
import Image from "next/image";
import logo from "../../../../public/logo.webp";

const links = [
  { link: "/", label: "Home" },
  { link: "#services", label: "Services" },
  { link: "#about", label: "About" },
  { link: "#destinations", label: "Destinations" },
];

const footerLinks = [
  { link: "/about", label: "Follow on Tiktok" },
  { link: "/about", label: "Follow Telegram" },
  { link: "/about", label: "Follow Instagram" },
  { link: "/about", label: "Book a call" },
];

export default function Footer() {
  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className="dark:text-dark-0 dark:hover:bg-dark-6 block rounded-sm py-2 text-sm font-medium leading-4 text-white no-underline hover:bg-primary-400"
    >
      {link.label}
    </a>
  ));

  const community = footerLinks.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className="dark:text-dark-0 dark:hover:bg-dark-6 block rounded-sm py-2 text-sm font-medium leading-4 text-white no-underline hover:bg-primary-400"
    >
      {link.label}
    </a>
  ));

  return (
    <div>
      <Box className="flex min-h-[40dvh] flex-col items-center bg-primary-500 pt-4">
        <Box>
          <Box className="flex flex-col items-center justify-center">
            <Flex className="items-center gap-2">
              <Image src={logo.src} width={35} height={35} alt="Trust logo" />
              <p className="font-bold text-white">
                Trust Educational and Visa Consultancy
              </p>
            </Flex>
            {/* <Text fz={"sm"} className="text-center" c={"white"}>
              Jorney of excellence
            </Text> */}
            <Flex className="text-white"><span><IconPhone/></span>+251-911263642 | +251-946634613</Flex>
            <Flex className="text-white mt-2" gap={2}><span><IconMail/></span>trusteducationalandvisconsult@gmail.com</Flex>
            <Flex className="text-white mt-2 mb-8" gap={2}><span><IconAddressBook/></span>22 Noah Bldg, beside Golagol, Addis Ababa</Flex>
          </Box>
        </Box>
        <Box className="flex w-full flex-row justify-around p-6">
          <Box className="text-white">
            <Text fz={"lg"} fw={"bold"}>
              About
            </Text>
            {items}
          </Box>
          <Box className="text-white">
            <Text fz={"lg"} fw={"bold"}>
              Community
            </Text>
            {community}
          </Box>
        </Box>
        <Divider my={10} className="w-[100dvw]" color="white" />
        <Box className="flex w-full flex-row items-center justify-between p-4 md:px-8">
          <Text fz={"xs"} c={"white"}>
            © 2023 Trust Educational and Visa Consultancy. All rights reserved.
          </Text>
          <Box className="flex flex-row gap-4">
            <IconBrandTelegram color="white" />
            <IconBrandTiktok color="white" />
            <IconBrandInstagram color="white" />
            <IconBrandYoutube color="white" />
          </Box>
        </Box>
      </Box>
    </div>
  );
}
