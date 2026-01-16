import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Banknote, Check } from "lucide-react";
import { Link } from "wouter";
import type { Package } from "@/data/packages";

interface PackageCardProps {
  pkg: Package;
}

export function PackageCard({ pkg }: PackageCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col h-full group transition-all duration-300 hover:shadow-lg border-border/60">
      <div className="relative aspect-[4/3] overflow-hidden">
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
      <CardHeader>
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
        <div className="space-y-2">
          {pkg.highlights.slice(0, 3).map((highlight, idx) => (
            <div key={idx} className="flex items-center gap-2 text-sm text-foreground/80">
              <Check className="w-4 h-4 text-primary shrink-0" />
              <span>{highlight}</span>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Link href="/contact" className="w-full">
          <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
            Book Adventure
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
