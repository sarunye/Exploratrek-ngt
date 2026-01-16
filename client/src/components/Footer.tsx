import { Link } from "wouter";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t bg-card py-12 text-card-foreground">
      <div className="container max-w-screen-xl px-4 grid gap-8 md:grid-cols-4">
        <div className="flex flex-col gap-4">
          <Link href="/">
            <a className="flex items-center space-x-2">
              <span className="font-heading text-2xl font-bold text-primary">
                ExploraTrek<span className="text-foreground">Tours</span>
              </span>
            </a>
          </Link>
          <p className="text-sm text-muted-foreground">
            Bridging Worlds, Beyond Borders. Unforgettable adventures in Marsabit County.
          </p>
        </div>
        
        <div className="flex flex-col gap-2">
          <h3 className="font-heading font-semibold text-lg">Quick Links</h3>
          <Link href="/"><a className="text-sm text-muted-foreground hover:text-primary">Home</a></Link>
          <Link href="/packages"><a className="text-sm text-muted-foreground hover:text-primary">Packages</a></Link>
          <Link href="/contact"><a className="text-sm text-muted-foreground hover:text-primary">Contact</a></Link>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-heading font-semibold text-lg">Contact</h3>
          <a href="mailto:sarunye@gmail.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
            <Mail className="h-4 w-4" /> sarunye@gmail.com
          </a>
          <a href="tel:0707083728" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
            <Phone className="h-4 w-4" /> 0707 083 728
          </a>
          <span className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" /> Marsabit County, Kenya
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-heading font-semibold text-lg">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="container max-w-screen-xl px-4 mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} ExploraTrek Tours. All rights reserved.
      </div>
    </footer>
  );
}
