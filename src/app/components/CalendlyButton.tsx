"use client";

import { useRouter } from "next/navigation";

export default function CalendlyButton({
  className = "btn-gradient text-base",
}: {
  className?: string;
}) {
  const router = useRouter();

  return (
    <a
      href="/schedule"
      onClick={(e) => {
        e.preventDefault();
        router.push("/schedule");
      }}
      className={`${className} relative z-10 cursor-pointer`}
    >
      Schedule a Call
    </a>
  );
}
