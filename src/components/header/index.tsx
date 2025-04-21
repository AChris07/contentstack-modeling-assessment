import Image from "next/image";
import { HamburgerMenuIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";

export interface HeaderProps {
  data: Header;
}

export function Header({ data }: HeaderProps) {
  const logo = data.logo?.logo_imageConnection?.edges?.[0]?.node;
  const navigationItems = data.navigation_list
    ?.map((listItem) => listItem?.navigation_itemConnection?.edges?.[0]?.node)
    .filter(Boolean);

  return (
    <header className="flex items-center justify-between px-3 py-2 lg:px-10.5 lg:pt-4.5 lg:pb-6">
      <a href={data.logo?.logo_link ?? undefined}>
        <Image
          className="max-h-[32px] lg:max-h-[48px] w-fit object-contain"
          src={logo?.url || ""}
          alt={logo?.description || ""}
          width={logo?.dimension?.width || 0}
          height={logo?.dimension?.height || 0}
        />
      </a>
      <ul className="flex items-center justify-center shrink-0 gap-4 xl:gap-8 max-lg:hidden">
        {navigationItems?.map((navItem, idx) => (
          <li key={idx}>
            <a
              className="font-primary font-bold text-main-color text-xs lg:text-sm leading-none"
              href={navItem?.url ?? ""}
            >
              {navItem?.title}
            </a>
          </li>
        ))}
        {data?.call_to_action?.href ? (
          <li>
            <a
              className="font-primary font-bold text-main-color text-xs lg:text-sm leading-none bg-highlight-color rounded-[40px] px-2 py-0.5 lg:px-4 lg:py-1"
              href={data?.call_to_action?.href}
            >
              {data?.call_to_action?.title}
            </a>
          </li>
        ) : undefined}
        <li>
          <button className="w-6 h-6 bg-highlight-color rounded-full flex items-center justify-center">
            <MagnifyingGlassIcon
              className="w-2 h-2 scale-150 text-main-color"
              height={16}
              width={16}
            />
          </button>
        </li>
      </ul>
      <button className="w-7 h-7 bg-highlight-color rounded-full flex items-center justify-center lg:hidden">
        <HamburgerMenuIcon
          className="w-3 h-2 scale-150 text-main-color"
          height={16}
          width={24}
        />
      </button>
    </header>
  );
}
