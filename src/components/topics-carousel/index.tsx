import Image from "next/image";

import { TopicsCarouselClient } from "./client";

interface TopicSlide {
  title: string;
  image?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  cta?: {
    label: string;
  };
}

export interface TopicsCarouselProps {
  data: LandingPageTopicsCarousel;
}

export function TopicsCarousel({ data }: TopicsCarouselProps) {
  const topics = data?.topicsConnection?.edges?.reduce<TopicSlide[]>(
    (arr, edge) => {
      const node = edge?.node;
      const image = node?.iconConnection?.edges?.[0]?.node;

      if (!node || !image) {
        return arr;
      }

      return [
        ...arr,
        {
          title: node.title ?? "",
          image: image?.url
            ? {
                src: image.url,
                alt: image.description ?? "",
                width: image.dimension?.width ?? 0,
                height: image.dimension?.height ?? 0,
              }
            : undefined,
          cta: data?.cta_label
            ? {
                label: data?.cta_label ?? "",
              }
            : undefined,
        },
      ];
    },
    []
  );

  if (!topics?.length) {
    return null;
  }

  return (
    <div className="mb-4 lg:mb-9">
      <TopicsCarouselClient title={data?.title ?? ""}>
        {topics.map((topic, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-y-6 bg-white rounded-2xl pt-6 px-3 pb-3 lg:px-[30px] lg:pb-[30px]"
          >
            {topic.image ? (
              <Image
                src={topic.image.src}
                alt={topic.image.alt}
                width={topic.image.width}
                height={topic.image.height}
                className="w-full h-auto max-w-[100px]"
              />
            ) : undefined}
            <h3 className="font-primary font-bold text-base lg:text-xl text-center">
              {topic.title}
            </h3>
            {topic.cta ? (
              <button className="font-primary font-bold text-main-color text-xs/2.25 bg-highlight-color rounded-[40px] px-2 lg:px-4 py-1 w-full">
                {topic.cta.label}
              </button>
            ) : undefined}
          </div>
        ))}
      </TopicsCarouselClient>
    </div>
  );
}
