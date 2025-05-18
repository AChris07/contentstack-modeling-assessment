import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import clsx from "clsx";

export interface TopRatedProps {
  data: PageSettingsTopRated;
}

export function TopRated({ data }: TopRatedProps) {
  const posts =
    data?.postsConnection?.edges
      ?.map((edge) => edge?.node)
      ?.filter((node) => !!node) ?? [];

  return (
    <div className="bg-white rounded-[20px] py-5 px-3 shadow-md max-lg:hidden">
      <h2 className="font-primary font-bold text-2xl/4 text-primary-color pb-[28px] border-b-1 border-secondary-color">
        Top Rated
      </h2>
      {posts.map((post, index) => {
        const image = post?.imageConnection?.edges?.[0]?.node;

        return (
          <div
            key={index}
            className="flex align-items items-center gap-x-3 py-3 not-last:border-b-1 border-secondary-color"
          >
            {image && (
              <Image
                className="aspect-square w-10.5 rounded-xl object-cover"
                src={image?.url ?? ""}
                alt={image?.description ?? ""}
                width={image?.dimension?.width ?? 0}
                height={image?.dimension?.height ?? 0}
              />
            )}
            <div className="flex flex-col align-items gap-y-1">
              <h3 className="font-primary font-bold text-base/3 text-main-color">
                {post.title}
              </h3>
              <Link
                href={post.url ?? ""}
                className={clsx(
                  "font-primary font-bold text-xs/2.25 text-highlight-color tracking-widest uppercase",
                  "flex items-center gap-x-0.5 lg:gap-x-1"
                )}
              >
                <ArrowRightIcon className="size-3" />
                Read more
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
