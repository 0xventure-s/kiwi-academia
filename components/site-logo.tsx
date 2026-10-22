import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

interface SiteLogoProps {
  className?: string;
  href?: string;
  compact?: boolean;
}

export const SiteLogo = ({
  className,
  href = "/",
  compact = false,
}: SiteLogoProps) => {
  return (
    <Link
      href={href}
      className={cn("inline-flex items-center", className)}
      aria-label="Kiwi Hub"
    >
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/b9136c57-cd17-4939-baab-9e35fe6c5b3b-De28NDuADjDgEhVscrj3SfRsOjGcj4.png"
        alt="Kiwi Hub"
        width={compact ? 150 : 220}
        height={compact ? 52 : 72}
        priority
        className={cn(
          "h-auto object-contain",
          compact ? "w-[150px]" : "w-[220px]",
          "dark:hidden",
        )}
      />
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/f783116f-646e-4291-804c-82a4584acc28-IhJfKRUgyoEhgpWD8vpX2kRqLD6Gg4.png"
        alt=""
        width={compact ? 150 : 220}
        height={compact ? 52 : 72}
        priority
        aria-hidden="true"
        className={cn(
          "hidden h-auto object-contain dark:block",
          compact ? "w-[150px]" : "w-[220px]",
        )}
      />
    </Link>
  );
};
