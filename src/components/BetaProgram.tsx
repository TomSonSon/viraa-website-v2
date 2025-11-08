import { Button } from "@/components/ui/button";
import { CheckCircle2, Clock, Gift, ArrowRight } from "lucide-react";

const BetaProgram = () => {
  const benefits = [
    {
      icon: CheckCircle2,
      title: "Early Alert System",
      description: "Get alerts when your data shows deviations from your normal patterns.",
    },
    {
      icon: Gift,
      title: "Early Access",
      description: "Be first to get recovery & stress insights.",
    },
    {
      icon: Clock,
      title: "Just 10 Seconds Weekly",
      description: "Quick check-in every Sunday. That's all it takes.",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
              Limited Beta Access
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Join the Beta Program
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Help us build the future of preventive health while getting early access to cutting-edge features
            </p>
          </div>

          <div className="bg-gradient-card rounded-3xl p-8 lg:p-12 shadow-soft mb-8 animate-scale-in">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center space-y-3">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-background/50">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-background/80 backdrop-blur rounded-2xl p-6 lg:p-8 space-y-4">
              <h3 className="text-xl font-semibold text-foreground">What You Get</h3>
              <ul className="space-y-3">
                {[
                  "Access to the beta for the next few months",
                  "Sunday check-in notifications (just 10 seconds)",
                  "Early insights into recovery & stress patterns",
                  "Advance warning when deviations in your wellbeing patterns are detected",
                  "Direct feedback channel to shape the product",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center animate-fade-in-up">
            <Button 
              variant="hero" 
              size="xl" 
              className="group"
              onClick={() => window.open('https://apps.apple.com/us/app/viraa/id6741229335', '_blank')}
            >
              Download & Join Beta
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <p className="mt-4 text-sm text-muted-foreground">
              Available for iOS devices with Apple Health
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BetaProgram;
