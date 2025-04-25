import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Header } from "@/components/header";
import { headerQuery } from "@/graphql/gql";
import { getClient } from "@/services/contentstack";
import "./globals.css";

const poppins = Poppins({
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Lux Ventus",
  description: "Lux Ventus description",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data } = await getClient().query({
    query: headerQuery,
  });
  const headerData = data.all_header.items[0] as Maybe<Header>;

  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        {headerData && <Header data={headerData} />}
        {children}
      </body>
    </html>
  );
}
