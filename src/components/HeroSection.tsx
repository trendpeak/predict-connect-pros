import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/hero-image.jpg";
import { BarChart3, Users, Zap, Shield, TrendingUp, Globe } from "lucide-react";

const HeroSection = () => {
  const features = [
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      description: "Advanced vibration analysis and predictive insights"
    },
    {
      icon: Users,
      title: "Global Community",
      description: "Connect with 10,000+ maintenance professionals"
    },
    {
      icon: Zap,
      title: "AI-Powered Predictions",
      description: "Machine learning algorithms for failure prediction"
    },
    {
      icon: Shield,
      title: "Prevent Downtime",
      description: "Reduce unplanned maintenance by up to 75%"
    }
  ];

  const stats = [
    { value: "10,000+", label: "Active Members" },
    { value: "50,000+", label: "Machines Monitored" },
    { value: "99.5%", label: "Prediction Accuracy" },
    { value: "75%", label: "Downtime Reduction" }
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Industrial maintenance facility"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Predict Failures
              <span className="block text-accent"> Before They Happen</span>
              <span className="block text-2xl lg:text-3xl font-normal text-primary-foreground/80 mt-2">
                – Together.
              </span>
            </h1>
            
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl">
              Join the world's largest community of maintenance professionals. Share sensor data, 
              collaborate on real machine cases, and leverage collective intelligence to prevent 
              costly equipment failures.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button variant="accent" size="lg" className="text-lg px-8 py-6">
                <Users className="w-5 h-5 mr-2" />
                Join the Community
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-background/10 backdrop-blur-sm border-primary-foreground/20 text-primary-foreground hover:bg-background/20">
                <TrendingUp className="w-5 h-5 mr-2" />
                See Real-Time Predictions
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-accent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-primary-foreground/70">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="p-6 bg-card/80 backdrop-blur-sm border-border/40 hover:bg-card/90 transition-all duration-300 hover:shadow-card hover:scale-105">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-12 lg:h-16"
          viewBox="0 0 1200 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 120L50 105C100 90 200 60 300 45C400 30 500 30 600 45C700 60 800 90 900 105C1000 120 1100 120 1150 120L1200 120V120H1150C1100 120 1000 120 900 120C800 120 700 120 600 120C500 120 400 120 300 120C200 120 100 120 50 120H0V120Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;