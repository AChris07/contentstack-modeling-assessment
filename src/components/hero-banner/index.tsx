import Image from "next/image";
import clsx from "clsx";
import { jsonToHtml } from "@contentstack/json-rte-serializer";

export interface HeroBannerProps {
  data: HeroBanner;
  topics?: number;
}

export function HeroBanner({ data, topics }: HeroBannerProps) {
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
      {topics ? (
        <div
          className={clsx(
            "rounded-[40px] bg-white py-0.5 px-1 pl-3",
            "absolute bottom-[82px] max-lg:left-[50%] max-lg:-translate-1/2 lg:bottom-[42px] lg:right-[24px] w-[224px]",
            "flex items-center justify-between"
          )}
        >
          <span className="font-primary font-bold text-base/3 text-primary-color uppercase">
            Topics
          </span>
          <span className="flex items-center justify-center rounded-full bg-highlight-color font-primary font-bold text-2xl leading-none w-5.5 h-5.5">
            {topics}
          </span>
        </div>
      ) : undefined}
    </div>
  );
}
