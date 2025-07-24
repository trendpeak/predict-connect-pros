import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Upload, 
  MessageSquare, 
  Trophy, 
  BarChart3, 
  Users, 
  FileText,
  Share2,
  Zap,
  Globe
} from "lucide-react";

const FeaturesSection = () => {
  const mainFeatures = [
    {
      icon: Upload,
      title: "Upload Machine Data",
      description: "Upload vibration data, sensor readings, and machine photos. Our platform supports all major industrial data formats.",
      color: "bg-industrial-success"
    },
    {
      icon: MessageSquare,
      title: "Expert Collaboration",
      description: "Get feedback from certified vibration analysts and reliability engineers worldwide.",
      color: "bg-industrial-primary"
    },
    {
      icon: Trophy,
      title: "Prediction Challenges",
      description: "Participate in gamified prediction challenges. Earn points and climb the global leaderboard.",
      color: "bg-industrial-accent"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Access professional-grade analysis tools including FFT, envelope analysis, and trend monitoring.",
      color: "bg-industrial-warning"
    }
  ];

  const communityFeatures = [
    {
      icon: Users,
      title: "Knowledge Exchange",
      description: "Share case studies, whitepapers, and maintenance best practices with the community."
    },
    {
      icon: FileText,
      title: "Learning Resources",
      description: "Access curated content, tutorials, and certification materials from industry experts."
    },
    {
      icon: Share2,
      title: "Data Sharing",
      description: "Securely share datasets with trusted colleagues and research partners."
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Connect with maintenance professionals from manufacturing plants worldwide."
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Everything You Need for
            <span className="text-accent"> Predictive Maintenance</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our platform combines cutting-edge analytics with global expertise to help you 
            prevent equipment failures and optimize maintenance operations.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {mainFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="p-8 hover:shadow-elegant transition-all duration-300 hover:scale-105 group">
                <div className="flex items-start space-x-6">
                  <div className={`w-16 h-16 ${feature.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:shadow-glow transition-all duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-card-foreground mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {feature.description}
                    </p>
                    <Button variant="ghost" className="text-accent hover:text-accent-foreground p-0 h-auto">
                      Learn more →
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Community Features */}
        <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-card">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-card-foreground mb-4">
              Join a Global Community of Experts
            </h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Connect, collaborate, and learn from the world's most experienced maintenance professionals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {communityFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-300">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h4 className="font-semibold text-card-foreground mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              <Zap className="w-5 h-5 mr-2" />
              Start Your Free Account
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;