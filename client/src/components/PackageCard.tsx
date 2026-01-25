import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Banknote, Check, ChevronDown, ChevronUp, Play } from "lucide-react";
import { useState } from "react";
import type { Package } from "@/data/packages";

interface PackageCardProps {
  pkg: Package;
}

export function PackageCard({ pkg }: PackageCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="overflow-hidden flex flex-col h-full group transition-all duration-300 hover:shadow-lg border-border/60">
      <div className="relative aspect-[4/3] overflow-hidden cursor-pointer">
        <div onClick={() => setIsExpanded(!isExpanded)}>
          <img 
            src={pkg.image} 
            alt={pkg.title} 
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-4 right-4">
            <Badge variant="secondary" className="backdrop-blur-md bg-background/80 text-foreground shadow-sm">
              {pkg.duration}
            </Badge>
          </div>
        </div>
        
        {pkg.videoUrl ? (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  variant="secondary" 
                  size="icon" 
                  className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/50 hover:bg-white/40 hover:scale-110 transition-all duration-300 pointer-events-auto"
                >
                  <Play className="w-8 h-8 fill-white text-white ml-1" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[800px] p-0 overflow-hidden bg-black border-none">
                <div className="aspect-video w-full">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src={pkg.videoUrl + "?autoplay=1"} 
                    title={pkg.title} 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        ) : (
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 pointer-events-none">
            <Button variant="secondary" size="sm" className="gap-2 pointer-events-auto" onClick={() => setIsExpanded(!isExpanded)}>
              {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              {isExpanded ? "Show Less" : "View Group Rates"}
            </Button>
          </div>
        )}
      </div>
      <CardHeader className="cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
        <CardTitle className="font-heading text-xl md:text-2xl leading-tight">{pkg.title}</CardTitle>
        <CardDescription className="flex items-center gap-2 mt-2 text-primary font-medium">
          <Banknote className="w-4 h-4" />
          {pkg.price}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {pkg.description}
        </p>
        
        {isExpanded ? (
          <div className="space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="bg-primary/5 p-4 rounded-lg border border-primary/10">
              <h4 className="text-sm font-bold text-primary mb-3 uppercase tracking-wider">Standard Group Rates</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between border-b border-primary/5 pb-1">
                  <span className="text-muted-foreground">3 Pax (Min)</span>
                  <span className="font-bold">KES 40,000</span>
                </div>
                <div className="flex justify-between border-b border-primary/5 pb-1">
                  <span className="text-muted-foreground">6 People</span>
                  <span className="font-bold">KES 33,000 ea</span>
                </div>
                <div className="flex justify-between border-b border-primary/5 pb-1">
                  <span className="text-muted-foreground">7 People</span>
                  <span className="font-bold">KES 30,000 ea</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">8 People</span>
                  <span className="font-bold">KES 27,000 ea</span>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-bold uppercase tracking-wider">Highlights</h4>
              {pkg.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-foreground/80">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-2">
            {pkg.highlights.slice(0, 3).map((highlight, idx) => (
              <div key={idx} className="flex items-center gap-2 text-sm text-foreground/80">
                <Check className="w-4 h-4 text-primary shrink-0" />
                <span>{highlight}</span>
              </div>
            ))}
            <Button 
              variant="ghost" 
              size="sm" 
              className="p-0 h-auto text-primary hover:text-primary/80 hover:bg-transparent"
              onClick={() => setIsExpanded(true)}
            >
              + See pricing details
            </Button>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button 
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
          onClick={() => window.location.href = "/booking"}
        >
          Book Adventure
        </Button>
      </CardFooter>
    </Card>
  );
}

