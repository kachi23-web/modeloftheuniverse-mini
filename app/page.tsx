import HeroSection from "@/components/coming-soon/HeroSection";
import EmailCaptureForm from "@/components/coming-soon/EmailCaptureForm";
import SocialLinks from "@/components/coming-soon/SocialLinks";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-hero flex flex-col">
      <main
        aria-label="Coming soon content"
        className="flex-1 flex flex-col items-center justify-center"
      >
        <div className="max-w-[1400px] w-full mx-auto px-8 py-24 flex flex-col items-center gap-8">
          <header aria-label="Brand identity">
            <HeroSection />
          </header>
          <EmailCaptureForm />
        </div>
      </main>

      <SocialLinks />
    </div>
  );
}
