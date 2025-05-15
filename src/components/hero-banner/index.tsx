import Image from "next/image";
import { jsonToHtml } from "@contentstack/json-rte-serializer";

export interface HeroBannerProps {
  data: HeroBanner;
}

export function HeroBanner({ data }: HeroBannerProps) {
  const image = data?.imageConnection?.edges?.[0]?.node;

  const parsedTitle = jsonToHtml(data?.title?.json, {
    customElementTypes: {
      p: (_attrs, child) => {
        return `<p${_attrs}>${child}</p>`;
      },
    },
    customTextWrapper: {
      bold: (child) => {
        return `<strong class="bg-linear-to-r from-highlight-color to-indigo-400 text-transparent bg-clip-text">${child}</strong>`;
      },
    },
  });

  return (
    <div className="relative h-[560px] w-full rounded-3xl overflow-hidden bg-light-color mb-4 lg:mb-9">
      <Image
        className="object-cover"
        src={image?.url ?? ""}
        alt={image?.description ?? ""}
        fill={true}
      />
      <div className="absolute w-full px-6 lg:px-12 max-lg:text-center bottom-[92px] lg:bottom-[140px]">
        {data?.eyebrow ? (
          <span className="font-primary font-bold text-xs text-white leading-none uppercase tracking-widest">
            {data?.eyebrow}
          </span>
        ) : undefined}
        {data?.title ? (
          <h1
            className="font-primary font-normal text-3xl lg:text-5xl text-white leading-none mt-2 lg:mt-4"
            dangerouslySetInnerHTML={{ __html: parsedTitle }}
          />
        ) : undefined}
        {data?.description ? (
          <p className="font-primary font-normal text-sm lg:text-xl text-white leading-none mt-2 lg:mt-4">
            {data?.description}
          </p>
        ) : undefined}
      </div>
    </div>
  );
}
