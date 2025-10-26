import { Activity, Brain, Bell } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Activity,
      title: "Connect Your Wearable",
      description: "Viraa works with any device that syncs with Apple Health - Apple Watch, Oura Ring, Whoop, Fitbit, and more.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Brain,
      title: "AI Analyzes Your Data",
      description: "Our advanced algorithms monitor subtle changes in heart rate variability, sleep patterns, and activity levels.",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      icon: Bell,
      title: "Get Early Warnings",
      description: "Receive notifications 1-2 days before disruptions to your wellbeing appear, plus personalized guidance recommendations.",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            How Viraa Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple, automatic, and requires just 10 seconds of your time each week
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-center space-y-4">
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl ${step.bgColor} transition-transform group-hover:scale-110 group-hover:shadow-glow`}>
                  <step.icon className={`w-10 h-10 ${step.color}`} />
                </div>
                
                <h3 className="text-xl font-semibold">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
              
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-muted to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
