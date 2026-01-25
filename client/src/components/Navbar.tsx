import { Link } from "wouter";
import { Button, buttonVariants } from "@/components/ui/button";
import { Menu, X, Phone, Mail, Instagram, Facebook } from "lucide-react";
import { useState } from "react";

import logoImg from "@assets/generated_images/exploratrek_tours_hand-drawn_logo.png";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 max-w-screen-xl items-center justify-between px-4">
        <Link href="/" className="mr-6 flex items-center space-x-3 group">
          <div className="w-12 h-12 overflow-hidden rounded-lg border border-border/50 group-hover:border-primary/50 transition-colors">
            <img src={logoImg} alt="ExploraTrek Logo" className="w-full h-full object-cover" />
          </div>
          <span className="font-heading text-xl font-bold text-primary sm:text-2xl">
            ExploraTrek<span className="text-foreground">Tours</span>
          </span>
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex md:items-center md:gap-8">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link href="/packages" className="text-sm font-medium transition-colors hover:text-primary">
            Packages
          </Link>
          <Link href="/stories" className="text-sm font-medium transition-colors hover:text-primary">
            Stories
          </Link>
          <Link href="/media" className="text-sm font-medium transition-colors hover:text-primary">
            Gallery
          </Link>
          <Link href="/booking" className="text-sm font-medium transition-colors hover:text-primary">
            Planner
          </Link>
          <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
            Contact
          </Link>
          <Link href="/booking" className={buttonVariants({ variant: "default", size: "sm", className: "bg-primary hover:bg-primary/90" })}>
            Book Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="flex items-center justify-center rounded-md p-2 text-muted-foreground md:hidden hover:bg-accent hover:text-accent-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="container md:hidden pb-4">
          <div className="flex flex-col space-y-4 px-4 py-4 bg-background border-t">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link href="/packages" className="text-sm font-medium transition-colors hover:text-primary" onClick={() => setIsOpen(false)}>
              Packages
            </Link>
            <Link href="/stories" className="text-sm font-medium transition-colors hover:text-primary" onClick={() => setIsOpen(false)}>
              Stories
            </Link>
            <Link href="/media" className="text-sm font-medium transition-colors hover:text-primary" onClick={() => setIsOpen(false)}>
              Gallery
            </Link>
            <Link href="/booking" className="text-sm font-medium transition-colors hover:text-primary" onClick={() => setIsOpen(false)}>
              Planner
            </Link>
            <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
            <Link href="/booking" className={buttonVariants({ className: "w-full bg-primary hover:bg-primary/90" })} onClick={() => setIsOpen(false)}>
              Book Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
