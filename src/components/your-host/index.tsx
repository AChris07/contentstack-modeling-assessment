import Image from "next/image";
import Link from "next/link";
import { jsonToHtml } from "@contentstack/json-rte-serializer";

export interface YourHostProps {
  data: PageSettingsYourHost;
}

export function YourHost({ data }: YourHostProps) {
  const author = data?.authorConnection?.edges?.[0]?.node;
  const authorImage = author?.profile_imageConnection?.edges?.[0]?.node;

  const parsedBiography = jsonToHtml(author?.biography?.json, {
    customElementTypes: {
      p: (_attrs, child) => {
        return `<p class="font-primary font-normal text-xs leading-none">${child}</p>`;
      },
    },
  });

  return (
    <div className="flex lg:flex-col gap-x-3 items-center bg-white rounded-[20px] p-3 lg:p-4">
      <Image
        className="border-9 border-highlight-color rounded-full size-[95px] lg:size-[140px] lg:size-[140px] lg:mb-4"
        src={authorImage?.url ?? ""}
        alt={authorImage?.description ?? ""}
        width={authorImage?.dimension?.width ?? 0}
        height={authorImage?.dimension?.height ?? 0}
      />
      <div className="flex flex-col lg:items-center">
        <span className="font-primary font-bold text-xs/3 text-secondary-color uppercase tracking-[0.2em]">
          {data.title}
        </span>
        <h3 className="font-primary text-[26px] leading-4.5 mb-2 lg:pb-2 lg:mb-3 lg:border-b-2 border-secondary-color">
          {author?.title}
        </h3>
        <div
          className="text-main-color max-lg:hidden lg:mb-5"
          dangerouslySetInnerHTML={{ __html: parsedBiography }}
        />
        <Link
          href={data.call_to_action?.href ?? ""}
          className="font-primary font-bold text-main-color text-xs/2.25 text-center bg-highlight-color rounded-[40px] px-7 py-1 lg:mb-4 max-lg:w-full"
        >
          {data.call_to_action?.title}
        </Link>
        <div className="flex gap-x-2 max-lg:hidden">
          {author?.social_links?.map((socialLink, index) => {
            const icon = socialLink?.iconConnection?.edges?.[0]?.node;

            if (!socialLink || !icon) {
              return null;
            }

            return (
              <a
                key={index}
                href={socialLink?.link ?? ""}
                className="w-3 h-3 rounded-full flex items-center justify-center"
              >
                <Image
                  src={icon?.url ?? ""}
                  alt={icon?.description ?? ""}
                  width={icon?.dimension?.width ?? 0}
                  height={icon?.dimension?.height ?? 0}
                  className="text-white"
                />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
