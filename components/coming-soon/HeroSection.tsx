import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-gradient-hero w-full flex items-center justify-center py-24 px-8">
      <div className="bg-card shadow-elegant rounded-lg max-w-2xl w-full flex flex-col items-center text-center gap-6 px-8 py-12">
        {/* Logo */}
        <div className="w-full flex justify-center">
          <Image
            src="/logo-modelofuniverse.png"
            alt="Model of the Universe 2026 logo"
            width={320}
            height={320}
            className="w-[180px] max-w-[320px] h-auto"
            priority
          />
        </div>

        {/* Brand name */}
        <h1 className="font-playfair text-4xl md:text-7xl font-bold text-foreground leading-tight">
          Model of the Universe 2027
        </h1>

        {/* Coming Soon */}
        <h2 className="font-playfair text-5xl font-bold text-primary">
          Coming Soon
        </h2>

        {/* Founder credit */}
        <div className="flex flex-col items-center gap-1">
          <span className="font-playfair text-2xl font-bold text-foreground">
            Mohamed Farrag
          </span>
          <span className="text-lg text-muted-foreground">
            Founder &amp; President
          </span>
          <span className="text-base text-accent">
            Model of the Universe Competition
          </span>
        </div>
      </div>
    </section>
  );
}
