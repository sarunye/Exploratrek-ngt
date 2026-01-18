import { useState, useMemo } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { packages } from "@/data/packages";
import { Calculator, Users, MapPin, Sparkles, Receipt, Wallet } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ADDITIONAL_EXPERIENCES = [
  { id: "camel", label: "Camel Rides", price: 15000 },
  { id: "bike", label: "Bike Rides", price: 12000 },
  { id: "boat", label: "Boat Rides", price: 15000 },
  { id: "rock", label: "Rock Sliding", price: 10000 },
  { id: "fish", label: "Fishing", price: 12000 },
  { id: "mtn", label: "Mountain Climbing", price: 20000 },
  { id: "culture", label: "Cultural Experience", price: 15000 },
  { id: "camping", label: "Tents/Camping", price: 10000 },
  { id: "goat", label: "Goat Roasting (Nyama Choma)", price: 15000 },
];

export default function BookingCalculator() {
  const [pax, setPax] = useState(3);
  const [selectedPackageId, setSelectedPackageId] = useState(packages[0].id);
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
  const [isSelfTransport, setIsSelfTransport] = useState(false);

  const selectedPackage = useMemo(() => 
    packages.find(p => p.id === selectedPackageId) || packages[0],
  [selectedPackageId]);

  const pricing = useMemo(() => {
    let basePricePerPerson = 0;
    const duration = parseInt(selectedPackage.duration);

    if (isSelfTransport) {
      basePricePerPerson = 7000 * duration;
    } else {
      // Base rate: Each person in the initial group (up to 3) pays 40,000
      // "max 3 pax it means that each pax pays 40k"
      basePricePerPerson = 40000;
      
      // If there are more than 3, each additional person adds 2,000 to the total
      // The prompt says "any other additional person, need to add 2000"
      // This implies the 4th, 5th etc. person adds 2000 to the grand total
      // But let's check if the user meant 2000 per person or total. 
      // Usually "add 2000" in this context refers to a group increment.
    }

    const extrasTotal = selectedExtras.reduce((sum, extraId) => {
      // "each activity is per person is charged 7000"
      return sum + 7000;
    }, 0);

    const baseTotal = basePricePerPerson * Math.min(pax, 3);
    const extraPax = Math.max(0, pax - 3);
    const grandTotalBase = baseTotal + (extraPax * 2000);
    
    const finalTotalPerPerson = (grandTotalBase / pax) + extrasTotal;
    const grandTotal = grandTotalBase + (extrasTotal * pax);

    return {
      basePerPerson: basePricePerPerson,
      extrasTotal,
      totalPerPerson: finalTotalPerPerson,
      grandTotal,
      duration
    };
  }, [pax, selectedPackage, selectedExtras, isSelfTransport]);

  const toggleExtra = (id: string) => {
    setSelectedExtras(prev => 
      prev.includes(id) ? prev.filter(e => e !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <div className="bg-primary/5 py-12 border-b">
        <div className="container px-4 text-center">
          <h1 className="font-heading text-4xl font-bold mb-4">Adventure Planner</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Use this tool to calculate your exact trip costs. Select your group size, core adventure, and any add-on experiences. 
            Note: Standard rates apply for groups up to 3 people (40k each), with extra guests adding 2k to the group total.
          </p>
        </div>
      </div>

      <div className="container px-4 py-12 flex-grow">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Configuration */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="border-border/60">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Group Details
                </CardTitle>
              </CardHeader>
              <CardContent className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="pax">Number of People (Pax)</Label>
                  <Input 
                    id="pax" 
                    type="number" 
                    min={1} 
                    value={pax} 
                    onChange={(e) => setPax(Math.max(1, parseInt(e.target.value) || 0))}
                  />
                  {pax < 3 && !isSelfTransport && (
                    <p className="text-[10px] text-orange-600 font-medium italic">
                      Note: Minimum 3 pax recommended for standard rates.
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label>Core Adventure</Label>
                  <Select value={selectedPackageId} onValueChange={setSelectedPackageId}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a package" />
                    </SelectTrigger>
                    <SelectContent>
                      {packages.map(pkg => (
                        <SelectItem key={pkg.id} value={pkg.id}>{pkg.title}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="sm:col-span-2 flex items-center space-x-2 bg-muted/50 p-4 rounded-lg">
                  <Checkbox 
                    id="transport" 
                    checked={isSelfTransport} 
                    onCheckedChange={(checked) => setIsSelfTransport(!!checked)}
                  />
                  <div className="grid gap-1.5 leading-none">
                    <label htmlFor="transport" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      I have my own transport and food
                    </label>
                    <p className="text-xs text-muted-foreground">
                      Switch to the KES 7,000 per person per day rate.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/60">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  Additional Experiences
                </CardTitle>
                <CardDescription>
                  Select add-ons to enhance your adventure. Prices are per person.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {ADDITIONAL_EXPERIENCES.map((extra) => (
                  <div 
                    key={extra.id}
                    onClick={() => toggleExtra(extra.id)}
                    className={`
                      cursor-pointer p-4 rounded-xl border-2 transition-all duration-200
                      ${selectedExtras.includes(extra.id) 
                        ? 'border-primary bg-primary/5' 
                        : 'border-border/40 hover:border-border'}
                    `}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <Checkbox checked={selectedExtras.includes(extra.id)} />
                    </div>
                    <p className="font-semibold text-sm leading-tight">{extra.label}</p>
                    <p className="text-xs text-primary font-medium mt-1">KES {extra.price.toLocaleString()}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Summary */}
          <div className="space-y-6">
            <Card className="sticky top-24 border-primary/20 shadow-xl overflow-hidden">
              <div className="bg-primary p-6 text-primary-foreground">
                <h3 className="font-heading text-xl font-bold flex items-center gap-2">
                  <Receipt className="w-5 h-5" />
                  Booking Summary
                </h3>
              </div>
              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Base Package ({selectedPackage.duration})</span>
                    <span className="font-medium">KES {pricing.basePerPerson.toLocaleString()} ea</span>
                  </div>
                  {selectedExtras.length > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Add-ons Total</span>
                      <span className="font-medium">KES {pricing.extrasTotal.toLocaleString()} ea</span>
                    </div>
                  )}
                  <div className="pt-2 border-t flex justify-between font-bold text-lg">
                    <span>Total Per Person</span>
                    <span className="text-primary">KES {pricing.totalPerPerson.toLocaleString()}</span>
                  </div>
                </div>

                <div className="bg-muted p-4 rounded-lg space-y-1">
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Group Size</span>
                    <span>{pax} People</span>
                  </div>
                  <div className="flex justify-between font-bold text-xl pt-1">
                    <span>Grand Total</span>
                    <span>KES {pricing.grandTotal.toLocaleString()}</span>
                  </div>
                </div>

                <div className="pt-4 border-t space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 p-2 rounded-full text-green-700">
                      <Wallet className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">How to Pay</p>
                      <p className="text-sm">Pay via M-PESA Till Number: <span className="font-bold">707 083</span></p>
                      <p className="text-[10px] text-muted-foreground mt-1">Or Lipa na M-PESA Paybill: 247247 (Acc: 0707083728)</p>
                    </div>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 py-6 text-lg font-bold" onClick={() => window.location.href = "/contact"}>
                    Confirm Booking
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
