import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  BarChart3, 
  Trophy, 
  BookOpen, 
  MessageSquare,
  TrendingUp,
  ChevronRight,
  Star,
  Clock,
  Shield
} from "lucide-react";

const Index = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Senior Reliability Engineer",
      company: "Boeing Manufacturing",
      content: "GoLiveMachine has revolutionized how our team approaches predictive maintenance. The community insights are invaluable.",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      role: "Vibration Analyst",
      company: "Shell Energy",
      content: "The prediction accuracy and collaborative features have helped us prevent millions in equipment failures.",
      rating: 5
    },
    {
      name: "Dr. Priya Patel",
      role: "Industrial IoT Specialist",
      company: "Siemens Digital Industries",
      content: "Best platform for sharing knowledge and learning from global maintenance experts. Highly recommended.",
      rating: 5
    }
  ];

  const recentActivities = [
    {
      type: "prediction",
      user: "Alex Thompson",
      action: "predicted bearing failure",
      machine: "Compressor Unit #4",
      time: "2 hours ago",
      accuracy: "94%"
    },
    {
      type: "upload",
      user: "Maria Garcia",
      action: "uploaded vibration data",
      machine: "Pump Station B",
      time: "4 hours ago",
      points: "+50 pts"
    },
    {
      type: "discussion",
      user: "Dr. James Park",
      action: "answered question about",
      machine: "Motor alignment issues",
      time: "6 hours ago",
      helpful: "12 helpful votes"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <HeroSection />
        <FeaturesSection />
        
        {/* Live Activity Feed */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Live Activity */}
              <div className="lg:col-span-2">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-foreground">Live Community Activity</h2>
                  <Badge variant="secondary" className="bg-industrial-success/10 text-industrial-success">
                    <div className="w-2 h-2 bg-industrial-success rounded-full mr-2 animate-pulse"></div>
                    Live
                  </Badge>
                </div>
                
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <Card key={index} className="p-4 hover:shadow-card transition-shadow">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                          {activity.type === 'prediction' && <TrendingUp className="w-5 h-5 text-primary-foreground" />}
                          {activity.type === 'upload' && <BarChart3 className="w-5 h-5 text-primary-foreground" />}
                          {activity.type === 'discussion' && <MessageSquare className="w-5 h-5 text-primary-foreground" />}
                        </div>
                        <div className="flex-1">
                          <p className="text-card-foreground">
                            <span className="font-semibold">{activity.user}</span> {activity.action}{' '}
                            <span className="text-accent font-medium">{activity.machine}</span>
                          </p>
                          <div className="flex items-center space-x-4 mt-2 text-sm text-muted-foreground">
                            <span className="flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              {activity.time}
                            </span>
                            {activity.accuracy && (
                              <Badge variant="outline" className="text-industrial-success border-industrial-success/30">
                                {activity.accuracy}
                              </Badge>
                            )}
                            {activity.points && (
                              <Badge variant="outline" className="text-accent border-accent/30">
                                {activity.points}
                              </Badge>
                            )}
                            {activity.helpful && (
                              <Badge variant="outline" className="text-industrial-warning border-industrial-warning/30">
                                {activity.helpful}
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
                
                <Button variant="outline" className="w-full mt-6">
                  View All Activity <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </div>

              {/* Quick Stats & CTA */}
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="font-semibold text-card-foreground mb-4">Platform Statistics</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Active Users</span>
                      <span className="font-semibold text-industrial-success">2,847</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Predictions Today</span>
                      <span className="font-semibold text-accent">156</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Data Uploads</span>
                      <span className="font-semibold text-industrial-warning">89</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Downtime Prevented</span>
                      <span className="font-semibold text-industrial-primary">$2.4M</span>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-gradient-primary text-primary-foreground">
                  <div className="text-center">
                    <Shield className="w-12 h-12 mx-auto mb-4 opacity-80" />
                    <h3 className="font-semibold mb-2">Ready to Prevent Failures?</h3>
                    <p className="text-sm opacity-90 mb-4">
                      Join thousands of experts sharing knowledge and preventing costly downtime.
                    </p>
                    <Button variant="accent" className="w-full">
                      Start Free Account
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Trusted by Industry Leaders
              </h2>
              <p className="text-xl text-muted-foreground">
                See what maintenance professionals are saying about GoLiveMachine
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-6 hover:shadow-elegant transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-accent fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-card-foreground mb-4 italic">
                    "{testimonial.content}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-card-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-sm text-accent font-medium">{testimonial.company}</div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-hero">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Transform Your Maintenance Strategy?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Join the global community of maintenance professionals and start preventing 
              failures before they happen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="lg" className="text-lg px-8 py-6">
                <Users className="w-5 h-5 mr-2" />
                Join Free Community
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-background/10 backdrop-blur-sm border-primary-foreground/20 text-primary-foreground hover:bg-background/20">
                <BookOpen className="w-5 h-5 mr-2" />
                View Demo
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border/40 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-6 h-6 bg-gradient-primary rounded flex items-center justify-center">
                  <BarChart3 className="w-4 h-4 text-primary-foreground" />
                </div>
                <span className="font-bold text-card-foreground">GoLiveMachine</span>
              </div>
              <p className="text-sm text-muted-foreground">
                The global community for predictive maintenance professionals.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-card-foreground mb-4">Platform</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Dashboard</li>
                <li>My Machines</li>
                <li>Prediction Arena</li>
                <li>Analytics Tools</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-card-foreground mb-4">Community</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Knowledge Exchange</li>
                <li>Expert Network</li>
                <li>Learning Center</li>
                <li>Case Studies</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-card-foreground mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Documentation</li>
                <li>API Reference</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border/40 mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2024 GoLiveMachine. All rights reserved. Empowering predictive maintenance worldwide.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;