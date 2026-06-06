import Navbar from "../components/Navbar";

export default function SchedulePage() {
  return (
    <>
      <Navbar />
      <main
        className="fixed inset-0 pt-16"
        style={{ background: "#050508" }}
      >
        <iframe
          src="https://calendly.com/info-tafora/new-meeting?hide_event_type_details=1&hide_gdpr_banner=1"
          className="w-full h-full"
          style={{ border: "none" }}
        />
      </main>
    </>
  );
}
