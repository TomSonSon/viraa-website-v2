import { Watch, Smartphone } from "lucide-react";

const WearableCompatibility = () => {
  const wearables = [
    "Apple Watch",
    "Oura Ring",
    "Whoop",
    "Fitbit",
    "Garmin",
    "Samsung Galaxy Watch",
    "Polar",
    "And more...",
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-soft">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-3 mb-6">
              <Watch className="w-8 h-8 text-primary" />
              <Smartphone className="w-8 h-8 text-secondary" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Works With Your Wearable
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Viraa seamlessly integrates with any device that syncs to Apple Health. 
              No matter what you wear, we've got you covered.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-scale-in">
            {wearables.map((wearable, index) => (
              <div
                key={index}
                className="bg-card/50 backdrop-blur border border-border/50 rounded-xl p-4 hover:shadow-soft transition-all duration-300 hover:scale-105"
              >
                <p className="font-medium text-foreground">{wearable}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-primary/5 border border-primary/20 rounded-2xl animate-fade-in-up">
            <p className="text-foreground font-medium mb-2">
              Powered by Apple Health
            </p>
            <p className="text-sm text-muted-foreground">
              Your health data stays private and secure. Viraa only accesses data you explicitly share through Apple Health.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WearableCompatibility;
