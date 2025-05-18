import clsx from "clsx";

export interface NewsletterProps {
  data: PageSettingsNewsletter;
}

export function Newsletter({ data }: NewsletterProps) {
  return (
    <div className="flex flex-col gap-x-3 lg:items-center justify-center bg-white shadow-md rounded-[20px] p-3 lg:p-4">
      <h3
        className={clsx(
          "font-primary font-bold text-[32px] lg:text-2xl leading-[36px] text-main-color",
          "mb-1 lg:pb-3.5 lg:mb-2.5 lg:border-b-1 border-secondary-color"
        )}
      >
        {data.title}
      </h3>
      <p className="font-primary font-normal text-xs/2.25 text-main-color mb-3 lg:mb-4">
        {data.subtitle}
      </p>
      <input
        type="text"
        placeholder={data.email_placeholder ?? ""}
        className={clsx(
          "w-full h-4.5 px-3 mb-2 lg:mb-2.5",
          "text-xs/2.25 text-main-color placeholder:text-secondary-color! placeholder:italic",
          "rounded-[40px] border border-secondary-color focus:outline-none focus:border-main-color"
        )}
      />
      <button
        className={clsx(
          "font-primary font-bold text-main-color text-xs/2.25",
          "bg-highlight-color rounded-[40px] px-2 lg:px-4 py-1 w-full lg:mb-2.5"
        )}
      >
        {data.cta_label ?? ""}
      </button>
      <p className="font-primary font-normal text-main-color text-xs/2.25 max-lg:hidden">
        {data.description}
      </p>
    </div>
  );
}
