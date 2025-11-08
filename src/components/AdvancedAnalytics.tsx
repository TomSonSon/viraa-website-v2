import { TrendingUp, BarChart3, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AdvancedAnalytics = () => {
  const analyticsFeatures = [
    {
      icon: TrendingUp,
      title: "Historical Trends",
      description: "View your health data over time with interactive charts showing daily, weekly, monthly, and 6-month views.",
    },
    {
      icon: BarChart3,
      title: "Baseline Comparison",
      description: "Compare your current metrics against your 4-week baseline to identify significant deviations and patterns.",
    },
    {
      icon: Calendar,
      title: "Sick Day Detection",
      description: "Automatically identifies periods when you were unwell based on multiple health signals and patterns.",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Advanced Health Analytics
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dive deep into your health data with powerful visualization tools and intelligent analysis
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {analyticsFeatures.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-glow transition-all duration-300 border-border/50 bg-card/50 backdrop-blur animate-scale-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="p-8 space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-primary group-hover:scale-110 transition-transform">
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

        {/* Visual showcase */}
        <div className="relative max-w-5xl mx-auto">
          <Card className="overflow-hidden bg-gradient-card border-border/50">
            <CardContent className="p-8 sm:p-12">
              <div className="space-y-8">
                <div className="text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 mb-4">
                    <BarChart3 className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold">
                    Every Metric, Every Detail
                  </h3>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Access comprehensive analytics for all your health metrics including heart rate, HRV, 
                    sleep quality, exercise time, stress levels, and more. Track trends, spot patterns, 
                    and understand what impacts your wellbeing.
                  </p>
                </div>

                {/* Mock chart visualization */}
                <div className="bg-background/50 rounded-xl p-6 sm:p-8 space-y-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-muted-foreground">Sample Data Visualization</span>
                    <div className="flex gap-4 text-xs">
                      <span className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-primary"></div>
                        Average
                      </span>
                      <span className="flex items-center gap-2">
                        <div className="w-3 h-3 border-2 border-dashed border-muted-foreground"></div>
                        Baseline
                      </span>
                      <span className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-accent-red/30"></div>
                        Sick Days
                      </span>
                    </div>
                  </div>
                  
                  {/* Simple chart representation */}
                  <div className="relative h-48 flex items-end justify-around gap-2">
                    {[65, 45, 80, 50, 75, 60, 85].map((height, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-2">
                        <div 
                          className="w-full bg-gradient-to-t from-primary to-primary-glow rounded-t-lg transition-all hover:scale-105"
                          style={{ height: `${height}%` }}
                        ></div>
                        <span className="text-xs text-muted-foreground">
                          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AdvancedAnalytics;
