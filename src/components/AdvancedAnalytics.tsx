import { useState, useMemo } from "react";
import { TrendingUp, BarChart3, Calendar, TrendingDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  ComposedChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Area,
  ReferenceLine,
} from "recharts";

const AdvancedAnalytics = () => {
  const [timeRange, setTimeRange] = useState<"Day" | "Week" | "Month">("Week");

  // Baseline heart rate (between 60-100 bpm) - using 79 bpm
  const baselineValue = 79;

  // Simple seeded random function for deterministic data generation
  const seededRandom = (seed: number) => {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
  };

  // Generate realistic 6-month heart rate data
  // This simulates a real patient's heart rate with natural variations, circadian rhythms, and illness periods
  const generateSixMonthsData = () => {
    const daysInSixMonths = 180;
    const dailyData: Array<{ date: Date; average: number; isSick: boolean }> = [];
    
    // Define sick periods (day indices)
    const sickPeriods = [
      { start: 15, end: 18 },   // Early period
      { start: 52, end: 56 },   // Mid period
      { start: 118, end: 123 }, // Later period
      { start: 174, end: 179 }, // Recent period (last 6 days, visible in week view)
    ];
    
    // Check if a day is in a sick period
    const isSickDay = (dayIndex: number): boolean => {
      return sickPeriods.some(period => dayIndex >= period.start && dayIndex <= period.end);
    };
    
    // Generate data for each day
    for (let i = 0; i < daysInSixMonths; i++) {
      const date = new Date();
      date.setDate(date.getDate() - (daysInSixMonths - i));
      
      const isSick = isSickDay(i);
      const dayOfWeek = date.getDay();
      const weekOfMonth = Math.floor(i / 7);
      const monthIndex = date.getMonth();
      
      // Base heart rate centered around baseline
      const baseHR = baselineValue; // 79 bpm
      
      // More pronounced variation over 6 months (slow wave pattern) - keeps it interesting, not a straight line
      // Creates multiple cycles over the 6-month period for more visual interest
      const longTermVariation = Math.sin((i / daysInSixMonths) * Math.PI * 4) * 2.5;
      
      // More noticeable weekly pattern (higher on weekdays, lower on weekends)
      const weeklyVariation = dayOfWeek >= 1 && dayOfWeek <= 5 ? 1.5 : -1.5;
      
      // More daily variation using seeded random - centered around 0 but with more spread
      const randomVariation = (seededRandom(i * 17) - 0.5) * 3.5;
      
      // Sick day elevation (deterministic) - only applies during sick periods
      const sickRandom = seededRandom(i * 23);
      const sickElevation = isSick ? 7 + (sickRandom * 3) : 0; // 7-10 bpm elevation when sick
      
      // More noticeable stress periods (occasional elevation)
      const stressFactor = (weekOfMonth % 8 === 3 || weekOfMonth % 8 === 6) ? 2.5 : 0;
      
      // More pronounced monthly variation (seasonal changes)
      const monthlyWave = Math.sin((i / 30) * Math.PI * 2) * 2;
      
      // Additional short-term variation for more dynamic patterns
      const shortTermWave = Math.sin((i / 7) * Math.PI * 2) * 1.5;
      
      const average = Math.round(
        baseHR + 
        longTermVariation +
        weeklyVariation + 
        randomVariation + 
        sickElevation + 
        stressFactor + 
        monthlyWave +
        shortTermWave
      );
      
      // Clamp to realistic range around baseline (75-84 for normal, 86-94 for sick days)
      const clampedHR = Math.max(75, Math.min(94, average));
      
      dailyData.push({
        date: new Date(date),
        average: clampedHR,
        isSick,
      });
    }
    
    return dailyData;
  };

  // Generate hourly data for a single day (last 24 hours)
  const generateDayData = () => {
    const hours = [0, 4, 8, 12, 16, 20];
    const dayLabels = ["00:00", "04:00", "08:00", "12:00", "16:00", "20:00"];
    const fullDayLabels = ["12:00 AM", "4:00 AM", "8:00 AM", "12:00 PM", "4:00 PM", "8:00 PM"];
    
    // More pronounced circadian pattern centered around baseline (79)
    // Lower at night, higher during day with clear variation
    const circadianOffsets = [-4, -5, -2, 3, 4, -1]; // More noticeable offsets from baseline
    
    return hours.map((hour, index) => {
      const baseHR = baselineValue + circadianOffsets[index];
      // Use seeded random for consistency - more variation
      const variation = (seededRandom(index * 31) - 0.5) * 2.5; // More variation
      const average = Math.round(baseHR + variation);
      
      return {
        day: dayLabels[index],
        fullDay: fullDayLabels[index],
        average: Math.max(74, Math.min(84, average)),
        baseline: baselineValue,
        isSick: false,
        sickAreaTop: null,
      };
    });
  };

  // Generate and memoize data to keep it consistent across renders
  const sixMonthsDailyData = useMemo(() => generateSixMonthsData(), []);
  const dayData = useMemo(() => generateDayData(), []);

  // Get week data (last 7 days)
  const weekData = useMemo(() => {
    const last7Days = sixMonthsDailyData.slice(-7);
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const fullDayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    return last7Days.map((data, index) => {
      const dayIndex = (last7Days[0].date.getDay() + index) % 7;
      return {
        day: dayNames[dayIndex],
        fullDay: fullDayNames[dayIndex],
        average: data.average,
        baseline: baselineValue,
        isSick: data.isSick,
        sickAreaTop: data.isSick ? 96 : null,
      };
    });
  }, [sixMonthsDailyData]);

  // Get month data (last 4 weeks, averaged)
  const monthData = useMemo(() => {
    const last28Days = sixMonthsDailyData.slice(-28);
    const weeks = [];
    
    for (let i = 0; i < 4; i++) {
      const weekDays = last28Days.slice(i * 7, (i + 1) * 7);
      const weekAverage = Math.round(
        weekDays.reduce((sum, day) => sum + day.average, 0) / weekDays.length
      );
      const hasSickDays = weekDays.some(day => day.isSick);
      
      weeks.push({
        day: `W${i + 1}`,
        fullDay: `Week ${i + 1}`,
        average: weekAverage,
        baseline: baselineValue,
        isSick: hasSickDays,
        sickAreaTop: hasSickDays ? 105 : null,
      });
    }
    
    return weeks;
  }, [sixMonthsDailyData]);

  // Get 6 months data (monthly averages)
  const sixMonthsData = useMemo(() => {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
    const fullMonthNames = ["January", "February", "March", "April", "May", "June"];
    const months = [];
    
    const daysPerMonth = Math.floor(sixMonthsDailyData.length / 6);
    
    for (let i = 0; i < 6; i++) {
      const monthDays = sixMonthsDailyData.slice(i * daysPerMonth, (i + 1) * daysPerMonth);
      const monthAverage = Math.round(
        monthDays.reduce((sum, day) => sum + day.average, 0) / monthDays.length
      );
      const hasSickDays = monthDays.some(day => day.isSick);
      
      months.push({
        day: monthNames[i],
        fullDay: fullMonthNames[i],
        average: monthAverage,
        baseline: baselineValue,
        isSick: hasSickDays,
        sickAreaTop: hasSickDays ? 105 : null,
      });
    }
    
    return months;
  }, [sixMonthsDailyData]);

  // Get data based on selected time range
  const chartData = useMemo(() => {
    switch (timeRange) {
      case "Day":
        return dayData;
      case "Week":
        return weekData;
      case "Month":
        return monthData;
      default:
        return weekData;
    }
  }, [timeRange, dayData, weekData, monthData]);

  const chartConfig = {
    average: {
      label: "Average",
      color: "hsl(var(--chart-1))",
    },
    baseline: {
      label: "Baseline",
      color: "hsl(var(--muted-foreground))",
    },
  };

  // Current value is fixed at 94 bpm (does not change with timeframe)
  const currentValue = 94;
  const percentageChange = ((currentValue - baselineValue) / baselineValue) * 100;

  const analyticsFeatures = [
    {
      icon: TrendingUp,
      title: "Historical Trends",
      description: "View your health data over time with interactive charts showing daily, weekly, monthly, and 6-month views.",
      gradient: "from-primary to-primary",
    },
    {
      icon: BarChart3,
      title: "Baseline Comparison",
      description: "Compare your current metrics against your 4-week baseline to identify significant deviations and patterns.",
      gradient: "from-secondary to-purple-400",
    },
    {
      icon: Calendar,
      title: "Sick Day Detection",
      description: "Automatically identifies periods when you were unwell based on multiple health signals and patterns.",
      gradient: "from-accent to-emerald-400",
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

                {/* Interactive chart visualization */}
                <div className="bg-background/50 rounded-xl p-6 sm:p-8 space-y-6">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <h4 className="text-lg font-semibold">Historical Trend</h4>
                    <div className="flex gap-2">
                      {(["Day", "Week", "Month"] as const).map((range) => (
                        <Button
                          key={range}
                          variant={timeRange === range ? "default" : "outline"}
                          size="sm"
                          onClick={() => setTimeRange(range)}
                          className="h-8 px-3 text-xs"
                        >
                          {range}
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* Composed Chart with Area and Line */}
                  <ChartContainer config={chartConfig} className="h-64 w-full">
                    <ComposedChart data={chartData} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
                      <defs>
                        <linearGradient id="sickAreaGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#fce7f3" stopOpacity={0.3} />
                          <stop offset="100%" stopColor="#fce7f3" stopOpacity={0.05} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--muted))" opacity={0.3} />
                      <XAxis 
                        dataKey="day" 
                        tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                        axisLine={{ stroke: "hsl(var(--border))" }}
                      />
                      <YAxis 
                        domain={[72, 96]}
                        ticks={[74, 76, 79, 82, 85, 88, 91, 94]}
                        tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                        axisLine={{ stroke: "hsl(var(--border))" }}
                        label={{ value: "bpm", angle: -90, position: "insideLeft", fill: "hsl(var(--muted-foreground))" }}
                      />
                      <ChartTooltip 
                        content={({ active, payload, label }) => {
                          if (!active || !payload || !payload.length) return null;
                          
                          // Filter out sickAreaTop from payload
                          const filteredPayload = payload.filter(item => item.dataKey !== "sickAreaTop");
                          
                          // Find the full day name from the data
                          const dataPoint = chartData.find(d => d.day === label);
                          const fullDayName = dataPoint?.fullDay || label;
                          
                          if (!filteredPayload.length) return null;
                          
                          return (
                            <ChartTooltipContent
                              payload={filteredPayload}
                              label={fullDayName}
                              formatter={(value: number) => [`${value} bpm`, "Average"]}
                            />
                          );
                        }}
                      />
                      
                      {/* Sick days area shading (background) - fills from domain min (72) to 96 for sick days */}
                      <Area
                        type="monotone"
                        dataKey="sickAreaTop"
                        fill="url(#sickAreaGradient)"
                        stroke="none"
                        connectNulls={false}
                        isAnimationActive={false}
                      />
                      
                      {/* Baseline line (dashed grey) */}
                      <ReferenceLine 
                        y={baselineValue} 
                        stroke="hsl(var(--muted-foreground))" 
                        strokeDasharray="5 5"
                        strokeWidth={2}
                      />
                      
                      {/* Average line (solid blue) */}
                      <Line
                        type="monotone"
                        dataKey="average"
                        stroke="hsl(var(--primary))"
                        strokeWidth={2}
                        dot={false}
                        activeDot={{ r: 4, fill: "hsl(var(--primary))" }}
                      />
                    </ComposedChart>
                  </ChartContainer>

                  {/* Legend */}
                  <div className="flex items-center justify-center gap-6 text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-0.5 bg-primary"></div>
                      <span className="text-muted-foreground">Average</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-0.5 border-t-2 border-dashed border-muted-foreground"></div>
                      <span className="text-muted-foreground">Baseline</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-pink-200/40 rounded"></div>
                      <span className="text-muted-foreground">Sick Days</span>
                    </div>
                  </div>
                </div>

                {/* Comparison to Baseline Section */}
                <Card className="bg-background/50 border-border/50">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-lg font-semibold mb-1">Comparison to Baseline</h4>
                          <p className="text-sm text-muted-foreground">Current vs 4-week baseline</p>
                        </div>
                        <div className={`flex items-center gap-2 ${percentageChange >= 0 ? 'text-blue-600' : 'text-red-600'}`}>
                          {percentageChange >= 0 ? (
                            <TrendingUp className="w-5 h-5" />
                          ) : (
                            <TrendingDown className="w-5 h-5" />
                          )}
                          <span className="font-semibold">{Math.abs(percentageChange).toFixed(1)}%</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">Current</p>
                          <p className="text-2xl font-bold">{currentValue} bpm</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">Baseline</p>
                          <p className="text-2xl font-bold">{baselineValue} bpm</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AdvancedAnalytics;
