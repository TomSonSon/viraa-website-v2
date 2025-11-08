import { AlertTriangle, LineChart, Heart, MessageCircle, Brain, Activity } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: AlertTriangle,
      title: "Early Sickness Detection",
      description: "Get notified 1-2 days in advance of disruptions to your wellbeing. Our AI detects subtle deviations in your health patterns that may affect how you feel.",
      gradient: "from-primary to-primary",
    },
    {
      icon: MessageCircle,
      title: "AI Health Assistant",
      description: "Chat with Viraa AI to get instant insights about your health data, ask questions about your trends, and receive personalized recommendations.",
      gradient: "from-secondary to-purple-400",
    },
    {
      icon: Brain,
      title: "Stress & Sleep Monitoring",
      description: "Track your stress levels and sleep quality with real-time scoring, visual indicators, and detailed analysis of what affects your rest.",
      gradient: "from-accent to-emerald-400",
    },
    {
      icon: LineChart,
      title: "Deep Health Insights",
      description: "Dive deep into any metric with historical trends, baseline comparisons, and sick day detection to understand your health patterns.",
      gradient: "from-primary to-primary",
    },
    {
      icon: Activity,
      title: "Comprehensive Tracking",
      description: "Monitor heart rate variability, exercise time, active energy, and all vital health metrics from your wearable in one place.",
      gradient: "from-secondary to-purple-400",
    },
    {
      icon: Heart,
      title: "Personalized Guidance",
      description: "Receive tailored recommendations to maintain your wellbeing and support your body based on your current health patterns and trends.",
      gradient: "from-accent to-emerald-400",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-soft">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Powerful Features
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to stay ahead of illness and optimize your health
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-glow transition-all duration-300 border-border/50 bg-card/50 backdrop-blur animate-scale-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="p-8 space-y-4">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-semibold">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
