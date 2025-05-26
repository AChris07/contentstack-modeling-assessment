import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { headerQuery, footerQuery } from "@/graphql/gql";
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
  const [headerItemsData, footerItemsData] = (
    await Promise.all([
      getClient().query({
        query: headerQuery,
      }),
      getClient().query({
        query: footerQuery,
      }),
    ])
  ).map((res) => res.data);
  const headerData = headerItemsData.all_header.items[0] as Maybe<Header>;
  const footerData = footerItemsData.all_footer.items[0] as Maybe<Footer>;

  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        {headerData && <Header data={headerData} />}
        {children}
        {footerData && <Footer data={footerData} />}
      </body>
    </html>
  );
}
