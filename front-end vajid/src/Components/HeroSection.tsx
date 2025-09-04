import { Search, MapPin, Star, TrendingUp, Users, CheckCircle } from "lucide-react";
import { Button } from "@/ui/button";
import { Input } from "@/ui/input";
import { Badge } from "@/ui/badge";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-16 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column */}
        <div className="space-y-8">
          <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 px-4 py-2">
            <TrendingUp className="h-4 w-4 mr-2" /> Most Trusted Platform
          </Badge>

          <h1 className="text-5xl font-bold text-gray-900 leading-tight">
            Find{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
              Trusted
            </span>{" "}
            Local Services
          </h1>
          <p className="text-lg text-gray-600 max-w-md">
            Connect with verified professionals near you. From home repairs to personal care, we’ve got you covered.
          </p>

          {/* Search Bar */}
          <div className="backdrop-blur-xl bg-white/40 p-6 rounded-2xl border border-white/30 shadow-lg space-y-3">
            <div className="grid md:grid-cols-3 gap-3">
              <div className="md:col-span-2 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input placeholder="e.g., Plumbing, tutoring..." className="pl-12 h-12" />
              </div>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input placeholder="Your location" className="pl-12 h-12" />
              </div>
            </div>
            <Button className="w-full h-12 bg-gradient-to-r from-emerald-600 to-green-600 text-white font-semibold">
              Find Services
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6">
            {[
              { number: "15K+", label: "Providers", icon: Users },
              { number: "98%", label: "Satisfaction", icon: Star },
              { number: "4.9", label: "Rating", icon: CheckCircle },
            ].map((stat, i) => (
              <div key={i} className="bg-white/40 backdrop-blur-lg p-4 rounded-xl text-center shadow-sm">
                <stat.icon className="h-6 w-6 text-emerald-600 mx-auto mb-2" />
                <div className="text-xl font-bold">{stat.number}</div>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column (Image Placeholder) */}
        <div className="hidden lg:block">
          <img
            src="/placeholder-hero.jpg"
            alt="Service providers"
            className="w-full h-[600px] object-cover rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
