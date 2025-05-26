import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

export interface FooterProps {
  data: Footer;
}

export function Footer({ data }: FooterProps) {
  const logo = data.logo?.logo_imageConnection?.edges?.[0]?.node;

  return (
    <footer className="bg-white rounded-t-[40px] mt-9 lg:mt-10 pt-10 lg:pt-11 px-3 lg:px-11 pb-6 lg:pb-4.5">
      <div
        className={clsx(
          "flex max-lg:flex-col gap-y-8 justify-center lg:justify-between items-center",
          "pb-6 lg:pb-10.5 border-b-1 border-secondary-color"
        )}
      >
        <Link href={data.logo?.logo_link ?? ""}>
          <Image
            className="max-h-[32px] lg:max-h-[48px] w-fit object-contain"
            src={logo?.url || ""}
            alt={logo?.description || ""}
            width={logo?.dimension?.width || 0}
            height={logo?.dimension?.height || 0}
          />
        </Link>
        <div className="flex max-lg:flex-col gap-4 justify-center items-center">
          {data.subtitle ? (
            <h3 className="font-primary font-bold text-2xl/[42px] text-primary-color">
              {data.subtitle}
            </h3>
          ) : undefined}
          <div className="flex gap-3 items-center">
            {data.social_links?.map((socialLink, index) => {
              const icon = socialLink?.iconConnection?.edges?.[0]?.node;

              if (!socialLink || !icon) {
                return null;
              }

              return (
                <a
                  key={index}
                  href={socialLink?.link ?? ""}
                  className="w-6 h-6 lg:w-4 lg:h-4 rounded-full flex items-center justify-center"
                >
                  <Image
                    src={icon?.url ?? ""}
                    alt={icon?.description ?? ""}
                    width={icon?.dimension?.width ?? 0}
                    height={icon?.dimension?.height ?? 0}
                    className="w-full object-contain text-white"
                  />
                </a>
              );
            })}
          </div>
        </div>
      </div>
      {data.copyright ? (
        <p className="font-primary font-bold text-sm/3 text-primary-color max-lg:text-center mt-4.5">
          {data.copyright}
        </p>
      ) : undefined}
    </footer>
  );
}
