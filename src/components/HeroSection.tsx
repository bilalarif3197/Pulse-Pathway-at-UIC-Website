import { Button } from "@/components/ui/button";

const roles = ["Medical Students", "Physician Assistant Students"];

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="text-center max-w-5xl mx-auto">
        {/* Main Headline - Large bold Inter with animated role */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight opacity-0 animate-fade-in">
          <span className="text-foreground">Direct one on one mentorship with</span>
          <br className="hidden sm:block" />
          <span className="inline-block h-[1.15em] overflow-hidden align-bottom">
            <span className="flex flex-col animate-text-slide">
              {[...roles, ...roles].map((role, index) => (
                <span 
                  key={index} 
                  className="h-[1.15em] flex items-center justify-center text-forest"
                >
                  {role}
                </span>
              ))}
            </span>
          </span>
        </h1>

        {/* Subheadline - Futura/Jost, smaller, grey */}
        <p className="mt-6 text-xl md:text-2xl font-display text-muted-foreground opacity-0 animate-fade-in animate-delay-100">
          Mentorship. Matters.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in animate-delay-200">
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
