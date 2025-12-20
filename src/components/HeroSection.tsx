import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="text-center max-w-4xl mx-auto">
        {/* Main Headline */}
        <h1 className="opacity-0 animate-fade-in">
          <span className="block text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground">
            Mentorship.
          </span>
          <span className="block text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-forest mt-1">
            Matters.
          </span>
        </h1>

        {/* Subheadline - Serif font */}
        <p className="mt-8 text-xl md:text-2xl lg:text-3xl font-serif text-muted-foreground italic opacity-0 animate-fade-in animate-delay-100">
          Direct one on one mentorship with Medical Students
        </p>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in animate-delay-200">
          <Button variant="default" size="lg">
            Join Now
          </Button>
          <Button variant="secondary" size="lg">
            Our Instagram
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
