import Image from "next/image";

export default function ProjectLogo({
  src,
  darkSrc,
  alt,
  className = "h-20 w-20",
}) {
  return (
    <div
      className={`relative flex shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-border/10 bg-[rgb(var(--color-surface)/0.6)] p-3 ${className}`}
    >
      {darkSrc ? (
        <>
          <Image
            src={src}
            alt={alt}
            width={96}
            height={96}
            className="logo-theme-light h-full w-full object-contain"
            loading="lazy"
          />
          <Image
            src={darkSrc}
            alt=""
            aria-hidden="true"
            width={96}
            height={96}
            className="logo-theme-dark h-full w-full object-contain"
            loading="lazy"
          />
        </>
      ) : (
        <Image
          src={src}
          alt={alt}
          width={96}
          height={96}
          className="h-full w-full object-contain"
          loading="lazy"
        />
      )}
    </div>
  );
}
