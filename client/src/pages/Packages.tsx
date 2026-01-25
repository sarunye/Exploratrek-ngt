import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PackageCard } from "@/components/PackageCard";
import { packages } from "@/data/packages";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Calculator } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Packages() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <div className="bg-muted/30 py-12 md:py-20">
        <div className="container px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-foreground">Our Tour Packages</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Choose from our carefully crafted itineraries or contact us for a custom-tailored adventure.
          </p>
        </div>
      </div>

      <div className="container px-4 py-16 flex-grow">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <PackageCard pkg={pkg} />
            </motion.div>
          ))}
        </div>
      </div>

      <section className="bg-primary/5 py-16 border-t border-primary/10">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-8">Group Pricing & Additional Services</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="border-primary/20 bg-primary/5">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">Standard Group Rates</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-left max-w-xs mx-auto">
                    <div className="bg-primary/10 p-3 rounded-lg mb-4 text-center">
                      <p className="text-sm font-semibold text-primary">Standard Rate (up to 3 Pax)</p>
                      <p className="text-xl font-bold">KES 40,000 per person</p>
                    </div>
                    <div className="flex justify-between items-center border-b border-primary/10 pb-2">
                      <span className="font-medium">Additional Guests (4th+)</span>
                      <span className="text-primary font-bold">+ KES 2,000 each</span>
                    </div>
                    <div className="flex justify-between items-center pb-2">
                      <span className="font-medium">Self-Transport Rate</span>
                      <span className="text-primary font-bold">KES 7,000 /day</span>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-primary/10">
                    <Link href="/booking">
                      <Button className="w-full bg-primary hover:bg-primary/90 flex gap-2 items-center justify-center py-6">
                        <Calculator className="w-5 h-5" />
                        <div>
                          <div className="font-bold">Open Adventure Planner</div>
                          <div className="text-[10px] opacity-80 font-normal">Calculate exact group rates & add-ons</div>
                        </div>
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-secondary/20 bg-secondary/5">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">Add-on Experiences</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground mb-4 text-center">Customize your journey with these exciting activities.</p>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-left">
                    <div className="flex items-center gap-2"><span>• Camel Rides</span></div>
                    <div className="flex items-center gap-2"><span>• Bike Rides</span></div>
                    <div className="flex items-center gap-2"><span>• Boat Rides</span></div>
                    <div className="flex items-center gap-2"><span>• Rock Sliding</span></div>
                    <div className="flex items-center gap-2"><span>• Fishing</span></div>
                    <div className="flex items-center gap-2"><span>• Mtn Climbing</span></div>
                    <div className="flex items-center gap-2"><span>• Culture Exp.</span></div>
                    <div className="flex items-center gap-2"><span>• Tents/Camping</span></div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-secondary/10 text-center">
                    <p className="font-bold text-secondary">Fees: KES 10,000 — 20,000 per person</p>
                    <p className="text-[10px] text-muted-foreground mt-1">* Drinks at extra cost</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-orange-50 dark:bg-orange-950/20 p-8 rounded-2xl border border-orange-200 dark:border-orange-900/50 mb-12">
              <h3 className="font-heading text-2xl font-bold text-orange-800 dark:text-orange-400 mb-4 flex items-center justify-center gap-3">
                <span className="text-3xl">🏹</span> Samburu Warrior Culture
              </h3>
              <p className="text-orange-700 dark:text-orange-300 max-w-2xl mx-auto">
                Step into the vibrant world of the Samburu people. Known for their intricate beadwork and 
                powerful singing, we offer a rare window into their nomadic lifestyle. Witness the 
                spectacular jumping dances and join the 'Moran' (warriors) as they share stories of 
                resilience and tradition under the vast Marsabit sky.
              </p>
            </div>

            <div className="bg-orange-50 dark:bg-orange-950/20 p-8 rounded-2xl border border-orange-200 dark:border-orange-900/50 mb-12">
              <h3 className="font-heading text-2xl font-bold text-orange-800 dark:text-orange-400 mb-4 flex items-center justify-center gap-3">
                <span className="text-3xl">🛷</span> Rock Sliding Adventure
              </h3>
              <p className="text-orange-700 dark:text-orange-300 max-w-2xl mx-auto">
                Experience the thrill of Ngurunit's natural rock slides! Carved by mountain waters over centuries, 
                these smooth granite chutes offer an exhilarating heart-pounding challenge in one of Marsabit's 
                most beautiful landscapes.
              </p>
            </div>

            <div className="bg-orange-50 dark:bg-orange-950/20 p-8 rounded-2xl border border-orange-200 dark:border-orange-900/50 mb-12">
              <h3 className="font-heading text-2xl font-bold text-orange-800 dark:text-orange-400 mb-4 flex items-center justify-center gap-3">
                <span className="text-3xl">🔥</span> Traditional Goat Roasting
              </h3>
              <p className="text-orange-700 dark:text-orange-300 max-w-2xl mx-auto">
                Experience an authentic Marsabit tradition with our signature goat roasting (Nyama Choma). 
                We can organize this special feast both at home and during your hike. 
                Perfect for celebrating your journey under the stars.
              </p>
            </div>

            <div className="flex flex-col justify-center">
              <p className="text-muted-foreground mb-6 text-center">
                We offer tailor-made packages to suit your preferences and desired duration. 
                We also handle vehicle rentals, hotel bookings, and mechanics assistance.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left bg-card p-6 rounded-xl border border-border/50 shadow-sm max-w-2xl mx-auto w-full">
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li className="flex items-center gap-2">✓ Hotel & Accommodation Booking</li>
                  <li className="flex items-center gap-2">✓ Vehicle Rentals (Land Cruisers)</li>
                </ul>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li className="flex items-center gap-2">✓ Mechanics Assistance</li>
                  <li className="flex items-center gap-2">✓ Virtual Travel Companion</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
