import Image from "next/image";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import dayjs from "dayjs";
import AdvancedFormat from "dayjs/plugin/advancedFormat";
import clsx from "clsx";

dayjs.extend(AdvancedFormat);

export interface BlogCardProps {
  data: BlogPost;
  className?: string;
  variant?: "horizontal" | "vertical";
  isFeatured?: boolean;
}

export function BlogCard({
  data,
  className,
  variant = "horizontal",
  isFeatured,
}: BlogCardProps) {
  const image = data?.imageConnection?.edges?.[0]?.node;
  const category = data?.categoryConnection?.edges?.[0]?.node;
  const author = data?.authorConnection?.edges?.[0]?.node;
  const authorImage = author?.profile_imageConnection?.edges?.[0]?.node;

  return (
    <div
      className={clsx(
        "bg-white shadow-md rounded-3xl flex",
        { "flex-col": variant === "vertical" },
        className
      )}
    >
      <section
        className={clsx("relative w-full", {
          "aspect-8/3": variant === "vertical",
          "aspect-square": variant === "horizontal",
        })}
      >
        <Image
          className="rounded-3xl object-cover"
          src={image?.url ?? ""}
          alt={image?.description ?? ""}
          fill={true}
        />
        <span
          className={clsx(
            "absolute top-2.25 left-1.5 lg:top-3 lg:left-4.5",
            "rounded-[40px] bg-main-color py-1 px-3 lg:px-4 min-w-4 lg:min-w-4.5",
            "font-primary font-bold text-xs/2.25 text-white uppercase"
          )}
        >
          {category?.title}
        </span>
      </section>
      <section className="pt-2.5 px-2.5 pb-3.75 lg:pt-3 lg:px-6 lg:pb-4.75">
        <div className="flex items-center justify-between mb-3 lg:mb-3.5">
          <span className="flex items-center gap-x-1.5 lg:gap-x-2">
            <Image
              className="rounded-full size-4 lg:size-6.25 object-center object-cover"
              src={authorImage?.url ?? ""}
              alt={authorImage?.description ?? ""}
              width={authorImage?.dimension?.width ?? 0}
              height={authorImage?.dimension?.height ?? 0}
            />
            <span className="font-primary font-normal text-sm/2.5 text-secondary-color">
              {author?.title}
            </span>
            <span className="font-primary font-normal text-sm/2.5 text-secondary-color">
              {dayjs(data?.published_date).format("MMMM Do, YYYY")}
            </span>
          </span>
          {isFeatured && (
            <span className="font-primary font-bold text-sm/2.5 text-red-400 tracking-[0.2em] uppercase">
              Coming in Hot!
            </span>
          )}
        </div>
        <h2 className="font-primary font-bold text-2xl/4.5 text-main-color mb-1.5 lg:mb-3">
          {data.title}
        </h2>
        <p className="font-primary font-normal text-sm/2.5 lg:text-base/3 text-gray-700 mb-2.25 lg:mb-5">
          {data.summary}
        </p>
        <a
          href={data.url ?? ""}
          className={clsx(
            "font-primary font-bold text-xs/2.25 text-highlight-color tracking-widest uppercase",
            "flex items-center gap-x-0.5 lg:gap-x-1"
          )}
        >
          <ArrowRightIcon className="size-3" />
          Read more
        </a>
      </section>
    </div>
  );
}
