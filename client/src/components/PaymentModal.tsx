import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Wallet, CreditCard, Landmark, ShieldCheck, CheckCircle2, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  amount: number;
}

export function PaymentModal({ isOpen, onClose, amount }: PaymentModalProps) {
  const [step, setStep] = useState<"form" | "success">("form");

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("success");
    setTimeout(() => {
      onClose();
      setStep("form");
    }, 3000);
  };

  const handlePayPal = () => {
    window.open("https://www.paypal.com/donate", "_blank");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden"
      >
        <AnimatePresence mode="wait">
          {step === "form" ? (
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="bg-primary p-8 text-white">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-3xl font-bold font-heading mb-2">Secure Payment</h2>
                    <p className="text-white/80">Complete your adventure booking</p>
                  </div>
                  <button onClick={onClose} className="text-white/60 hover:text-white transition-colors">
                    <ShieldCheck className="w-10 h-10" />
                  </button>
                </div>
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="text-sm opacity-80 uppercase tracking-widest">Amount Due:</span>
                  <span className="text-4xl font-bold">KES {amount.toLocaleString()}</span>
                </div>
              </div>

              <div className="p-8">
                <Tabs defaultValue="mpesa" className="w-full">
                  <TabsList className="grid grid-cols-4 mb-8 h-auto p-1 bg-muted/50 rounded-2xl">
                    <TabsTrigger value="mpesa" className="flex flex-col gap-1 py-3 rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-sm">
                      <Wallet className="w-5 h-5" />
                      <span className="text-[10px] font-bold">M-PESA</span>
                    </TabsTrigger>
                    <TabsTrigger value="card" className="flex flex-col gap-1 py-3 rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-sm">
                      <CreditCard className="w-5 h-5" />
                      <span className="text-[10px] font-bold">CARD</span>
                    </TabsTrigger>
                    <TabsTrigger value="bank" className="flex flex-col gap-1 py-3 rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-sm">
                      <Landmark className="w-5 h-5" />
                      <span className="text-[10px] font-bold">BANK</span>
                    </TabsTrigger>
                    <TabsTrigger value="paypal" className="flex flex-col gap-1 py-3 rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-sm">
                      <ExternalLink className="w-5 h-5" />
                      <span className="text-[10px] font-bold">PAYPAL</span>
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="mpesa" className="space-y-6">
                    <div className="bg-green-50 border border-green-100 rounded-2xl p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="bg-green-600 text-white p-2 rounded-lg font-bold">M-PESA</div>
                        <h3 className="font-bold text-green-900">Lipa Na M-PESA</h3>
                      </div>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center py-2 border-b border-green-200">
                          <span className="text-sm text-green-700">Till Number</span>
                          <span className="font-mono font-bold text-xl text-green-900">707 083</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-green-200">
                          <span className="text-sm text-green-700">Paybill</span>
                          <span className="font-mono font-bold text-xl text-green-900">247 247</span>
                        </div>
                        <div className="flex justify-between items-center py-2">
                          <span className="text-sm text-green-700">Account No.</span>
                          <span className="font-mono font-bold text-lg text-green-900">0707083728</span>
                        </div>
                      </div>
                    </div>
                    <Button onClick={() => setStep("success")} className="w-full h-14 text-lg font-bold bg-green-600 hover:bg-green-700">
                      I Have Paid
                    </Button>
                  </TabsContent>

                  <TabsContent value="card" className="space-y-4">
                    <div className="flex gap-2 mb-2">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" className="h-6 opacity-60" alt="Visa" />
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" className="h-6 opacity-60" alt="Mastercard" />
                    </div>
                    <div className="grid gap-4">
                      <div className="grid gap-2">
                        <Label>Cardholder Name</Label>
                        <Input placeholder="JOHN DOE" />
                      </div>
                      <div className="grid gap-2">
                        <Label>Card Number</Label>
                        <div className="relative">
                          <Input placeholder="0000 0000 0000 0000" />
                          <CreditCard className="absolute right-3 top-3 w-4 h-4 text-muted-foreground" />
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="grid gap-2 col-span-2">
                          <Label>Expiry Date</Label>
                          <Input placeholder="MM/YY" />
                        </div>
                        <div className="grid gap-2">
                          <Label>CVV</Label>
                          <Input placeholder="123" type="password" />
                        </div>
                      </div>
                      <div className="grid gap-2">
                        <Label>Card Alias (Optional)</Label>
                        <Input placeholder="Personal/Business" />
                      </div>
                    </div>
                    <Button onClick={handlePayment} className="w-full h-14 text-lg font-bold mt-4">
                      Pay Securely
                    </Button>
                  </TabsContent>

                  <TabsContent value="bank" className="space-y-4">
                    <div className="p-6 border-2 border-dashed rounded-2xl bg-muted/30">
                      <h3 className="font-bold text-lg mb-4">Bank Transfer Details</h3>
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Bank Name</span>
                          <span className="font-bold">Equity Bank Kenya</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Account Name</span>
                          <span className="font-bold">ExploraTrek Tours</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Account Number</span>
                          <span className="font-bold">0707 083 728</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Branch</span>
                          <span className="font-bold">Marsabit Branch</span>
                        </div>
                      </div>
                    </div>
                    <Button onClick={() => setStep("success")} className="w-full h-14 text-lg font-bold">
                      Confirm Transfer
                    </Button>
                  </TabsContent>

                  <TabsContent value="paypal" className="space-y-6 text-center py-8">
                    <div className="max-w-[200px] mx-auto mb-4">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/1200px-PayPal.svg.png" alt="PayPal" />
                    </div>
                    <p className="text-muted-foreground">You'll be redirected to PayPal to complete your booking payment securely.</p>
                    <Button onClick={handlePayPal} variant="outline" className="w-full h-14 text-lg font-bold border-2 border-primary text-primary hover:bg-primary/5">
                      Continue to PayPal <ExternalLink className="ml-2 w-5 h-5" />
                    </Button>
                  </TabsContent>
                </Tabs>
                <button 
                  onClick={onClose}
                  className="w-full mt-6 text-sm text-muted-foreground hover:text-foreground underline underline-offset-4"
                >
                  Cancel and Return
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-16 text-center"
            >
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-12 h-12" />
              </div>
              <h2 className="text-3xl font-bold mb-2">Payment Received!</h2>
              <p className="text-muted-foreground text-lg mb-8">
                Your adventure booking has been confirmed. Check your email for details.
              </p>
              <div className="animate-pulse text-sm font-medium text-primary">
                Redirecting you...
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
