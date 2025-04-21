import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { getHeader } from "@/graphql/queries";
import { Header } from "@/components/header";
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
  const header = await getHeader();

  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <Header data={header} />
        {children}
      </body>
    </html>
  );
}
