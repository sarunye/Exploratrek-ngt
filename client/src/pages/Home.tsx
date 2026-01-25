import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PackageCard } from "@/components/PackageCard";
import { packages } from "@/data/packages";
import { Button, buttonVariants } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Users, Globe } from "lucide-react";
import heroImage from "@assets/generated_images/chalbi_desert_land_cruiser_adventure.png";

export default function Home() {
  const featuredPackages = packages.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Marsabit Landscape" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30" />
        </div>
        
        <div className="container relative z-10 px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight drop-shadow-lg">
              Explore Beyond Borders
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8 font-light leading-relaxed">
              Discover the hidden gems of Marsabit County. From the lush Lake Paradise to the vast Chalbi Desert, 
              we craft unforgettable adventures.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/packages" className={buttonVariants({ size: "lg", className: "bg-primary hover:bg-primary/90 text-lg px-8 h-12" })}>
                View Packages
              </Link>
              <Link href="/contact" className={buttonVariants({ size: "lg", variant: "outline", className: "text-primary-foreground border-white/40 hover:bg-white/10 text-lg px-8 h-12" })}>
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-foreground">Why Choose ExploraTrek?</h2>
            <p className="text-muted-foreground">We bridge worlds and break boundaries, offering authentic experiences that support local communities.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-2xl shadow-sm border border-border/50 hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-3">Hidden Gems</h3>
              <p className="text-muted-foreground">Access exclusive locations in Marsabit that few travelers get to see, from volcanic craters to desert oases.</p>
            </div>
            <div className="bg-card p-8 rounded-2xl shadow-sm border border-border/50 hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-3">Cultural Immersion</h3>
              <p className="text-muted-foreground">Connect deeply with Samburu, Rendille, Borana, and Turkana communities through authentic interactions and traditional ceremonies.</p>
            </div>
            <div className="bg-card p-8 rounded-2xl shadow-sm border border-border/50 hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center text-accent-foreground mb-6">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-3">Virtual & Physical</h3>
              <p className="text-muted-foreground">Can't travel? Try our "etourism" Virtual Travel Companion service to explore Marsabit from home.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Packages */}
      <section className="py-20">
        <div className="container px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2">Popular Adventures</h2>
              <p className="text-muted-foreground">Curated experiences for every type of traveler.</p>
            </div>
            <Link href="/packages" className="hidden md:flex items-center gap-2 text-primary font-medium hover:underline">
              View all packages <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPackages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <Link href="/packages" className={buttonVariants({ variant: "outline", className: "w-full" })}>
              View All Packages
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-secondary text-secondary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container px-4 relative z-10 text-center">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">Ready for your adventure?</h2>
          <p className="text-secondary-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
            Whether you seek heart-pounding challenges or serene nature retreats, we have the perfect package for you.
          </p>
          <Link href="/contact" className={buttonVariants({ size: "lg", variant: "secondary", className: "bg-white text-secondary hover:bg-white/90 font-bold px-8 py-6 text-lg" })}>
            Start Planning
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
