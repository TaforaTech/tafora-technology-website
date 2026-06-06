import Link from "next/link";

export default function CalendlyButton({
  className = "btn-gradient text-base",
}: {
  className?: string;
}) {
  return (
    <Link href="/schedule" className={className}>
      Schedule a Call
    </Link>
  );
}
