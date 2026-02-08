import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Play } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { motion } from "framer-motion";

import boranaThumb from "@/assets/generated_images/borana_culture_thumbnail.png";
import blacksmithThumb from "@/assets/generated_images/merille_blacksmith_thumbnail.png";
import rockSlideThumb from "@/assets/generated_images/ngurunit_slide_thumbnail.png";
import samburuThumb from "@/assets/generated_images/samburu_dance_thumbnail.png";

// Custom media items that might not be directly linked to a package
const ADDITIONAL_MEDIA = [
  {
    id: "general-culture",
    title: "Experience the Culture of Marsabit",
    description: "A journey through the vibrant traditions and daily life of Marsabit's diverse communities.",
    videoUrl: "https://www.youtube.com/embed/ZQjAI-YU9wk",
    thumbnail: boranaThumb
  },
  {
    id: "merille-craft",
    title: "The Blacksmiths of Merille",
    description: "Witness the ancient art of ironworking passed down through generations.",
    videoUrl: "https://www.youtube.com/embed/yX5VWRocKss",
    thumbnail: blacksmithThumb
  },
  {
    id: "rock-sliding",
    title: "Ngurunit Rock Sliding",
    description: "Adrenaline-pumping natural water slides in the heart of the mountains.",
    videoUrl: "https://www.youtube.com/embed/JGi_j6p0smc",
    thumbnail: rockSlideThumb
  },
  {
    id: "samburu-dance",
    title: "Samburu Warrior Dance",
    description: "The spectacular jumping dance and songs of the Samburu warriors.",
    videoUrl: "https://www.youtube.com/embed/Q0WmlsNmHRo",
    thumbnail: samburuThumb
  }
];

export default function Media() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <div className="bg-primary/5 py-12 border-b">
        <div className="container px-4 text-center">
          <h1 className="font-heading text-4xl font-bold mb-4">Adventure Gallery</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Immerse yourself in the sights and sounds of Marsabit. Watch our latest adventures and cultural experiences.
          </p>
        </div>
      </div>

      <div className="container px-4 py-12 flex-grow">
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {ADDITIONAL_MEDIA.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300 border-border/60">
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="relative aspect-video overflow-hidden bg-black/10">
                      <img 
                        src={item.thumbnail} 
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border-2 border-white/60 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Play className="w-8 h-8 fill-white text-white ml-1" />
                        </div>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[900px] p-0 overflow-hidden bg-black border-none">
                    <div className="aspect-video w-full">
                      <iframe 
                        width="100%" 
                        height="100%" 
                        src={item.videoUrl + "?autoplay=1"} 
                        title={item.title} 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                      ></iframe>
                    </div>
                  </DialogContent>
                </Dialog>
                
                <CardContent className="p-6">
                  <h3 className="font-heading text-xl font-bold mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
