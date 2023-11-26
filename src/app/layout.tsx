import "@/styles/globals.css";

import { Inter } from "next/font/google";
import { cookies } from "next/headers";

import { TRPCReactProvider } from "@/trpc/react";
import { MantineProvider, type MantineThemeOverride } from "@mantine/core";
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import { Notifications } from "@mantine/notifications";

import { theme as baseTheme} from "@/config/theme";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Trust Educational and Visa Consultancy",
  description: "Trust Educational and Visa Consultancy",
  icons: [{ rel: "icon", url: "/logo.webp" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme: Partial<MantineThemeOverride> = baseTheme;
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <TRPCReactProvider cookies={cookies().toString()}>
          <MantineProvider theme={theme} defaultColorScheme="light">
          {children}
          <Notifications/>
          </MantineProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
