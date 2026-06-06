export default function CalendlyButton({
  className = "btn-gradient text-base",
}: {
  className?: string;
}) {
  return (
    <a
      href="/schedule"
      target="_blank"
      rel="noopener noreferrer"
      className={`${className} relative z-10 cursor-pointer`}
    >
      Schedule a Call
    </a>
  );
}
